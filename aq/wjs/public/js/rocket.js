var rocket = document.getElementById("rocket");
window.onscroll = function () {
  var temp = getScrollValue();
  if (temp.top >= 666) {
    $(rocket).show();
  } else {
    $(rocket).hide();
  }
};


var timer;
rocket.onclick = function(){
  clearInterval(timer);
  timer = setInterval(function(){
    var current = document.documentElement.scrollTop;
    current -= 10;
    if (current <= 10){
      window.scrollTo(0,0);
      clearInterval(timer);
    }
    window.scrollTo(0,current);
  },10);
};
