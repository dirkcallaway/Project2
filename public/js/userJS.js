// AJAX for User
// $(function() {
$(".createForm").on("submit", function(event) {
  event.preventDefault();
  // Make sure to preventDefault on a submit event.
  var newUser = {
    UserName: $("#Firstusername")
      .val()
      .trim(),
    password: $("#Firstpassword")
      .val()
      .trim(),
    Location: $("#FirstLocation").val()
  };
  console.log(newUser);
  // Send the POST request.
  $.ajax("/createusers", {
    type: "POST",
    data: newUser
  })
    .then(function(data) {
      console.log(data);
      // Reload the page to get the updated list

      var getUserid = {
        UserId: data.id,
        location: data.Location
      };
      // Send the PUT request.
      $.ajax("/api/quest", {
        type: "PUT",
        data: getUserid
      }).then(function(data) {
        // Reload the page to get the updated list
        // location.reload();
        console.log(data);
        location.reload();
      });
    })
    .catch(function(err) {
      console.log(err);
    });
});
// });

$(".complete").on("click", function() {
  var id = $(this).data("id");
  var newComplete = {
    completed: true
  };

  // Send the PUT request.
  $.ajax("/questComplete/" + id, {
    type: "PUT",
    data: newComplete
  }).then(function() {
    console.log(newComplete);
    // Reload the page to get the updated list
    location.reload();
  });
});
// $(".userLogin").on("click", function() {
//   var UserName = $(this).data("UserName");
//   $.ajax("/profile/" + UserName, {
//     type: "GET"
//   }).then(function(data) {
//     console.log(data);
//   });
// });

$(".deleteButton").on("click", function() {
  var id = $(this).data("id");
  console.log("Delete Button Pushed!");
  // Send the DELETE request.
  $.ajax("/api/user/" + id, {
    type: "DELETE"
  }).then(function() {
    console.log("deleted user", id);
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".login").on("click", function() {
  $("#signup-modal").modal("hide");
  $("#login-modal").modal("toggle");
});

//Sign Up Button Click
$(".signup").on("click", function() {
  $("#login-modal").modal("hide");
  $("#signup-modal").modal("toggle");
});
