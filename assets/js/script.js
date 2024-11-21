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

  // Review Carousal 
    $('.review-carousal').slick({
      arrows: true,
      autoplay: true,           
      autoplaySpeed: 10000,     
      infinite: false,    
    });

    // Logo carousal
    $('.logo-carousal').slick({
      arrows: false,
      autoplay: true,           
      autoplaySpeed: 1000, 
      hoverpauseOnHover :true,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]    
    });






});
