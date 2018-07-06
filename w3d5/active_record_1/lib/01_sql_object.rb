require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    # name = @table_name.to_sym
    @array ||= DBConnection.execute2(<<-SQL)
      SELECT
        * 
      FROM 
        #{self.table_name}
    SQL
    @array.first.map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |sym| 
      define_method(sym) do
        # instance_variable_get("@#{sym}")
        self.attributes[sym]
      end
      define_method("#{sym}=") do |value|
        # instance_variable_set("@#{sym}",value)
        self.attributes[sym] = value
      end
    end 
  end

  def self.table_name=(table_name) #setter
    @table_name = table_name
  end

  def self.table_name #getter
    @table_name ||= self.to_s.tableize 
  end

  def self.all
    hash = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL
    
    self.parse_all(hash)
    
  end

  def self.parse_all(results)
    # ...
    results.map do |hash|
      self.new(hash)
    end 
  end

  def self.find(id)
    # ...
    hash = DBConnection.execute(<<-SQL,id)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE 
        id = ?
    SQL

    self.parse_all(hash).first
  end

  def initialize(params = {})
    params.each_pair do |k,v|
      raise "unknown attribute '#{k}'" unless self.class.columns.include?(k.to_sym)
      self.send("#{k}=",v) 
    end
  end

  def attributes
    # ...
    @attributes ||= {}
    
  end

  def attribute_values
    self.attributes.values
  end

  def insert
    values = attribute_values
    q_marks = "(" + (["?"] * values.length).join(",") + ")"
    cols = self.class.columns - [:id]
    columns = "(" + cols.join(",") + ")"

    DBConnection.execute(<<-SQL, *values)
      INSERT INTO 
        #{self.class.table_name}  #{columns} 
      VALUES
        #{q_marks}
    SQL
    self.id = DBConnection.last_insert_row_id
    
  end

  def update
    values = attribute_values - [self.id]
    cols = self.class.columns - [:id]
    cols = cols.map{ |el| "#{el}=?"}.join(",")
    DBConnection.execute(<<-SQL, *values, self.id)
    UPDATE 
      #{self.class.table_name}
    SET 
      #{cols}
    WHERE 

      id = ?
    SQL
  end

  def save
    id.nil? ? self.insert : self.update
  end
end
