import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
