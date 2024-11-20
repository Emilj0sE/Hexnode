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


  let currentIndex = 1; 
  $("figure[data-index='1']").addClass("active").css({
    transform: "translateY(0)",
    transition: "transform 0.6s ease",
  });
  $(".content-container").first().slideDown(300);

  $(".accordian-btn").click(function () {
      const newIndex = $(this).data("index");

      if (newIndex !== currentIndex) {
          $(".accordian-image").removeClass("active previous");

          if (currentIndex !== null) {
              if (newIndex > currentIndex) {
                  $("figure[data-index='" + currentIndex + "']").addClass("previous").css({
                      transform: "translateY(-100%)", 
                      transition: "transform 0.6s ease",
                  });
              }
              else if (newIndex < currentIndex) {
                  $("figure[data-index='" + currentIndex + "']").addClass("previous").css({
                      transform: "translateY(100%)", 
                      transition: "transform 0.6s ease",
                  });
              }
          }

          $("figure[data-index='" + newIndex + "']").addClass("active").css({
              transform: "translateY(0)", 
              transition: "transform 0.6s ease",
          });

          currentIndex = newIndex;

          $(".content-container").slideUp(300); 
          $(this).find(".content-container").slideDown(300); 
      }
  });

  // Slick CArousal 
    $('.review-carousal').slick({
      arrows: true,
      autoplay: true,           
      autoplaySpeed: 10000,     
      infinite: false,    
    });






});
