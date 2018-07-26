const ApiUtil = require ('./api_util.js');
class FollowToggle {
  constructor($el, options){
    this.el = $el;
    this.userId = this.el.data("user-id") ;
    this.followState = this.el.data("initial-follow-state");
    this.render();      
    this.handleClick();
  }
  
  render(){
    if (this.followState === 'following...' || this.followState === 'unfollowing...'){ 
      this.el.text(this.followState);
      this.el.prop("disabled", true);
    } else {
      this.el.text(this.followState);
      this.el.prop("disabled", false);
    } 
    
    if (this.followState === 'followed'){
      this.el.text("Unfollow");
    } else if (this.followState === 'unfollowed') {
      this.el.text("Follow");
    }
  }
  
  handleClick() {
    const that = this;
    this.el.on("click", e => {
      e.preventDefault();
      
      if(this.followState === 'followed') {
        this.followState = 'unfollowing...';
        this.render();
        ApiUtil.toggleFollow(this.userId, "DELETE")
        .then( () => {
          this.followState = 'unfollowed';
          this.render();
        });
      } else {
        this.followState = 'following...';
        this.render();
        ApiUtil.toggleFollow(this.userId, "POST")
        .then( () => {
          this.followState = 'followed';
          this.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;