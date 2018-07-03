require "sqlite3"
require "singleton"
class QuestionsDatabase < SQLite3::Database
  include Singleton
  
  def initialize
   super('questions.db')
   self.type_translation = true
   self.results_as_hash = true
  end
 
end 

class Users
  attr_accessor :fname, :lname
  attr_reader :id

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil unless data.length > 0
    return Users.new(data.first) 
  end 
  
  def self.find_by_name(fname, lname)
    user = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT 
        *
      FROM
        users
      WHERE 
        fname = ? AND 
        lname = ?
    SQL
    
  end 
  
  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end
  
  def create 
    raise "#{self} already in database" if @id
    QuestionsDatabase.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
        users (fname, lname)
      VALUES
        (?, ?)
    SQL
    
    @id = QuestionsDatabase.instance.last_insert_row_id
  end 

end 

class Questions 
  
  attr_accessor :title, :body
  attr_reader :author_id, :id 
  
  def self.find_by_id(id)
    question  = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL

    return nil unless question.length > 0
    Questions.new(question.first)
  end
  
  def self.find_by_author_id(author_id)
    question  = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *
      FROM
        questions
      WHERE
        author_id = ?
    SQL

    return nil unless question.length > 0
    
    question.map {|el| Questions.new(el)}
  end
  
  
  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end 
  
  def create 
    raise "#{self} already in database" if @id
    QuestionsDatabase.instance.execute(<<-SQL, @title, @body, @author_id)
      INSERT INTO
        questions(title, body, author_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = QuestionsDatabase.instance.last_insert_row_id
  end 

end