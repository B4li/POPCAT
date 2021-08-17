/*
* 1 | Allez sur https://popcat.click
* 2 | Ouvrez la console [F12]
* 3 | Entrez le code et appuyez sur enter
*/

var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
	}
}, 0);
