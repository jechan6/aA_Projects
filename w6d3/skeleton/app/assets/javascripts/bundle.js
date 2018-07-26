/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const APIUtil = {
  toggleFollow: (id, method) => {
    return $.ajax({
     method: method,
     url: `/users/${id}/follow`,
     dataType: "json",
     success() {
     },
     error() {
       alert("failed");
     }
    });
  },
  
  searchUsers: (queryVal, callback) => {
    return $.ajax({
     method: 'get',
     url: `/users/search`,
     dataType: "json",
     data: {
       query: queryVal
     },
     success: callback,
     error() {
       console.log("failed");
     }
    });
  }
};



module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ApiUtil = __webpack_require__ (/*! ./api_util.js */ "./frontend/api_util.js");
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

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js");

$(() => {
  const $el = $(".follow-toggle");
  const follow = new FollowToggle($el);
  const search = new UsersSearch();
});

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const apiUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

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
  

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map