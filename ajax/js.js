$.ajax({
	url: 'https://git.grossum.com/grossum/football/raw/master/GrossFoot/www/js/controllers.js',             // указываем URL и
	dataType : "json",                     // тип загружаемых данных
	success: function (data, textStatus) { // вешаем свой обработчик на функцию success
		console.log(data);
	} 
});