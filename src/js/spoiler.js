const spoilers = document.querySelectorAll('.footer__title');
if (spoilers) {
	for (let item of spoilers) {
		item.addEventListener("click", function (e) {
			if (this.classList.contains('_show')) {
				this.classList.remove('_show');
			} else {
					for( let item of spoilers) {
						item.classList.remove('_show');
					}
					this.classList.add('_show');
				}
				console.log (1);
		});
	}
	
}
