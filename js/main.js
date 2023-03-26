$(function () {
  // 스크롤 이벤트 핸들러
  function handleScroll() {
    // 스크롤 위치 계산
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);

    // 스크롤 위치에 따라 클래스 추가 또는 제거
    if (scrollTop >= 250) {
      document.querySelector(".name").classList.add("fix");
    } else {
      document.querySelector(".name").classList.remove("fix");
    }
  }

  function Tap(a, b) {
    let tab = $(a);
    let panel12 = $(b);

    for (let i = 0; i < tab.length; i++) {
      $(panel12).eq(0).show();
      $(tab)
        .eq(i)
        .on("click", function () {
          $(tab).removeClass("orange");
          $(panel12).eq(i).show();
          $(tab).eq(i).addClass("orange");

          panel12.hide();
          $(panel12).eq(i).fadeIn(500);
          $(panel12).eq(i).show();
        });
    }
  }

  let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
      if (box.isIntersecting) {
        box.target.style.opacity = 1;
      } else {
        box.target.style.opacity = 0;
      }
    });
  });

  //isIntersecting 은 감시인지 아닌지를 논리적으로 판별해주는 속성 감시중이면 true, 감시중이 아니면 false 판단한다.

  function detective(obs) {
    obs.forEach((div) => {
      observer.observe(div);
    });
  }

  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 10000,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 480, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true, // 자동 스크롤 사용 여부
          autoplaySpeed: 10000,
        },
      },
    ],
  });

  // 스크롤 이벤트 등록
  window.addEventListener("scroll", handleScroll);

  let cntDiv = document.querySelectorAll(".cntDiv");
  // 교차 관찰 대상 요소 등록

  detective(cntDiv);
  Tap(".tap", ".panel1");
});
