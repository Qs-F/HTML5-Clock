
window.onload = setInterval(function showClock2 () {
  var nowTime = new Date();
  var month = set2fig( nowTime.getMonth()+1 );
  var day = set2fig( nowTime.getDate() );
  var nowHour = set2fig( nowTime.getHours() );
  var nowMin = set2fig( nowTime.getMinutes() );
  var nowSec = set2fig( nowTime.getSeconds() );
  var days = month + "/" + day;
  var msg = nowHour + ":" + nowMin + ":" + nowSec;
  document.getElementById("RealtimeClockArea1").innerHTML = days;
  document.getElementById("hours").innerHTML = nowHour;
  document.getElementById("minutes").innerHTML = nowMin;
  document.getElementById("seconds").innerHTML = nowSec;
},1000);


window.addEventListener("load", function() {
  document.getElementsByTagName("button")[0].addEventListener("click", bg, false);
}, false);

function bg() {
  var backgroundId = 'back' + Math.floor( Math.random() * 12 ) + '.jpg';
  document.getElementById("background").src = backgroundId;
}

window.onload = setInterval(function() {
  var backgroundId = 'back' + Math.floor( Math.random() * 12 ) + '.jpg';
  document.getElementById("background").src = backgroundId;
},60000);

function set2fig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}



/*function showClock2() {
   var nowTime = new Date();
   var month = set2fig( nowTime.getMonth()+1 );
   var day = set2fig( nowTime.getDate() );
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin = set2fig( nowTime.getMinutes() );
   var nowSec = set2fig( nowTime.getSeconds() );
   var days = month + "/" + day;
   var msg = nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("RealtimeClockArea1").innerHTML = days;
   document.getElementById("hours").innerHTML = nowHour;
   document.getElementById("minutes").innerHTML = nowMin;
   document.getElementById("seconds").innerHTML = nowSec;
}*/