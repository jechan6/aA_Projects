class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    self[key] << key
    @count += 1
    resize! if count == @store.length
  end

  def include?(key)
  
    return true if self[key].include?(key)
    false
  end

  def remove(key)
    if include?(key)
      self[key].delete(key)
      @count -= 1
    end 
  end

  private

  def [](num)
    @store[num.hash % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    num = num_buckets * 2
    store2 = Array.new(num) {Array.new}
    @store.each do |el|
      store2[el.hash % num] << el
    end
    @store = store2
  end
end
