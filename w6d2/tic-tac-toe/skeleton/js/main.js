const View = require("./ttt-view.js");// require appropriate file
const Game = require("./game.js");// require appropriate file

$( () => {
  // Your code here

  const game = new Game();
  const el = $(".ttt");
  const view = new View(game,el);
  const $li = $("li");
  
  // $li.on("mouseover", (e)=> {
  //   if (!$(e.currentTarget).data('clicked')) {
  //     $(e.currentTarget).css("background", "yellow");
  //   }
  // });
  // $li.on("mouseleave", (e)=> {
  //   if (!$(e.currentTarget).data('clicked'))
  //     $(e.currentTarget).css("background", "white");
  // });
  
  // $li.hover(function() {
  //   $(this).addClass("hover");
  // }, function() {
  //   $(this).removeClass("hover");
  // });
  // $li.on("click", (e)=> {
  //   $(e.currentTarget).addClass("clicked");
  //   $(e.currentTarget).off( "mouseenter mouseleave");
  //   $(e.currentTarget).removeClass("hover");
  //   view.bindEvents(e);
  // });
});
