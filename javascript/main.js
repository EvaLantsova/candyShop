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

let imgs = document.querySelectorAll('img');
    if (document.documentElement.clientWidth <= 768) {
      for (let img of[...imgs]) {
       img .src = document.querySelector('img').src.replace('jpg', 'png');
      }
    }


/*
// build scene

// init controller

var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".dynamicContent #loader", triggerHook: "onEnter"})
				.addTo(controller)
				.on("enter", function (e) {
					if (!$(".iphone_8").hasClass(".iphone_8")) {
						$("#loader").addClass(".iphone_8");
						if (console){
							console.log("loading new items");
						}
						// simulate ajax call to add content using the function below
						setTimeout(addBoxes, 1000, 9);
					}				addTo(controller)
				.on("enter", function (e) {
					if (!$(".iphone_8").hasClass(".iphone_8")) {
						$("#loader").addClass(".iphone_8");
						if (console){
							console.log("loading new items");
						}
						// simulate ajax call to add content using the function below
						setTimeout(addBoxes, 1000, 9);
					}
				});

// pseudo function to add new content. In real life it would be done through an ajax request.
function addBill (amount) {
	for (i=1; i<=amount; i++) {
		var randomColor = '#'+('00000'+(Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
		$("<div></div>")
			.addClass(".iphone_8")
			.css("background-color", randomColor)
			.appendTo(".dynamicContent #content");
	}
	// "loading" done -> revert to normal state
	scene.update(); // make sure the scene gets the new start position
	$("#loader").removeClass("active");
}

// add some boxes to start with.
addBoxes(18);
*/
