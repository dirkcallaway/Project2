$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".login-button").on("click", function() {
    $("#login-modal").addClass("is-active");
    $("#signup-modal").removeClass("is-active");
  });

  $(".signup-button").on("click", function() {
    $("#signup-modal").addClass("is-active");
    $("#login-modal").removeClass("is-active");
  });

  $(".delete, .modal-background").on("click", function() {
    $("#login-modal, #signup-modal").removeClass("is-active");
  });

  function removeActive() {
    $("li").each(function() {
      $(this).removeClass("is-active");
    });
  }

  function hideAll() {
    $("#questsContent").addClass("is-hidden");
    $("#completedContent").addClass("is-hidden");
    $("#mapContent").addClass("is-hidden");
    $("#rewardsContent").addClass("is-hidden");
  }

  function switchToQuests() {
    removeActive();
    hideAll();
    $("#quests").addClass("is-active");
    $("#questsContent").removeClass("is-hidden");
  }

  function switchToCompleted() {
    removeActive();
    hideAll();
    $("#completed").addClass("is-active");
    $("#completedContent").removeClass("is-hidden");
  }

  function switchToMap() {
    removeActive();
    hideAll();
    $("#map").addClass("is-active");
    $("#mapContent").removeClass("is-hidden");
  }

  function switchToRewards() {
    removeActive();
    hideAll();
    $("#rewards").addClass("is-active");
    $("#rewardsContent").removeClass("is-hidden");
  }
});
