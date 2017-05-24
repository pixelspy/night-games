// TweenMax.to(target, duration, {vars})
// TweenMax.to(".logo", 2, {
//   left:600,
//   backgroundColor:"#f00",
//   padding: 20,
//   borderColor:"black",
//   borderRadius:26
// });


// var header = document.getElementbyId("header");
// TweenMax.staggerFrom(header, 0.5, {opacity:0, y:200, rotation:360, scale:2, delay:0.5}, 0.2);
// TweenMax.from(header, 1, {opacity:0, delay:1});


// TweenMax.to(".logo", 6, {x:600, rotation:360, scale:0.5});

//special delays, eases -- at the end of the Tween
//by default on tween: easeout
// TweenMax.from(".logo", 2, {x:600, ease:Power1.easeInOut});
//different end of effect: Back.easeOut or Elastic.easeOut or Bounce.easeOut
//



// TweenMax.from(".logo", 0.5, {opacity:0, scale:0, ease:Bounce.easeInOut});
TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, rotation:360, scale:2, delay:0.5}, 0.2);
TweenMax.to(".logo, .box", 0.5, {opacity:0, delay:2, onComplete:complete});
//
// //
// function complete() {
//   alert("all done")
// }
