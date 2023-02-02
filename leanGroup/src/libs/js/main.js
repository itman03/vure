$(document).ready(function(){
    $("#home-slider").owlCarousel({
        items: 1,
        loop: true,
    });
    var certSlider = $('#certificates-slider');
    certSlider.owlCarousel({
        items: 5,
        margin: 30,
    });
    $('.custom-next').click(function() {
        certSlider.trigger('next.owl.carousel');
    })
    $('.custom-prev').click(function() {
        certSlider.trigger('prev.owl.carousel', [300]);
    });
    //Табы на странице
    $('ul.product-tabs__caption').on('click', 'li:not(.product-tabs__btn__ active)', function() {
    $(this)
      .addClass('product-tabs__btn__ active').siblings().removeClass('product-tabs__btn__ active')
      .closest('div.product-tabs').find('div.product-tabs__content').removeClass('product-tabs__content_active').eq($(this).index()).addClass('product-tabs__content_active');
  });
  });