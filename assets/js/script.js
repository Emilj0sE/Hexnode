$(document).ready(function () {
  // Hide all tab content except the first one
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Add active class to the first tab button
  $(".tab-btn:first").addClass("text-white");
  $(".tab-btn:not(:first)").addClass("text-lightAsh/50");

  // Set the slider initial position and size
  const slider = $(".slider");
  const firstTab = $(".tab-btn:first");
  slider.css({
    width: firstTab.outerWidth(),
    left: firstTab.position().left,
  });

  // Handle tab click
  $(".tab-btn").click(function () {
    // Remove active class from all buttons
    $(".tab-btn").removeClass("text-white").addClass("text-lightAsh/50 ");

    // Hide all tab contents
    $(".tab-content").hide();

    // Add active class to the clicked tab
    $(this).removeClass("text-lightAsh/50").addClass("text-white");

    // Show the corresponding tab content
    const tabId = $(this).data("tab");
    $("#" + tabId).fadeIn();

    // Animate the slider
    slider.animate(
      {
        left: $(this).position().left,
        width: $(this).outerWidth(),
      },
      600 // Animation duration in milliseconds
    );
  });
});
