import Head from 'next/head';
import Cropservice from '@/components/Cropservice';

export default function Home() {
  return (
    <>
      <Head>
        <title>BarberCrop</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="../public/vercel.svg" />
      </Head>
      <main>
        <section className="hero d-flex">
          <div className="hero_slider">
            <div className="hero_slider-wrapper swiper-wrapper">
              <div className="hero_slider-slide swiper-slide" data-bg="img/placeholder.jpg"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/placeholder.jpg"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/placeholder.jpg"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/placeholder.jpg"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/placeholder.jpg"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/placeholder.jpg"></div>
            </div>
            <div className="hero_slider-pagination swiper-pagination"></div>
            <div className="hero_slider-controls d-none d-md-flex justify-content-between">
              <span className="hero_slider-control hero_slider-control--prev">
                <i className="icon-arrow_left"></i>
              </span>
              <span className="hero_slider-control hero_slider-control--next">
                <i className="icon-arrow_right"></i>
              </span>
            </div>
          </div>
          <div
            className="
                        container
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center align-items-md-start align-items-lg-center align-items-xl-start
                    "
          >
            <div className="hero_content col-xl-7 col-xxl-6">
              <h1 className="hero_content-header">We will keep you an impeccable look</h1>
              <p className="hero_content-text text">
                3891 Ranchview Dr. Richardson,
                <span className="linebreak">California 62639</span>
              </p>
              <span className="hero_content-tel d-inline-flex align-items-center">
                <span className="icon d-flex justify-content-center align-items-center">
                  <i className="icon-phone"></i>
                </span>
                <a className="link" href="tel:+1234567890">
                  +1 234 567 890
                </a>
              </span>
            </div>
          </div>
          <span className="hero_overlay"></span>
        </section>

        <section className="about section--nopb">
          <div className="container d-xl-flex justify-content-between">
            <div className="about_header section_header col-xl-6">
              <h2 className="about_header-title section_header-title" data-aos="fade-right">
                professional barbershop
                <span className="linebreak">for men only</span>
              </h2>
              <span
                className="about_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Barbercrop
              </span>
            </div>
            <div className="about_info col-xl-6">
              <p className="about_info-text text" data-aos="fade-left">
                Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh pellentesque.
                Vitae nunc, dolor, blandit eget eleifend etiam id. Amet arcu lobortis sed pulvinar
                cursus pretium sit pretium.
              </p>
              <div className="wrapper d-sm-flex">
                <div className="about_info-fact">
                  <h3 className="about_info-fact_title" data-aos="fade-up">
                    Since 2015
                  </h3>
                  <p className="about_info-fact_description" data-aos="fade-up">
                    Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis cras odio.
                  </p>
                </div>
                <div className="about_info-fact">
                  <h3 className="about_info-fact_title" data-aos="fade-up" data-aos-delay="50">
                    1000+ clients
                  </h3>
                  <p className="about_info-fact_description" data-aos="fade-up" data-aos-delay="50">
                    Metus varius vitae habitant lorem. Porta scelerisque facilisi.
                  </p>
                </div>
              </div>
              <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <a className="about_info-btn btn theme-element" href="about.html">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <Cropservice />

        <section className="schedule section">
          <span className="overlay"></span>
          <div className="schedule_container container d-xl-flex flex-wrap">
            <div className="schedule_content col-xl-6">
              <h2 className="schedule_content-header" data-aos="fade-right">
                Team of professionals is waiting for you
              </h2>
              <p className="schedule_content-text text" data-aos="fade-right">
                Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus fusce consequat
                donec vitae porttitor elementum volutpat gravida. Tellus hac tristique nisi, id amet
                cras tempor, amet.
              </p>
            </div>
            <div className="schedule_hours col-xl-6">
              <h2 className="schedule_hours-header" data-aos="fade-left">
                Special Opening Hours
              </h2>
              <div className="schedule_hours-list d-md-flex">
                <div className="schedule_hours-list_group">
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Monday:</span>
                    9:00 am – 7:30 pm
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Tuesday:</span>
                    9:00 am – 7:30 pm
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Wednesday:</span>
                    9:00 am – 7:30 pm
                  </span>
                </div>
                <div className="schedule_hours-list_group">
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Thursday:</span>
                    9:00 am – 7:30 pm
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Friday:</span>
                    9:00 am – 7:30 pm
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Sat/sun:</span>
                    CLOSED
                  </span>
                </div>
              </div>
            </div>
            <div className="wrapper schedule_wrapper" data-aos="fade-up">
              <a className="schedule_btn btn theme-element" href="#">
                Book now
              </a>
            </div>
          </div>
        </section>

        <section className="blog section">
          <div className="container">
            <div className="blog_header section_header">
              <h2 className="blog_header-title section_header-title">Our blog</h2>
              <span
                className="blog_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Recent posts
              </span>
            </div>
            <ul className="blog_recent d-md-flex flex-wrap">
              <li className="blog_recent-post col-md-6 col-xl-4" data-aos="fade-up">
                <a className="blog_recent-post_wrapper d-md-flex flex-column" href="post.html">
                  <div className="media">
                    <picture>
                      <source
                        data-srcset="img/placeholder.jpg"
                        srcSet="img/placeholder.jpg"
                        type="image/webp"
                      />
                      <img
                        className="lazy thumbnail"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="5 advantages why you should visit barbershop"
                      />
                    </picture>
                  </div>
                  <div className="main d-md-flex flex-column justify-content-between">
                    <h4 className="title">5 advantages why you should visit barbershop</h4>
                    <span className="date highlight">04 August, 2021</span>
                  </div>
                </a>
              </li>
              <li
                className="blog_recent-post col-md-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a className="blog_recent-post_wrapper d-md-flex flex-column" href="post.html">
                  <div className="media">
                    <picture>
                      <source
                        data-srcset="img/placeholder.jpg"
                        srcSet="img/placeholder.jpg"
                        type="image/webp"
                      />
                      <img
                        className="lazy thumbnail"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Popular cosmetics for hair styling"
                      />
                    </picture>
                  </div>
                  <div className="main d-md-flex flex-column justify-content-between">
                    <h4 className="title">Top 10 Popular cosmetics for hair styling</h4>
                    <span className="date highlight">02 August, 2021</span>
                  </div>
                </a>
              </li>
              <li
                className="blog_recent-post col-md-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a className="blog_recent-post_wrapper d-md-flex flex-column" href="post.html">
                  <div className="media">
                    <picture>
                      <source
                        data-srcset="img/placeholder.jpg"
                        srcSet="img/placeholder.jpg"
                        type="image/webp"
                      />
                      <img
                        className="lazy thumbnail"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Features of beard and mustache care"
                      />
                    </picture>
                  </div>
                  <div className="main d-md-flex flex-column justify-content-between">
                    <h4 className="title">Some Features of beard and mustache care</h4>
                    <span className="date highlight">12 July, 2021</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}