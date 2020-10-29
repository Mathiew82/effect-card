
window.onload = function () {
  var cardContainer = document.querySelector('.card-container')
  var card = document.querySelector('.card')
  var cardHeaderImg = document.querySelector('.card-header-img')

  cardContainer.onmousemove = function (e) {
    var w = window.innerWidth / 30 - e.pageX / 15
    var h = window.innerHeight / 30 - e.pageY / 15

    card.style.transform = `rotateX(${h}deg) rotateY(${w}deg)`
  }

  // cardContainer.onmouseenter = function (e) {
  //   console.log('onmouseenter')
  //   cardHeaderImg.style.transform = 'translateZ(150px)'
  // }

  cardContainer.onmouseleave = function (e) {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
  }
}