require_relative 'p04_linked_list'

class HashMap
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    #self[bucket(key)]
  end

  def set(key, val)
    self[key].append(key,val)
  end

  def get(key)
  end

  def delete(key)
  end

  def each
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set
  
  def [](key)
    return @store[bucket(key)] if @store[bucket(key)].empty?
    linked_list = @store[bucket(key)]
    linked_list.each 
  end
  
  def []=(key,value)
    if @store[bucket(key)].empty?
      
      @store[bucket(key)].append(key,value)
      return 
    end
    @store[bucket(key)].update(key,value)
  end
  
  private

  def num_buckets
    @store.length
  end

  def resize!
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    #recalc bucket for given key
    key.hash % num_buckets
  end
end
