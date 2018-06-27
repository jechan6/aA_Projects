require_relative "Piece"
require_relative "Slideable"
class Rook < Piece
  include Slideable


  def get_dir
    horizontal_dirs
  end

  def move_dirs

    self.moves
  end
end

class Bishop < Piece
  include Slideable

  def get_dir
    diagonal_dirs
  end
  def move_dirs
    self.moves
  end
end

class Queen < Piece
  include Slideable

  def get_dir

    horizontal_dirs + diagonal_dirs
  end
  def move_dirs
    self.moves
  end

end
