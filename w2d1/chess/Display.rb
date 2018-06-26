require_relative "cursor"

require_relative "Piece"
require "colorize"
require "byebug"

class Display

  def initialize(board)
    @board = board
    @cursor = Cursor.new([0,0], board)
  end

  def play
    render

    loop do
      cursor.get_input
      pos = cursor.cursor_pos

      board[pos] ||= Piece.new
      system("clear")
      render

    end


  end

  def render
    piece = board[cursor.cursor_pos]
    @board.board.each_with_index do |row, idx|
      line = ""
      row.each_with_index do |col, i|
        pos = [idx,i]

        if [idx, i] == cursor.cursor_pos && !board[cursor.cursor_pos].selected
            line += board[pos].to_s.colorize(:blue)
            next
        elsif !board[pos].nil? && board[pos].selected
            line += board[pos].to_s.colorize(:green)
            next
        elsif idx.between?(0,2)
          line += board[pos].to_s.colorize(:yellow)
        elsif idx.between?(3,4)
          line += "X".colorize(:white)
        else
          line += board[pos].to_s.colorize(:red)
        end
      end
      puts line
    end

  end
  private

  attr_reader :board, :cursor

end
