function getTimeLeft(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeLeft(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var end = '2021-12-31';
  initializeClock('taimer', end);

  let heartImg = document.getElementById("id-img")
  document.getElementById("id").onclick = change;
  function change() {
    this.classList.toggle("aside-btn-sales-heart-click");
    heartImg.classList.toggle("aside-btn-sales-heart-click2")
}
var x=false

let subscribe = document.getElementById("subscribe")
let favorites = document.getElementById("favorites")
document.getElementById("aside-contact-svg").onclick = getSubscribe;
function getSubscribe(){
  if  (x){this.src= "img/subscribe.svg"
       } else {
       this.src="img/change1.svg"
       }
      x=!x
    

  subscribe.textContent = subscribe.textContent === 'Подписаться' ? 'Вы подписаны' : 'Подписаться';
}
document.getElementById("aside-contact-svg2").onclick = getFavorites;
function getFavorites(){
  if  (x){this.src= "img/favorites.svg"
       } else {
       this.src="img/change2.svg"
       }
      x=!x
  favorites.textContent = favorites.textContent === 'В избранное' ? 'В избранном' : 'В избранное';
}