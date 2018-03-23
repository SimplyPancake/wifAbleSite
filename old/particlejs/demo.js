/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#D2E6F34D',
    lineColor: '#FFFBF333',
    directionX: 'right',
    directionY: 'up',
    proximity: 190
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
