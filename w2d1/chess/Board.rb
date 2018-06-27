require_relative "Piece"
require_relative "Display"
require "byebug"
class Board
  attr_reader :board

  def initialize(board = Array.new(8){Array.new(8)})

    @board = board
    populate_board
  end

  def populate_board

    @board.each_with_index do |row, idx|
      # byebug
      row.each_with_index do |col, i|
        unless (3..4).include?(idx)
          self[[idx,i]] = Piece.new
        end
      end
    end
  end
  def []=(pos,value)
    row, col = pos
    @board[row][col] = value
  end

  def [](pos)
    row, col = pos
    @board[row][col]
  end

  def move_piece(start_pos, end_pos)
    raise NoPieceError if self[start_pos].nil?
    raise IllegalMoveError unless valid_input?(end_pos)
    self[start_pos], self[end_pos] = nil, self[start_pos]
  end

  def valid_input?(pos)
    row, col = pos
    row.between?(0, 7) && col.between?(0, 7)

  end
end

class NoPieceError < StandardError
  def message
    puts "No piece at this location"
  end
end



board = Board.new
board.populate_board
display = Display.new(board)
display.play
