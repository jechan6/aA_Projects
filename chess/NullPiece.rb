require_relative "Piece"
class NullPiece < Piece
  def initialize(color)

  end
  def to_s
    "  X  "
  end
end
