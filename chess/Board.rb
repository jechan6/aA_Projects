require_relative "Piece"
require_relative "Display"
require_relative "NullPiece"
require_relative "SlideablePieces"
require_relative "StepablePieces"
require_relative "Pawn"
require "byebug"
class Board
  attr_reader :board

  def initialize(board = Array.new(8){Array.new(8)})

    @board = board
    # populate_board
  end

  def populate_board

    @board.each_index do |idx|
      # byebug
      @board[idx].each_index do |i|
        pos = [idx,i]

        if idx == 0 || idx == 7
          create_row(pos)

        elsif idx == 1 || idx == 6
          self[pos] = Pawn.new(:♟ , self, pos)
        elsif idx.between?(2,5)
          self[pos] = NullPiece.new(:white)
        end
      end
    end

  end

  def move_piece(move_from, move_to)
    # raise NoPieceError if self[start_pos].nil?
    # raise IllegalMoveError unless valid_input?(end_pos)
    self[move_from].move_dirs

    piece = self[move_from]


    if piece.valid_moves.include?(move_to)
      self[move_from].pos = move_to

      self[move_from], self[move_to] = NullPiece.new(:white), self[move_from]
    end
  end

  def create_row(pos)
    x, y = pos
    self[pos] = Rook.new(:♜, self, pos) if y == 0 || y == 7
    self[pos] = Knight.new(:♞, self, pos) if y == 1 || y == 6
    self[pos] = Bishop.new(:♝, self, pos) if y == 2 || y == 5
    self[pos] = Queen.new(:♛, self, pos) if y == 3
    self[pos] = King.new(:♚, self, pos) if y == 4


  end
  def []=(pos,value)
    row, col = pos
    @board[row][col] = value
  end

  def [](pos)
    row, col = pos
    @board[row][col]
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


if __FILE__ == $PROGRAM_NAME
  board = Board.new
  board.populate_board
  #print board[[2,4]].move_diffs
  # puts board[[3,4]]
  display = Display.new(board)
  display.play

end
