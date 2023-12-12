function getRandomPosition() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var randomX = Math.floor(Math.random() * (screenWidth - 100));
  var randomY = Math.floor(Math.random() * (screenHeight - 100));
  return [randomX, randomY];
}

window.addEventListener('DOMContentLoaded', function() {
  var pageTitle = document.querySelector('.pageTitle');

  setInterval(function() {
    var position = getRandomPosition();
    pageTitle.style.position = 'fixed';
    pageTitle.style.top = position[1] + 'px';
    pageTitle.style.left = position[0] + 'px';
  }, 2000); // Change the interval time (in milliseconds) as desired
});
