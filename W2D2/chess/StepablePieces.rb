require_relative "Piece"
require_relative "Stepable"
class Knight < Piece
  include Stepable

  def get_dir
    knight_dirs
  end

  def move_dirs
    self.moves
  end
end

class King < Piece
  include Stepable

  def get_dir
    king_dirs
  end

  def move_dirs
    self.moves
  end
end
