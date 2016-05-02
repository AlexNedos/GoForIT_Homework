(function ($) {

  $.fn.modal = function (options) {
    
    
    var settings = $.extend(options);
    
    var $link = this;
    var $body = $('body');
    var $modal;
    var $overlay;

    function showModal(e) {

      $modal = $('<div class="fancybox-modal"><p style="font-size:'+ settings.fontSize +';">Результат</p><div class="aaa"></div></div>');
      $overlay = $('<div class="modal-overlay">');
      $overlay.css({
        'background-color': settings.overlayColor
      });


      e.preventDefault();

      $body.append($overlay);
      $body.append($modal);
      $overlay.one('click', hideModal);
    }

    function hideModal() {
      $modal.remove();
      $overlay.remove();
      location.reload();
     
    }

    $link.on('click', showModal);




    return this;
  };


})(jQuery);