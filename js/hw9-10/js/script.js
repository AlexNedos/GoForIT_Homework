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

    $('.jcarousel').each(function () {
      var el = $(this);
      el.jcarouselControl(el.data());
    });

  });
})($);

//-----------------MENU---------------

$(function () {
  $('.dropdown').hover(
    function () {
      $(this).children('.submenu').slideDown(200);
    },
    function () {
      $(this).children('.submenu').slideUp(200);
    }
  );
});

//------------CHECKBOX-------------

$('.jq-checkbox').mousedown(function () {
  changeCheck($(this));
});

$('.jq-checkbox').each(function () {
  changeCheckStart($(this));
});

function changeCheck(el) {
  var input = el.find('input').eq(0);
  if (!input.attr('checked')) {
    el.css('background-position', '0 -32px');
    input.attr('checked', true);
  } else {
    el.css('background-position', '0 0');
    input.attr('checked', false);
  }
  return true;
}

function changeCheckStart(el) {
  var input = el.find('input').eq(0);
  if (input.attr('checked')) {
    el.css('background-position', '0 -32px');
  }
  if (input.attr('disabled')) {
    el.css('background-image', 'url("img/checkbox__dis.png")');
  }
  return true;
}


//------------SELECTED-------------
$(function () {
  $(".country_id").selectbox({});
});