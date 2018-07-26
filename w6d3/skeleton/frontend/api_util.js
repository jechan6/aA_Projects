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