class MaxIntSet
  def initialize(max)
    @range = max
    @store = Array.new(max){false}
  end
  
  def insert(num)
    is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    is_valid?(num) && @store[num]
  end

  private

  def is_valid?(num)
    num.between?(0,@range) ? true : (raise "Out of bounds")
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    return true if self[num].include?(num)
    false
  end

  private

  def [](num)
    @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    #if @store is full, resize to double, copy all over to new spots
    #if count == @store.length, then resize 
    unless self.include?(num)
      self[num] << num
      @count +=1
      resize! if count >= @store.length
    end
  end

  def remove(num)
    if @store.include?(num)
      @store[num].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    return true if @store[num] == num
    false
  end

  private

  def [](num)
    @store[num % num_buckets]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    store2 = Array.new(num_buckets*2) {Array.new}
    @store.each do |el|
      store2[(el % (num_buckets*2))] = el
    end
    @store = store2
  end
end
