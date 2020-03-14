let starsNumber = 10
let stickerStar = document.querySelector('.sticker_star')

for (let i = 0; i < 10; i++) {
	let newStarImg = document.createElement('img')
	newStarImg.classList.add('star')
	newStarImg.src = 'img/star1.svg'
	newStarImg.onclick = function() {
		newStarImg.setAttribute('src', 'img/star2.svg');
	}
	newStarImg.style.transform = `translate(${anime.random(1,100)}vw, ${anime.random(1,100)}vh)`
	stickerStar.append(newStarImg)
}

let stars = document.querySelectorAll('.star')
stars.forEach(function(element) {
	element.onclick = function() {
		element.setAttribute('src', 'img/star2.svg');
	}
})

let infiniteLoopAlternate = anime({
  targets: '.pineapple',
  translateX: 250,
	translateY: -250,
	duration: 2000,
  direction: 'alternate',
  loop: true
});
