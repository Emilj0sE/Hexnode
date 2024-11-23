$(document).ready(function () {

  // ===============================
  // =========Burgur menu===========
  let isMenuOpen = false;

  $('#burgerIcon').click(function () {
    isMenuOpen = !isMenuOpen; 
  
    $('#sideMenu').toggleClass('translate-x-0 translate-x-full');
  
    $('#topBar').toggleClass('active');
    $('#middleBar').toggleClass('active');
    $('#bottomBar').toggleClass('active');
  
    if (isMenuOpen) {
      $('header .navbar-toggler span').addClass('scrolled');
    } else {
      if ($(window).scrollTop() <= 10) {
        $('header .navbar-toggler span').removeClass('scrolled');
      }
    }
  });


  // ===================================
  // =========Scrolled header===========
  function headerPosition() {
    if ($(window).scrollTop() > 10) {
      $('header').addClass('scrolled');
      $('header .hexanode-logo svg').addClass('scrolled');
  
        $('header .navbar-toggler span').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
      $('header .hexanode-logo svg').removeClass('scrolled');
  
      if (!isMenuOpen) {
        $('header .navbar-toggler span').removeClass('scrolled');
      } 
    }
  }
  
  headerPosition();

  // ===========================================================
  // =========Resetting properties of header above xl===========
  $(window).on('resize', function() {
    const currentWidth = $(window).width();

    if (currentWidth >= 1280 && lastWidth < 1280) {
      $('#sideMenu').addClass('translate-x-full');
      $('#sideMenu').removeClass('translate-x-0');
      isMenuOpen = !isMenuOpen; 
      $('#topBar, #bottomBar , #middleBar').removeClass('active');
      
      headerPosition();
    } 
  });


  $(window).on('scroll', function() {
    headerPosition();
  });



  // ===================================
  // =========Tab section===========
  let activeTabIndex = 0;

  $(".tab-content").hide().first().show().css({ opacity: 1 });

  $(".tab-btn:first button").addClass("text-white").removeClass("text-darkAsh/50");
  $(".tab-btn:not(:first) button").addClass("text-darkAsh/50");

  const slider = $(".slider");
  const firstTab = $(".tab-btn:first");
  slider.css({
    width: firstTab.outerWidth(),
    left: firstTab.position().left,
  });

  function updateSliderPosition() {
    const activeTab = $(".tab-btn").eq(activeTabIndex); 
    const activeTabPosition = activeTab.position(); 
    
    const scrollOffset = $(".flex.relative")[0].scrollLeft;

    slider.stop(true, true).animate(
      {
        left: activeTabPosition.left + scrollOffset, 
        width: activeTab.outerWidth(),
      },
      400 
    );
  }
  let tabId = 0;

  $(".tab-btn").click(function () {
    const newIndex = $(this).index();
    const direction = newIndex > activeTabIndex ? "right" : "left"; 

    if (newIndex === activeTabIndex) return; 

    activeTabIndex = newIndex;

    $(".tab-btn button")
      .removeClass("text-white")
      .addClass("text-darkAsh/50");
    $(this).find("button")
      .removeClass("text-darkAsh/50")
      .addClass("text-white");

    updateSliderPosition(); 

    $(".tab-content").css({
      opacity: 0,
      transform: direction === "right" ? "translateX(50px)" : "translateX(-50px)", 
    }).hide();

    tabId = $(this).data("tab");

    $("#" + tabId)
      .show() 
      .animate(
        { opacity: 1 },
        {
          duration: 400, 
          step: function (now, fx) {
            if (fx.prop === "opacity") {
              const offset = direction === "right" ? -50 + now * 50 : 50 - now * 50; 
              $(this).css("transform", `translateX(${offset}px)`);
            }
          },
        }
      );
  });

  $(window).resize(function () {
    updateSliderPosition(); 
  });

 

  // ================================================
  // =========Tab section accordian below md===========
    const $firstButton = $(".accord-sm-btn").first();

    const $firstTabContent = $firstButton.next(".tab-content");

    // Initialize the first accordion as active
    $firstButton.addClass("active").css({
        "background-color": "#020a19",
        "border-color": "#020a19",
        "color": "#ffffff",
    }).find("span").addClass("rotate-active");

    $firstTabContent.slideDown(400).css("opacity", 1);
  


  // ========================================================
  // =========Tab section accordian resetting values===========
    let lastWidth = $(window).width();

    $(window).on('resize', function() {
      const currentWidth = $(window).width();

      if (currentWidth <= 640 && lastWidth > 640) {

        // $('.tab-content').slideUp(400);
        // $('.tab-content').css({
        //   transform: '',
        // });
        // $firstTabContent.slideDown(400).css("opacity", 1);

        $('.tab-content').css({
          transform : ''
        });

        const $firstButton = $(".accord-sm-btn").first();

        const $firstTabContent = $firstButton.next(".tab-content");
    
        $firstButton.addClass("active").css({
            "background-color": "#020a19",
            "border-color": "#020a19",
            "color": "#ffffff",
        }).find("span").addClass("rotate-active");
    
        $firstTabContent.slideDown(400).css("opacity", 1);


      } else if (currentWidth > 640 && lastWidth <= 640) {
         
        let activeTabIndex = 0;
        $('.tab-content').css({
          transform : ''
        });

        $(".tab-content").hide().first().show().css({ opacity: 1 });
        
        $(".tab-btn:first button").addClass("text-white").removeClass("text-darkAsh/50");
        $(".tab-btn:not(:first) button").addClass("text-darkAsh/50");
        
        const slider = $(".slider");
        const firstTab = $(".tab-btn:first");
        slider.css({
          width: firstTab.outerWidth(),
          left: firstTab.position().left,
        });
        
          const firstTabContent = $('.tab-wrap:first .tab-content');

          // Apply a transition style
          firstTabContent.css({
              transform: '', 
          });
          

      }
      if (currentWidth <= 1024 && lastWidth > 1024) {
        accordianSliderSmall();
      }
      // Update lastWidth to the current window width
      lastWidth = currentWidth;

    });


    // =====================================================
    //====== Handle button clicks on tab contents under md==========
    $(".accord-sm-btn").click(function () {
        const $tabContent = $(this).next(".tab-content");
        const $svgSpan = $(this).find("span");

        $tabContent.stop(true, true).slideToggle(400).css("opacity", 1);

        $(".tab-content").not($tabContent).slideUp(400).css("opacity", 0);

        $svgSpan.toggleClass("rotate-active");

        $(this).addClass("active").css({
            "background-color": "#020a19",
            "border-color": "#020a19",
            "color": "#ffffff",
        });

        // Reset styles and rotation for other buttons
        $(".accord-sm-btn").not(this).removeClass("active").css({
            "background-color": "",
            "border-color": "",
            "color": "",
        }).find("span").removeClass("rotate-active");
    });


  // =================================================== 
  // ================= Accordian section ===============
  let currentIndex = 1; 
  $("figure[data-index='1']").addClass("active").css({
    transform: "translateY(0)",
    transition: "transform 0.6s ease",
  });
  $(".content-container").first().slideDown(300);

  function accordianSliderSmall(){
    if ($(window).width() < 1024) {

      $('.content-container').slideUp(0);
      $('.accordian-btn').find('figure').slideUp(0);
  
      var firstBtn = $(".accordian-btn").first();
      firstBtn.find('figure').slideDown(300);
      firstBtn.find('.content-container').slideDown(300);
                      
    }
  }


  accordianSliderSmall();
  
  $(".accordian-btn").click(function () {

    if ($(window).width() < 1024) {

      var contentContainer = $(this).find('.content-container');
      var figure = $(this).find('figure');

      $('.content-container').slideUp(0);
      $('.accordian-btn').find('figure').slideUp(0);
      contentContainer.slideDown(300);
      figure.slideDown(300);
      
    }
    else{
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
    }
      
  });


  // ==========================================
  // ============ Review Carousal =============
  $('.review-carousal').slick({
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 10000,
    infinite: false, 
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.review-carousal').on('afterChange', function (event, slick, currentSlide) {
    const totalSlides = slick.slideCount;

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
  
  $('.review-carousal').on('beforeChange swipe', function (event, slick) {
    slick.slickPlay();
  });


  // ==========================================
  // ============ Logo Carousal =============
  $('.logo-carousal').slick({
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 1000,
    pauseOnHover: false, 
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




