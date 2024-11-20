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


  let currentIndex = null; // Track the currently active index

$(".accordian-btn").click(function () {
    const newIndex = $(this).data("index");

    if (newIndex !== currentIndex) {
        // Remove active and previous classes from all images
        $(".accordian-image").removeClass("active previous");

        if (currentIndex !== null) {
            // If the new index is larger, the current image slides up
            if (newIndex > currentIndex) {
                $("figure[data-index='" + currentIndex + "']").addClass("previous").css({
                    transform: "translateY(-100%)", // Slide out to the top
                    transition: "transform 0.6s ease",
                   
                    
                });
                console.log("newIndex: "+newIndex);
                console.log("currentIndex: "+currentIndex);
                console.log("____________________");
                
            }
            // If the new index is smaller, the current image slides down
            else if (newIndex < currentIndex) {
                $("figure[data-index='" + currentIndex + "']").addClass("previous").css({
                    transform: "translateY(100%)", // Slide out to the bottom
                    transition: "transform 0.6s ease",
                });

                
            }
        }

        // Add 'active' class to the new image and slide it into view
        $("figure[data-index='" + newIndex + "']").addClass("active").css({
            transform: "translateY(0)", // Bring it to the visible position
            transition: "transform 0.6s ease",
        });

        // Update the current index
        currentIndex = newIndex;

        // Slide down/up content
        $(".content-container").slideUp(300); // Hide all content containers
        $(this).find(".content-container").slideDown(300); // Show the clicked content container
    }
});

  








});
