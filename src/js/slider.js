import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  arrows: false,
});
