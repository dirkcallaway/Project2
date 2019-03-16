// AJAX for User
$(".firstlogin").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newUser = {
    userName: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim(),
    Location: $("#Location").val()
  };

  // Send the POST request.
  $.ajax("/api/user", {
    type: "POST",
    data: newUser
  }).then(function() {
    console.log(newUser);
    // Reload the page to get the updated list
    location.reload();
  });
});
