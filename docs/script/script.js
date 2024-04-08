// 로고 반짝이
function Light() {
  let OpacityAnimation = function opacity() {
    $(".light").animate({ opacity: 0.8 }, 700);
    $(".light").animate({ opacity: 0 }, 700);
  };
  setInterval(OpacityAnimation, 100);
}

Light();

// 띠 사라지기
$(window).scroll(function () {
  var Height = $(window).scrollTop();
  if (Height < 500) {
    $(".content-1").removeClass("close");
  } else if (Height >= 500) {
    $(".content-1").addClass("close");
  }

  // console.log(Height);
});

// 스크롤 애니메이션
$(document).ready(function () {
  const $counters = $(".scroll_on");

  const exposurePercentage = 50;
  const loop = true; //

  $(window)
    .on("scroll", function () {
      $counters.each(function () {
        const $el = $(this);

        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight;
        const contentHeight = rect.bottom - rect.top;

        if (
          rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
          rect.bottom >= (contentHeight * exposurePercentage) / 100
        ) {
          $el.addClass("active");
        }

        if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
          $el.removeClass("active");
        }
      });
    })
    .scroll();
});

// 위로올라가기 버튼
function GoUp() {
  $(".go-up").click(function () {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  });
}

GoUp();
