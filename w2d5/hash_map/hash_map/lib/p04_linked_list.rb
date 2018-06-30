class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  
  def initialize
    @head = Node.new(:head,true)
    @tail = Node.new(:tail,true)
    @head.next = @tail 
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next unless empty?
  end

  def last
    @tail.prev unless empty?
  end

  def empty?
    @head.next == @tail 
  end

  def get(key)
    if include?(key)
      self.each do |node|
        return node.val if node.key == key
      end
    end 
    
    
  end

  def include?(key)
    self.each do |node|
      return true if node.key == key
    end 
    false
    # self.any? {|node| node.key == key}
  end

  def append(key, val)
    node = Node.new(key,val)
    node.prev = @tail.prev
    @tail.prev.next = node
    node.next = @tail
    @tail.prev = node
  end

  def update(key, val)
    unless empty?
      self.each do |node|
         if node.key == key
           node.val = val
           break 
         end 
      end 
    end 
  end

  def remove(key)
    self.each do |node|
      if node.key == key
        temp_node = node.next #the one after
        temp_node.prev = node.prev
        node.prev.next = temp_node
        break
      end
    end
  end

  def each(&prc)
    unless empty?
      current_node = first
      
      until current_node == @tail 
        prc.call(current_node) 
        current_node = current_node.next
      end 
    end 
    self
  end
  

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
