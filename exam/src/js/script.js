$(function () {
//ISOTOP IMG
	$('.grid').isotope({
		itemSelector: '.grid-item',
		masonry: {
			columnWidth: 15
		}
	});
//ISOTOP IMG
//	AJAX
	var $button = $('.ideas__button');
	$.ajax({
		url: 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q=black&image_type=photo&pretty=true',
		success: function (hits) {
			for (var i = 0; i < 8; i++) {
				var $ideasBox = $('.ideas__box' + i);
				var $link = hits.hits[i].webformatURL;
				var $name = hits.hits[i].tags;
				var $result = '<img src="' + $link + '" alt=""> <p>' + $name + '</p>'
				$ideasBox.html($result);
			}
		}
	});
	$button.on('click', function () {
		var $search = $('.ideas__search').val();
		$.ajax({
			url: 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q=' + $search + '&image_type=photo&pretty=true',
			success: function (hits) {
				for (var i = 0; i < 8; i++) {
					var $ideasBox = $('.ideas__box' + i);
					var $link = hits.hits[i].webformatURL;
					var $name = hits.hits[i].tags;
					var $result = '<img src="' + $link + '" alt=""> <p>' + $name + '</p>'
					$ideasBox.html($result);
				}
			}
		});
	});
//	AJAX
//JARUSEL
	(function ($) {
		$(function () {

			$('[data-jcarousel]').each(function () {
				var el = $(this);
				el.jcarousel(el.data());
			});

			$('[data-jcarousel-control]').each(function () {
				var el = $(this);
				el.jcarouselControl(el.data());
			});
		});
	})($);

//JARUSEL
	
	
	
	
	
	
	
	
	
	
	
});

