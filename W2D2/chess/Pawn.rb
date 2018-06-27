require_relative "Piece"

class Pawn < Piece

  # def initialize
  #   @at_start_row = true
  #   @symbol = ♟
  # end

  

  def move_dirs
    x, y = pos
    if at_start_row?
      valid_moves << [x+1, y]
      valid_moves << [x+2, y]
    else
      valid_moves << [x+1, y]
    end
  end

  def at_start_row?
    @at_start_row
  end
end
