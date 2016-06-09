$(function () {
	//ISOTOP IMG
//	$('.grid').isotope({
//		itemSelector: '.grid-item',
//		masonry: {
//			columnWidth: 15
//		}
//	});
	//ISOTOP IMG
	//	AJAX
	var $button = $('.ideas__button');
//	$.ajax({
//		url: 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q=blur&image_type=photo&pretty=true',
//		success: function (hits) {
//			for (var i = 0; i < 8; i++) {
//				var $ideasBox = $('.ideas__box' + i);
//				var $link = hits.hits[i].webformatURL;
//				var $name = hits.hits[i].tags;
//				var $result = '<img src="' + $link + '" alt=""> <p>' + $name + '</p>'
//				$ideasBox.html($result);
//			}
//		}
//	});
//	$button.on('click', function () {
//		var $search = $('.ideas__search').val();
//		$.ajax({
//			url: 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q=' + $search + '&image_type=photo&pretty=true',
//			success: function (hits) {
//				for (var i = 0; i < 8; i++) {
//					var $ideasBox = $('.ideas__box' + i);
//					var $link = hits.hits[i].webformatURL;
//					var $name = hits.hits[i].tags;
//					var $result = '<img src="' + $link + '" alt=""> <p>' + $name + '</p>'
//					$ideasBox.html($result);
//				}
//			}
//		});
//	});
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




	$button.on('click', function () {
		debugger;
//	var q, orientation, amount;
//
//	q = (query === undefined) ? '' : query;
//	orientation = 'all';
//	amount = 7;

	var url = 'https://pixabay.com/api/?key=2683000-931909b1d6f29b69f89649b0a&q=blur&image_type=photo&pretty=true';

	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

	var xhr = new XHR();
	xhr.open('GET', url , true);
	xhr.send();
	xhr.onreadystatechange = self.checkResponse = function(event) {
		if (xhr.readyState != 4) return;
		if (xhr.status != 200) {
			console.log(xhr.status + ': ' + xhr.statusText);
		} else {
			
			var imgResponse = JSON.parse(xhr.responseText);
								for (var i = 0; i < 8; i++) {
									var $ideasBox = $('.ideas__box' + i);
									var $link = imgResponse.hits[i].webformatURL;
									var $name = imgResponse.hits[i].tags;
									var $result = '<img src="' + $link + '" alt=""> <p>' + $name + '</p>'
									$ideasBox.html($result);
								}
		}
	};
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});