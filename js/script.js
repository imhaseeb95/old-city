// ===============
// 	slider
// ===============

$('.slider-sec').slick({
	arrows: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	 responsive: [
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    ]
});


// ===============
// 	header
// ===============

var openMenue = document.querySelector('.manue-bar');
var closeMenue = document.querySelector('.btn-close');
var mobileMenue = document.querySelector('.btn-nav');


openMenue.addEventListener('click', function(){
	mobileMenue.style.transform = 'translateX(0)';
	closeMenue.style.display = 'block';  
})
closeMenue.addEventListener('click', function(){
	mobileMenue.style.transform = 'translateX(100%)';
})

// =================
//  Manue show/Hide
// =================

var acc = document.querySelector('.arrow-drop');
var showText = document.querySelector('.sub-manue-container');
var giftProgram = document.querySelector('.gift');
acc.addEventListener('click', function(){
  if(showText.style.display === 'block'){
      showText.style.display = 'none';
  }
  else{
    showText.style.display = 'block';
    // giftProgram.style.paddingTop = '30px';
    // console.log(giftProgram.style.paddingTop)
  }

})

// ===================
//  banner size small
// ===================

// var bgBanner = document.querySelector('.background-img');
// console.log(bgBanner)
// window.addEventListener('scroll', function(e){
//   console.log(e)
//   bgBanner.style.background = 80 - +window.pageYOffset/12+'%';
//   bgBanner.style.opacity = 1 - +window.pageYOffset/700+' ';

// })

// const zoomElement = document.querySelector(".background-img");
// let zoom = 1;
// const ZOOM_SPEED = 0.1;

// document.addEventListener("wheel", function(e) {  
//     console.log(e)
//     if(e.deltaY > 0){    
//         zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
//     }else{    
//         zoomElement.style.transform = `scale(${zoom})`;  }

// });

// ====================
//  progress bar
// ====================

// var progressBar = document.querySelector('.counter-container')
// console.log(progressBar)
// var valueContainer = document.querySelector('.progress-bar')

// var progressValue = 0;
// var progressEndValue = 65;
// let speed = 20;

// let progress = setInterval(() =>{
//   progressValue++;
//   valueContainer.textContent = `${progressValue}% `;
//   progressBar.style.background =`conic-gradient(
//     #6da0a3 ${progressValue * 3.6}deg,
//     #c4d9da ${progressValue * 3.6}deg
//   )`; 

//   if(progressValue == progressEndValue){
//     clearInterval(progress)
//   }
// }, speed)


// // ----------------------------

// var progressBar2 = document.querySelector('.counter-2')

// var valueContainer2 = document.querySelector('.bar-2')

// var progressValue2 = 0;
// var progressEndValue2 = 65;
// let speed2 = 20;

// let progress2 = setInterval(() =>{
//   progressValue2++;
//   valueContainer2.textContent = `${progressValue2}% `;
//   progressBar2.style.background =`conic-gradient(
//     #6da0a3 ${progressValue2 * 3.6}deg,
//     #c4d9da ${progressValue2 * 3.6}deg
//   )`; 

//   if(progressValue2 == progressEndValue2){
//     clearInterval(progress2)
//   }
// }, speed2)


// // ----------------------------

// var progressBar3 = document.querySelector('.counter-3')

// var valueContainer3 = document.querySelector('.bar-3')

// var progressValue3 = 0;
// var progressEndValue3 = 65;
// let speed3 = 20;

// let progress3 = setInterval(() =>{
//   progressValue3++;
//   valueContainer3.textContent = `${progressValue3}% `;
//   progressBar3.style.background =`conic-gradient(
//     #6da0a3 ${progressValue3 * 3.6}deg,
//     #c4d9da ${progressValue3 * 3.6}deg
//   )`; 

//   if(progressValue3 == progressEndValue3){
//     clearInterval(progress3)
//   }
// }, speed3)


// scroll counter
var testDiv = document.querySelector(".scrolltop");
// var scrollY = testDiv.offsetTop;
var scrollTest = 500;


window.addEventListener('scroll', function(){

    var scrollDiv = window.scrollY;
    
    if(scrollDiv > scrollTest){
      var progressBar = document.querySelector('.counter-container')
      
      var valueContainer = document.querySelector('.progress-bar')

      var progressValue = 0;
      var progressEndValue = 65;
      let speed = 20;

      let progress = setInterval(() =>{
          progressValue++;
          valueContainer.textContent = `${progressValue}% `;
          progressBar.style.background =`conic-gradient(
          #6da0a3 ${progressValue * 3.6}deg,
          #c4d9da ${progressValue * 3.6}deg
          )`; 

          if(progressValue == progressEndValue){
            clearInterval(progress)
          }
        }, speed)

          // ----------------------------

          var progressBar2 = document.querySelector('.counter-2')

          var valueContainer2 = document.querySelector('.bar-2')

          var progressValue2 = 0;
          var progressEndValue2 = 65;
          let speed2 = 20;

          let progress2 = setInterval(() =>{
            progressValue2++;
            valueContainer2.textContent = `${progressValue2}% `;
            progressBar2.style.background =`conic-gradient(
              #6da0a3 ${progressValue2 * 3.6}deg,
              #c4d9da ${progressValue2 * 3.6}deg
            )`; 

            if(progressValue2 == progressEndValue2){
              clearInterval(progress2)
            }
          }, speed2)

          // ----------------------------

          var progressBar3 = document.querySelector('.counter-3')

          var valueContainer3 = document.querySelector('.bar-3')

          var progressValue3 = 0;
          var progressEndValue3 = 65;
          let speed3 = 20;

          let progress3 = setInterval(() =>{
            progressValue3++;
            valueContainer3.textContent = `${progressValue3}% `;
            progressBar3.style.background =`conic-gradient(
              #6da0a3 ${progressValue3 * 3.6}deg,
              #c4d9da ${progressValue3 * 3.6}deg
            )`; 

            if(progressValue3 == progressEndValue3){
              clearInterval(progress3)
            }
          }, speed3)
          return false;
    } 

})


