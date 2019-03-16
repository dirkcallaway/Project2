// AJAX for User
// $(function() {
$(".create-form").on("submit", function(event) {
  event.preventDefault();

  alert("it worked");
  // Make sure to preventDefault on a submit event.

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
  $.ajax("/api/createuser", {
    type: "POST",
    data: newUser
  }).then(function() {
    console.log(newUser);
    // Reload the page to get the updated list
  });
});
// });
