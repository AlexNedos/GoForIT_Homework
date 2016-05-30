define(
	'edit', ['jquery'],
	function () {

		return {
			Edit: function Edit(a) {

				$('.wrapper__controlls__item__value').bind('click', function () {
					for (var i = 0; i < a.length; i++) {
						var arr = $('.list__template__text');
						if (arr[i].innerHTML === a[i]) {
							return;
						} else {
							a[i] = arr[i].innerHTML;
						}
					}
				});
			}
		};
	}
);