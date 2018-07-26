const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  const $el = $(".follow-toggle");
  const follow = new FollowToggle($el);
  const search = new UsersSearch();
});