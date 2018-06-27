module Stepable


  def knight_dirs
    KNIGHT_DIRS
  end
  def king_dirs
    KING_DIRS
  end
  def moves
    cur_x, cur_y = pos
    self.get_dir.each do |(dx, dy)|
      new_pos = [cur_x + dx, cur_y + dy]

      if board.valid_input?(new_pos) #&& board[new_pos].is_a?(NullPiece)
        valid_moves << new_pos
      end
    end
    valid_moves
  end
  private
  KNIGHT_DIRS = [
    [-2, -1],
    [-2,  1],
    [-1, -2],
    [-1,  2],
    [ 1, -2],
    [ 1,  2],
    [ 2, -1],
    [ 2,  1]
  ].freeze

  KING_DIRS = [
    [0, 1],
    [0,-1],
    [1, 0],
    [-1,0],

    [-1,-1],
    [1,1],
    [1,-1],
    [-1,1]
  ]
end
