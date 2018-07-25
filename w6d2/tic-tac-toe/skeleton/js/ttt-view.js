class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    // this.li = this.el.find("li");
    this.li = this.el.children().children();
    // 
    this.bindEvents();
  }

  bindEvents() {
    // this.game.playMove();
    // let 
    this.li.hover(function() {
      $(this).addClass("hover");
    }, function() {
      $(this).removeClass("hover");
    });
    
    this.li.on("click", (e)=> {
      // $(e.currentTarget).off( "mouseenter mouseleave click");
      // $(e.currentTarget).addClass("clicked");
      // $(e.currentTarget).removeClass("hover");
    
      this.makeMove($(e.currentTarget));
      this.game.playMove($(e.currentTarget).data("pos"));
      this.checkWinner();
    });
  }
  checkWinner() {
    
    if (this.game.isOver()) {
      
      $(this.li).off("mouseenter mouseleave click");
      if(this.game.winner()) {
        this.renderWinner();
        $('.winner').text(`You win, ${this.game.winner()}!`);
      } else {
        this.renderDraw();
        $('.winner').text('ITS A DRAW');
      }
    }
  }
  
  renderWinner() {
    this.li.each( (idx,el) => {
      console.log(idx);
      if ($(el).text() === this.game.winner()) {
        $(el).css("background", "green");
      } else {
        $(el).css("color", "red");
      }
    });
  }
  
  renderDraw() {
    this.li.each( (idx,el) => {
      console.log(el);
      $(el).css("color", "red");
    });
  }
  
  makeMove($square) {
    $square.text(this.game.currentPlayer);
  }

  setupBoard() {
    const $ul = $("<ul> </ul>");
    for(let i =0;i<3;i++) {
      for (let j = 0; j < 3; j++) {
        const $li = $("<li></li>");
        $li.data("pos", [i, j]);
      
        $ul.append($li);
        
      }
    }
    this.el.append($ul);
  }
}



module.exports = View;
