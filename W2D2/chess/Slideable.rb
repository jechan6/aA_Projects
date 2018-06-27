

module Slideable

  def horizontal_dirs
    HORIZONTAL_DIRS
  end
  def diagonal_dirs
    DIAGONAL_DIRS
  end

  # def self.valid_moves(pos)

  # end

  def moves


    self.get_dir.each do |(dx, dy)|
      grow_unblocked_moves_in_dir(dx,dy)
    end

    valid_moves
end

  private
  HORIZONTAL_DIRS = [
                [0, 1],
                [0,-1],
                [1, 0],
                [-1,0]]
  DIAGONAL_DIRS = [
                [-1,-1],
                [1,1],
                [1,-1],
                [-1,1]]
  def grow_unblocked_moves_in_dir(dx,dy)

    cur_x, cur_y = pos
    new_pos = [cur_x + dx, cur_y + dy]

    while board.valid_input?(new_pos) && board[new_pos].is_a?(NullPiece)
      valid_moves << new_pos
      cur_x, cur_y = cur_x + dx, cur_y + dy
      new_pos = [cur_x + dx, cur_y + dy]
    end

    valid_moves


  end
  def move_dirs

  end
end
