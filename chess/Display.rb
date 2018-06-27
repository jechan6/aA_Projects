require_relative "cursor"
require 'colorized_string'
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
      if cursor.move_array.length == 2
        move_from, move_to = cursor.move_array
        @board.move_piece(move_from, move_to)
        cursor.move_array = []
      end



      system("clear")
      render

    end


  end

  def render
    #puts ColorizedString.color_samples
    # @board.board.each_with_index do |row, idx|
    #   puts "#{row.join("")}"
    # end
    #both
    # piece = board[cursor.cursor_pos]
    @board.board.each_with_index do |row, idx|
      line = ""
      row.each_with_index do |col, i|
        pos = [idx,i]
        color = add_background_color(pos)
        # byebug

        print @board[pos].to_s.colorize( :background => color)
        # if [idx, i] == cursor.cursor_pos && !board[cursor.cursor_pos].selected
        #     line += board[pos].to_s.colorize(:blue)
        #     next
        # elsif !board[pos].nil? && board[pos].selected
        #     line += board[pos].to_s.colorize(:light_white).on_light_cyan
        #     next
        # elsif idx.between?(0,2)
        #   line += board[pos].to_s.colorize(:yellow)
        # elsif idx.between?(3,4)
        #   line += "X".colorize(:white)
        # else
        #   line += board[pos].to_s.colorize(:red)
        # end
      end
      puts ""
    end

  end
  def add_background_color(pos)
    x, y = pos
    if pos == cursor.cursor_pos && cursor.selected

      return :green
    elsif pos == cursor.cursor_pos
      return :yellow
    elsif (x.even? && y.even?) || (x.odd? && y.odd?)
      return :white
    elsif
      :brown
    end
  end
  private

  attr_reader :board, :cursor

end
