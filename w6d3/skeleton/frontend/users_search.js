const apiUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UsersSearch{
  constructor(){
    this.el = $(".users-search");
    this.ul = $(".users");
    this.input = $("#search-name");
    
    // console.log(this.input.val());
    this.handleInput();
  }
  
  handleInput() {
    this.input.on("input", e => {
      e.preventDefault();
      // console.log(this);
      
      apiUtil.searchUsers(this.input.val(), this.renderResults.bind(this));
    });
  }
  
  renderResults(names){
    console.log(this);
    this.ul.empty();
    names.forEach(el => {

      const name = $(`<li class="search-names"><a href="${el.id}">${el.username}</a></li>`);
      const button = $('<button class="search-follow-buttons"></button>');
      button.data("user-id", el.id);
      button.data("initial-follow-state", el.followed ? "followed" : "unfollowed");
      //const options = {userId: el.id, followState: el.followed ? "followed" : "unfollowed"}; 
      
      const followedToggle = new FollowToggle(button);
      name.append(button);
      this.ul.append(name);
      
    });  
  }
}

module.exports = UsersSearch;
  