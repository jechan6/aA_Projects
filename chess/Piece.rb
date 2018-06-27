# require_relative "NullPiece"
class Piece

  attr_accessor :selected, :color, :pos ,:dir, :board, :valid_moves, :symbol
  def initialize(symbol,board, pos)
    @selected = false
    @pos = pos
    @board = board
    @symbol = symbol
    @valid_moves = []

  end


  def set_symbol(symbol)
    @symbol = symbol
  end
  # def self.valid_moves(pos)
  #   valid_moves = []
  #
  #   cur_x, cur_y = pos
  #   MOVES.each do |(dx, dy)|
  #     new_pos = [cur_x + dx, cur_y + dy]
  #
  #     if new_pos.all? { |coord| coord.between?(0, 7) }
  #       valid_moves << new_pos
  #     end
  #   end
  #
  #   valid_moves
  # end

  def move_dirs

  end

  def to_s
    "  #{symbol}  "
  end

  def inspect
    "#{pos} sym #{symbol}"
  end



end
