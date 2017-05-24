var $geo1 = $('.geo1');

$geo1.waypoint(function (direction){
  if(direction == 'down'){
  $geo1.addClass('js-geo1-animate');
} else {
  $geo1.removeClass('js-geo1-animate');
}
}, { offset: '50%' });
//options: the offset allows to set the distance of
//the waypoint from the top
