"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const BannerWithCaseStudySlider = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".case-study-slider-next",
        prevEl: ".case-study-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="banner-with-case-study-slider-section mb-110">
        <div className="row g-0">
          <div className="col-xl-4 col-lg-5">
            <div className="banner-area">
              <img src="assets/img/home1/Field of Achievements.jpg" alt="" />
              <div className="banner-content">
                <div
                  className="section-title white wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                    Enterprise Evolution
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                  </span>
                  <h2>Field of Achievements</h2>
                </div>
                <div
                  className="banner-content-bottom wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <p>
                    Discover our array of accomplishments and success stories,
                    showcasing our dedication to excellence and innovation
                  </p>
                  <Link
                    href="/case-study"
                    className="primary-btn1 hover-white"
                    data-text="View All Stories"
                  >
                    <span>View All Stories</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="case-study-slider-area">
              <div className="row d-lg-none d-flex mb-60">
                <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="section-title white">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <g>
                          <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                        </g>
                      </svg>
                      Business Transformations
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <g>
                          <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                        </g>
                      </svg>
                    </span>
                    <h2>Success in the Field</h2>
                  </div>
                  <a
                    href="#"
                    className="primary-btn1 hover-white"
                    data-text="View All Stories"
                  >
                    <span>View All Stories</span>
                  </a>
                </div>
              </div>
              <Swiper
                {...settings}
                className="swiper case-study-slider wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/Navigating Growth- A Startup Agency Success Story.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <p>Startup Company</p>
                        <h4>
                          <Link href="/case-study/NavigatingGrowth">
                            Navigating Growth: A Startup Agency Success Story
                          </Link>
                        </h4>
                        <p>
                          Embark on a journey of growth and innovation as we
                          share the success story of a startup agency navigating
                          the challenges of scaling and achieving success in a
                          competitive landscape.
                        </p>
                        <Link
                          href="/case-study/NavigatingGrowth"
                          className="learn-more-btn"
                        >
                          Learn MORE
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={9}
                            viewBox="0 0 17 9"
                          >
                            <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                            <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/Digital Transformation- Long Journey to Industry.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <p> Digital Transformation</p>
                        <h4>
                          <Link href="/case-study/DigitalTransformation">
                            Digital Transformation: Long Journey to Industry
                          </Link>
                        </h4>
                        <p>
                          Experience the transformative power of digital
                          innovation as we delve into the journey of
                          organizations embracing digital transformation to stay
                          relevant and competitive in their industries.
                        </p>
                        <Link
                          href="/case-study/DigitalTransformation"
                          className="learn-more-btn"
                        >
                          Learn MORE
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={9}
                            viewBox="0 0 17 9"
                          >
                            <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                            <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/Overcoming Expansion- An Initial Agency's Triumph.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <p>Overcoming Expansion</p>
                        <h4>
                          <Link href="/case-study/OvercomingExpansion">
                            Overcoming Expansion: An Initial Agency's Triumph
                          </Link>
                        </h4>
                        <p>
                          Explore the inspiring tale of an initial agency
                          overcoming the hurdles of expansion, demonstrating
                          resilience, and achieving success in new markets.
                        </p>
                        <Link
                          href="/case-study/OvercomingExpansion"
                          className="learn-more-btn"
                        >
                          Learn MORE
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={9}
                            viewBox="0 0 17 9"
                          >
                            <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                            <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/Business Consulting to increase market analytics.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <p>Business</p>
                        <h4>
                          <Link href="/case-study/Business">
                            Business Consulting to Increase Marketing Analytics
                          </Link>
                        </h4>
                        <p>
                          Discover how strategic business consulting helps
                          businesses enhance their marketing analytics,
                          empowering them to make data-driven decisions and
                          achieve greater marketing success.
                        </p>
                        <Link
                          href="/case-study/Business"
                          className="learn-more-btn"
                        >
                          Learn MORE
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={9}
                            viewBox="0 0 17 9"
                          >
                            <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                            <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/Small Business Triumph - Overcoming Challenges.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <p>Small Business Triumph</p>
                        <h4>
                          <Link href="/case-study/SmallBusinessTriumph">
                            Small Business Triumph: Overcoming Challenges
                          </Link>
                        </h4>
                        <p>
                          Witness the resilience and determination of small
                          businesses as they overcome challenges, navigate
                          obstacles, and emerge triumphant in today's dynamic
                          market landscape.
                        </p>
                        <Link
                          href="/case-study/SmallBusinessTriumph"
                          className="learn-more-btn"
                        >
                          Learn MORE
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={9}
                            viewBox="0 0 17 9"
                          >
                            <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                            <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="case-study-card">
                      <div className="card-img">
                        <img
                          src="assets/img/home1/Digital Transformation- Long Journey to Industry.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <p>Global Impact</p>
                        <h4>
                          <Link href="/case-study/GlobalImpact">
                            Global Impact: Scaling Across Borders
                          </Link>
                        </h4>
                        <p>
                          Dive into the story of organizations making a global
                          impact as they scale operations across borders,
                          showcasing innovation, adaptability, and success on
                          the international stage
                        </p>
                        <Link
                          href="/case-study/GlobalImpact"
                          className="learn-more-btn"
                        >
                          Learn MORE
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={9}
                            viewBox="0 0 17 9"
                          >
                            <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                            <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div
                className="slider-btn-area d-flex justify-content-center pt-50 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="slider-btn-grp">
                  <div className="slider-btn case-study-slider-prev">
                    <i className="bi bi-arrow-left" />
                  </div>
                  <div className="slider-btn case-study-slider-next">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWithCaseStudySlider;
