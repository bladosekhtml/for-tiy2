$(function () {
   var mixor = mixitup('.block__items');
   $('.blog-btn').on('click', function () {
      $('.blog-btn').removeClass('blog__active-btn');
      $(this).addClass('blog__active-btn');
   })
}
)

$('.persons__items').slick({
   slidesToShow: 2,
   infinite: true,
   draggable: false,
   appendArrows: $('.person__sliders'),
   dots: true,
   appendDots: $('.custom-dots'),
   customPaging: function (slider, i) {
      return `
          <div class="custom-dot">
              <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="2" x2="32" y2="2" stroke="#939191" stroke-width="4" />
              </svg>
          </div>`;
   }
})

$('.quest__acc-item').on('click', function (e) {
   e.preventDefault()
   var item = $(this).children('.quest__acc-info')
   var child = item.children('.quest__acc-text')
   if ($(this).hasClass('quest-active')) {
      $(this).removeClass('quest-active')
      $('.quest__acc-text').slideUp()
   }
   else {
      $('.quest__acc-text').slideUp()
      $(this).addClass('quest-active')
      child.slideDown()
   }
})

let map;
async function initMap() {
   const position = { lat: 40.6501, lng: 73.9496 };
   const { Map } = await google.maps.importLibrary("maps");
   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

   map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
   });
   const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "Uluru",
   });
}
initMap();

$('.header__link-item a, .footer__link-item a').on('click', function(e){
   e.preventDefault()
   var id = $(this).attr('href')
   top1 = $(id).offset().top
   $('body, html').animate({ scrollTop: top1 }, 1000)
})

$('.burger').on('click',function(e) {
   e.preventDefault()
   $('.header__navigation').toggleClass('header__navigation--open');
})
$('.burger').on('')