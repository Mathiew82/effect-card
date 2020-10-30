var colors = {
  blue   : '#87e0fd',
  red    : '#fd87d0',
  green  : '#87fde7',
  yellow : '#fdf587',
  gray   : '#ddd'
}

window.onload = function () {
  var cardContainer = document.querySelector('.card-container')
  var card = document.querySelector('.card')
  var header = document.querySelector('.card__header')
  var colorItem = document.querySelectorAll('.card-color-list__item')

  cardContainer.onmousemove = function (e) {
    var w = window.innerWidth / 30 - e.pageX / 15
    var h = window.innerHeight / 30 - e.pageY / 15

    card.style.transform = `rotateX(${h}deg) rotateY(${w}deg)`
  }

  cardContainer.onmouseleave = function (e) {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  colorItem.forEach(function (item) {
    item.onclick = function (e) {
      console.log(e.target.id)
      header.style.background = colors[e.target.id]
    }
  })
}