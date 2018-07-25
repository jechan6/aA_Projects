const HanoiGame = require('./game.js');

class HanoiView {
  
  constructor(game, el) {
    this.game = game;
    this.towers = game.towers;
    this.el = el;
    this.setupTowers();
    // this.render();
    this.moves = [];
    $('ul').hover(function() {
      $(this).removeClass('mouseover');
      $(this).addClass('hover');
      // $(this).css("border-bottom","10px solid blue" );
    }, function() {
      $(this).removeClass('hover');
      $(this).addClass('mouseover');
    });
    $('ul').on("click", (e)=> {
    
    
      this.clickTower(e.currentTarget);
    });
  
    
  }
  setupTowers() {
    // const $board = $("<ul></ul>");
    for(let i = 0; i<3;i++) {
      const $stack = $("<ul></ul>");
      for(let j = this.towers[i].length - 1; j >= 0; j--) {
        const $li = $("<li>disc</li>");
        $li.addClass(`disc${this.towers[i][j]}`);
        $stack.append($li);

      }
      
      $stack.data("pile", i);
      this.el.append($stack);
    }
  }
  clickTower(e) {
    if(this.moves.length < 1) {
      this.moves.push($(e).data('pile'));
    } else {
      this.moves.push($(e).data('pile'));
      
      if (this.game.move(this.moves[0],this.moves[1])) {
        this.render();
        this.el.removeClass('clicked');
        if (this.game.isWon()) {
          $('.winner').text('WINNNER WINNER CHICKEN DINNER🍑🍑');
        }
      } else {
        alert("Invalid move, try again");
      }
      this.moves = [];
    }
  }
  
  render() {
    const $stack = this.el.find('ul');
    $stack.empty();
    for(let i = 0; i<3;i++) {
      for(let j = this.towers[i].length - 1; j >= 0; j--) {
        const $li = $("<li>disc</li>");
        $li.addClass(`disc${this.towers[i][j]}`);
        $stack.eq(i).append($li);
      }
      $stack.eq(i).data("pile", i);
      this.el.append($stack);
    }
  }
}

module.exports = HanoiView;