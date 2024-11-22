$(document).ready(function () {

  
  




  // Ensure activeTabIndex is declared only once at the global scope
let activeTabIndex = 0;

// Hide all tab content except the first one, and animate the first one without translateX
$(".tab-content").hide().first().show().css({ opacity: 1 });

// Add active class to the first tab button
$(".tab-btn:first button").addClass("text-white").removeClass("text-darkAsh/50");
$(".tab-btn:not(:first) button").addClass("text-darkAsh/50");

// Set the slider's initial position and size
const slider = $(".slider");
const firstTab = $(".tab-btn:first");
slider.css({
  width: firstTab.outerWidth(),
  left: firstTab.position().left,
});

// Function to update the slider position and width considering scroll
function updateSliderPosition() {
  const activeTab = $(".tab-btn").eq(activeTabIndex); // Get the active tab based on activeTabIndex
  const activeTabPosition = activeTab.position(); // Get the position of the active tab
  
  // Get the scroll position of the parent container
  const scrollOffset = $(".flex.relative")[0].scrollLeft;

  slider.stop(true, true).animate( // Using stop(true, true) to clear the animation queue
    {
      left: activeTabPosition.left + scrollOffset, // Add scroll offset
      width: activeTab.outerWidth(),
    },
    400 // Animation duration in milliseconds
  );
}

// Handle tab click
$(".tab-btn").click(function () {
  const newIndex = $(this).index(); // Get the index of the clicked button
  const direction = newIndex > activeTabIndex ? "right" : "left"; // Determine direction (reversed)

  if (newIndex === activeTabIndex) return; // No action if the same tab is clicked

  // Update activeTabIndex
  activeTabIndex = newIndex;

  // Update active class for buttons
  $(".tab-btn button")
    .removeClass("text-white")
    .addClass("text-darkAsh/50");
  $(this).find("button")
    .removeClass("text-darkAsh/50")
    .addClass("text-white");

  // Animate the slider
  updateSliderPosition(); // Update the slider position and width

  // Reset and hide all tab contents
  $(".tab-content").css({
    opacity: 0,
    transform: direction === "right" ? "translateX(50px)" : "translateX(-50px)", // Reverse translateX logic
  }).hide();

  // Show the corresponding tab content with animation
  const tabId = $(this).data("tab");
  $("#" + tabId)
    .show() // Make the element visible
    .animate(
      { opacity: 1 },
      {
        duration: 400, // Animation duration in milliseconds
        step: function (now, fx) {
          if (fx.prop === "opacity") {
            const offset = direction === "right" ? -50 + now * 50 : 50 - now * 50; // Reversed transition direction
            $(this).css("transform", `translateX(${offset}px)`);
          }
        },
      }
    );
});

// Update slider position on window resize
$(window).resize(function () {
  updateSliderPosition(); // Recalculate the slider position and width on window resize
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
    autoplaySpeed: 700,
    infinite: false, 
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  // Handle the last slide and restart autoplay
  $('.review-carousal').on('afterChange', function (event, slick, currentSlide) {
    const totalSlides = slick.slideCount;

    // console.log('curr: '+currentSlide);
    //   console.log('tot: '+totalSlides);
    //   console.log('__________________');
      

    if (currentSlide === totalSlides - 1) {
        setTimeout(() => {
            slick.slickGoTo(currentSlide-1);
        }, slick.options.autoplaySpeed);
    }
    if (currentSlide === 0){
        setTimeout(() => {
          slick.slickGoTo(currentSlide+1);
      }, slick.options.autoplaySpeed);
    }
  });
  

  // Ensure autoplay restarts after manual navigation or swiping
  $('.review-carousal').on('beforeChange swipe', function (event, slick) {
    slick.slickPlay();
  });




  // Logo Carousal (autoplay enabled)
  $('.logo-carousal').slick({
    arrows: false,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 1000,
    pauseOnHover: false, // Ensure autoplay doesn't pause on hover
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
  });






});
