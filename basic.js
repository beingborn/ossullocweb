
const dpTime = function () {
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let ampm = ''
    if (hours > 12) {
      hours -= 12
      ampm = ''
    } else {
      ampm = ''
    }
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    document.querySelector('.live-time').innerHTML = ampm + hours + ":" + minutes + ":" + seconds
  }

  setInterval(dpTime, 1000)
//


// 기본 상태 0에서 누르면 1로 바꾸고 1인 상태에서 다시 누르면 0 (비활성으로 바꿈)



$(".top-btn").css({transition: ".5s", opacity: 0, right: 0 });

$(window).scroll(function () {
  var h = $(document).scrollTop();

  if (h > 900) {
    $(".top-btn").css({ opacity: 1, right: 20 });
  }

  if (h < 900) {
    $(".top-btn").css({ opacity: 0, right: 0 });
  }
});


// 기본 상태 0에서 누르면 1로 바꾸고 1인 상태에서 다시 누르면 0 (비활성으로 바꿈)
// 해결 ==> 버튼 클릭 시 다른 버튼의 인덱스를 0으로 초기화 하되, 스타일은 비활성화하도록 바꿈. 
// so 그 다음 버튼을 누를 시 활성화를 준비한 상태이므로 활성화












// 버튼 별 활성화 기능 // 


// 버튼 카운트 변수

var bestCount = 0;
var weeklyCount = 0;



var weeklyBtn = document.querySelector('.weekly-btn');
var bestBtn = document.querySelector('.best-btn');


// 버튼 별 리스트 변수


const weeklyRank = document.querySelector('#weeklyRank');

const bestItemList = document.querySelector('#bestItemList');







// 베스트 버튼 클릭 시 

bestBtn.addEventListener('click', function(){

  if (bestCount == 0) {
    bestBtn.style.backgroundColor = "#6C801A"  
    bestBtn.style.color = "white"  
    bestBtn.style.transition = "0.3s"
    bestBtn.style.fontWeight = "500"

    bestItemList.style.cssText = 'display : block';

    weeklyCount = 0;

  // 이번주 인기 버튼 비활성화

    weeklyBtn.style.backgroundColor = "#F6F6F6"  
    weeklyBtn.style.color = "black"  
    weeklyBtn.style.transition = "0.3s"
    weeklyBtn.style.fontWeight = "400"

    weeklyRank.style.cssText = 'display : none';

    bestCount = 1;
  
  

  } else if (bestCount === 1) {
    bestBtn.style.backgroundColor = "lightgray"  
    bestBtn.style.color = "black"  
    bestBtn.style.transition = "0.3s"
    bestBtn.style.fontWeight = "400"

    bestItemList.style.cssText = 'display : none';

    bestCount = 0;
  }

});



weeklyBtn.addEventListener('click', function(){

    if (weeklyCount== 0) {

      weeklyBtn.style.backgroundColor = "#6C801A"  
      weeklyBtn.style.color = "white"  
      weeklyBtn.style.transition = "0.3s"
      weeklyBtn.style.fontWeight = "500"

      weeklyRank.style.cssText = 'display : block';

    bestCount = 0;

    // 베스트 버튼 비활성화
    bestBtn.style.backgroundColor = "#F6F6F6"  
    bestBtn.style.color = "black"  
    bestBtn.style.transition = "0.3s"
    bestBtn.style.fontWeight = "400"

    
    bestItemList.style.cssText = 'display : none';

    weeklyCount = 1;


    } else if (weeklyCount=== 1) {
      weeklyBtn.style.backgroundColor = "#F6F6F6"  
      weeklyBtn.style.color = "black"  
      weeklyBtn.style.transition = "0.3s"
      weeklyBtn.style.fontWeight = "400"

      weeklyRank.style.cssText = 'display : none';

      weeklyCount = 0;
    }

  });


  

// pc - list swiper

// if (matchMedia("screen and (min-width: 1024px)").matches) {
//   bestItemList.style.cssText = 'display: none';
//   weeklyRank.style.cssText = 'display: none';
// }

// const weeklyRank = document.querySelector('#weeklyRank');

// const bestItemList = document.querySelector('#bestItemList');








  
var foldToggle = document.querySelectorAll('.busi-toggle-a');

var mobInfo = document.querySelector('#mob-info');
var footerInfo = document.querySelector('#footer-info');


// var foldGroup = [];

// for (var i = 0; i < foldToggle.length; i++) {
//   foldGroup.push(foldToggle[i]);
// }

// foldGroup[0] = 0;
// foldGroup[1] = 0;




var mobToggleCount = 0
var brandToggleCount = 0
var footerToggleCount = 0

// 1번 토글 즉 mob 토글 클릭 시

foldToggle[0].addEventListener('click',function(){

  // 활성화
   if(mobToggleCount == 0) {
    document.querySelector('#mob-info').style.display = "block"

    mobToggleCount = 1;
   }

   else if (mobToggleCount == 1) {
    document.querySelector('#mob-info').style.display = "none"
    mobToggleCount = 0;
   }
});


foldToggle[2].addEventListener('click',function(){

  // 활성화
   if(brandToggleCount == 0) {
    document.querySelector('#brand-info').style.display = "block"

    brandToggleCount = 1;
   }

   else if (brandToggleCount == 1) {
    document.querySelector('#brand-info').style.display = "none"
    brandToggleCount = 0;
   }
});










// 3번 토글 즉 footer 토글
  foldToggle[3].addEventListener('click', function(){

    if(footerToggleCount == 0) {
      document.querySelector('#footer-info').style.display = "block"
  
      footerToggleCount = 1;
     }
  
     else if (footerToggleCount == 1) {
      document.querySelector('#footer-info').style.display = "none"
      footerToggleCount = 0;
     }
  });










  // foldToggle.forEach(function(element) {
  //     if (element.classList.contains("mob-gnb-toggle")) {

  //     } else if (element.classList.contains("footer-toggle")) {

  //     }
  // });















  
//   document.querySelector('.busi-toggle-a').addEventListener('click', function(){
  
//     if(toggleCount === 0) {
//       document.querySelector('.business-info').style.display = "block";
//       toggleCount = 1;
      
//     } else if (toggleCount === 1) {
//       document.querySelector('.business-info').style.display = "none";
//       toggleCount = 0;
//     }
//   });
  




  var mobNavCount = 0;

const mobNavOpen = document.querySelector('.gnb-toggle');
const mobNavClose = document.querySelector('.login-x');

mobNavOpen.addEventListener('click',function(){

  if(mobNavCount == 0){
    document.querySelector('.mob-nav-body').style.display = "block";
    mobNavCount = 1;
  } 

});

mobNavClose.addEventListener('click',function(){

  if(mobNavCount == 1){
    document.querySelector('.mob-nav-body').style.display = "none";
    mobNavCount = 0;
  } 

});



// notice box js

var noticeBox = document.querySelector('.notice-mover');
var notices = document.querySelectorAll('.notice-list');
var noticePosition = 1;
var noticeHeight = 20;

var currentView = 1;



var noticeFirstClone = noticeBox.firstElementChild;

var noticeCloneFirst = noticeFirstClone.cloneNode(true);

console.log(noticeFirstClone);
console.log(noticeCloneFirst);

noticeBox.appendChild(noticeCloneFirst);

console.log(noticeBox)


var noticeSlideInterval;

function noticeMoveAuto(auto) {
  noticeSlideInterval = setInterval(transitionSlide, 3000);

  function transitionSlide() {

    if (currentView >= 1) {
      noticePosition = currentView * noticeHeight
      noticeBox.style.transition = "0.3s";
      noticeBox.style.transform = `translateY(-${noticePosition}px)`
      currentView++;

      console.log(currentView)
      if (currentView === notices.length + 1) {
        setTimeout(function () {
          noticeBox.style.transition = "0s";
          noticeBox.style.transform = "translateY(0px)";
          currentView = 1;
        }, 300);

        return noticeSlideInterval;
      }
    }
  }
}

noticeMoveAuto();

// pc HEADER 

var pcHeader = document.querySelector('.pc-header');

pcHeader.addEventListener('mouseover', function(){
document.querySelector('.logo-link').innerHTML = "<img class='logo-img' src='./img/오설록-로고흑백.png' alt='오설록 로고'>"

});




pcHeader.addEventListener('mouseout', function(){
  document.querySelector('.logo-link').innerHTML = "<img class='logo-img' src='./img/오설록-로고.png' alt='오설록 로고'>"
  // document.querySelector('.pc-header').style.backgroundColor = "blue";
});




// 문제점 클릭 후 wrap이 활성화될 시 클릭을 위해 계속 활성화 되어있어야하는데 mouseout 시 사라짐
// wrap 이 활성화 된 경우, 호버의 스타일을 계속 유지할 수 있게 해야함. css를 전부 가지고 와서 부치거나? class 탈 부착으로 진행하는 게 좋을 듯함.

//  PC hide gnb 








var pcGnb1 = document.querySelector('#product-btn');
var pcGnbWrap1 = document.querySelector('.mobile-hide-gnb');

var pcGnb2 = document.querySelector('#brand-btn');
var pcGnbWrap2 = document.querySelector('.mobile-hide-gnb2');



pcGnb1.addEventListener('mouseover',function(){
  pcGnbWrap1.style.maxHeight ="438px";
  pcGnbWrap1.style.visibility ="visible";

  pcGnbWrap2.style.maxHeight ="0px";
  pcGnbWrap2.style.visibility ="hidden";
});


pcGnbWrap1.addEventListener('mouseover',function(){

  pcGnbWrap2.style.maxHeight ="0px";
  pcGnbWrap2.style.visibility ="hidden";

  pcGnbWrap1.style.maxHeight ="438px";
  pcGnbWrap1.style.visibility ="visible";
});

pcGnbWrap1.addEventListener('mouseout',function(){
  pcGnbWrap1.style.maxHeight ="0px";
  pcGnbWrap1.style.visibility ="hidden";
});





pcGnb2.addEventListener('mouseover',function(){
  pcGnbWrap2.style.maxHeight ="438px";
  pcGnbWrap2.style.visibility ="visible";

  pcGnbWrap1.style.maxHeight ="0px";
  pcGnbWrap1.style.visibility ="hidden";
});

pcGnbWrap2.addEventListener('mouseover',function(){
  pcGnbWrap2.style.maxHeight ="438px";
  pcGnbWrap2.style.visibility ="visible";

  pcGnbWrap1.style.maxHeight ="0px";
  pcGnbWrap1.style.visibility ="hidden";
});

pcGnbWrap2.addEventListener('mouseout',function(){
  pcGnbWrap2.style.maxHeight ="0px";
  pcGnbWrap2.style.visibility ="hidden";
});












	