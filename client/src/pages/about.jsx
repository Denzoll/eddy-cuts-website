import Cropservice from '@/components/Cropservice';
import Start from '@/components/Start';

const About = () => {
  return (
    <>
      <main>
        <section className="about section">
          <div className="container d-xl-flex flex-wrap">
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
                About us
              </span>
            </div>
            <div className="about_info col-xl-6 d-sm-flex">
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
            <div
              className="about_media col-12"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="700"
            >
              <picture>
                <source
                  data-srcset="img/placeholder.jpg"
                  srcSet="img/placeholder.jpg"
                  type="image/webp"
                />
                <img
                  className="lazy about_media-img"
                  data-src="img/placeholder.jpg"
                  src="img/placeholder.jpg"
                  alt="media"
                />
              </picture>
            </div>
            <div className="about_text d-md-flex justify-content-between">
              <p className="about_text-block text">
                Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh pellentesque.
                Vitae nunc, dolor, blandit eget eleifend etiam id. Amet arcu lobortis sed pulvinar
                cursus pretium sit pretium.
              </p>
              <p className="about_text-block text">
                Mollis rhoncus sem nisl dictumst mauris. At faucibus arcu, scelerisque ultricies
                accumsan arcu, molestie. Sed ac elit varius enim venenatis ac, id. Ullamcorper non
                interdum posuere sit nibh id metus.
              </p>
            </div>
          </div>
        </section>

        <section className="team section--nopt">
          <div className="container">
            <h2 className="team_header">Meet the masters</h2>
            <ul className="team_list d-md-flex flex-wrap">
              <li className="team_list-item col-md-6 col-xl-4">
                <div className="team_list-item_wrapper d-flex flex-column" data-order="1">
                  <div className="media" data-aos="zoom-in" data-aos-duration="650">
                    <picture>
                      <source
                        data-srcset="img/placeholder.jpg"
                        srcSet="img/placeholder.jpg"
                        type="image/webp"
                      />
                      <img
                        className="lazy media_img"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Ralph Edwards"
                      />
                    </picture>
                  </div>
                  <div className="info d-flex flex-column justify-content-between">
                    <h3 className="name" data-aos="fade-down">
                      Ralph Edwards
                    </h3>
                    <span className="speciality highlight" data-aos="fade-up">
                      Top barber
                    </span>
                  </div>
                </div>
              </li>
              <li className="team_list-item col-md-6 col-xl-4">
                <div
                  className="team_list-item_wrapper d-flex flex-column"
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  data-order="2"
                  data-aos-duration="650"
                >
                  <div
                    className="media"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="650"
                  >
                    <picture>
                      <source
                        data-srcset="img/placeholder.jpg"
                        srcSet="img/placeholder.jpg"
                        type="image/webp"
                      />
                      <img
                        className="lazy media_img"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Marvin McKinney"
                      />
                    </picture>
                  </div>
                  <div className="info d-flex flex-column justify-content-between">
                    <h3 className="name" data-aos="fade-down">
                      Marvin McKinney
                    </h3>
                    <span className="speciality highlight" data-aos="fade-up">
                      Hair Stylist
                    </span>
                  </div>
                </div>
              </li>
              <li className="team_list-item col-md-6 col-xl-4">
                <div className="team_list-item_wrapper d-flex flex-column" data-order="3">
                  <div
                    className="media"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-duration="650"
                  >
                    <picture>
                      <source
                        data-srcset="img/placeholder.jpg"
                        srcSet="img/placeholder.jpg"
                        type="image/webp"
                      />
                      <img
                        className="lazy media_img"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Albert Flores"
                      />
                    </picture>
                  </div>
                  <div className="info d-flex flex-column justify-content-between">
                    <h3 className="name" data-aos="fade-down">
                      Albert Flores
                    </h3>
                    <span className="speciality highlight" data-aos="fade-up">
                      barber
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="gallery">
          <div className="container-fluid p-0">
            <div className="container">
              <div className="gallery_header section_header">
                <h2 className="gallery_header-title section_header-title" data-aos="fade-right">
                  Our works
                </h2>
                <span
                  className="gallery_header-subtitle section_header-subtitle"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-once="false"
                >
                  Our best works
                </span>
              </div>
            </div>
            <ul className="gallery_list d-md-flex flex-wrap">
              <li className="gallery_list-item col-md-6 col-xl-3">
                <a
                  className="gallery_list-item_trigger"
                  href="img/placeholder.jpg"
                  data-caption="Lorem ipsum"
                >
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy gallery_list-item_img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="media"
                    />
                  </picture>
                </a>
              </li>
              <li className="gallery_list-item col-md-6 col-xl-3">
                <a
                  className="gallery_list-item_trigger"
                  href="img/placeholder.jpg"
                  data-caption="Lorem ipsum"
                >
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy gallery_list-item_img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="media"
                    />
                  </picture>
                </a>
              </li>
              <li className="gallery_list-item col-md-6 col-xl-3">
                <a
                  className="gallery_list-item_trigger"
                  href="img/placeholder.jpg"
                  data-caption="Lorem ipsum"
                >
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy gallery_list-item_img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="media"
                    />
                  </picture>
                </a>
              </li>
              <li className="gallery_list-item col-md-6 col-xl-3">
                <a
                  className="gallery_list-item_trigger"
                  href="img/placeholder.jpg"
                  data-caption="Lorem ipsum"
                >
                  <picture>
                    <source
                      data-srcset="img/placeholder.jpg"
                      srcSet="img/placeholder.jpg"
                      type="image/webp"
                    />
                    <img
                      className="lazy gallery_list-item_img"
                      data-src="img/placeholder.jpg"
                      src="img/placeholder.jpg"
                      alt="media"
                    />
                  </picture>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <Cropservice />

        <section className="reviews section--nopt">
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            <h2 className="reviews_header">What our clients say about us</h2>
            <div className="reviews_slider swiper">
              <div className="reviews_slider-wrapper swiper-wrapper">
                <div className="reviews_slider-slide swiper-slide">
                  <div className="reviews_slider-slide_wrapper d-flex flex-column flex-md-row">
                    <span className="icon">
                      <svg
                        className="quotes-icon"
                        width="70"
                        height="55"
                        viewBox="0 0 70 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.5001 10.3039C15.6409 12.1466 13.2129 14.5424 11.3709 17.3385C9.90963 19.5567 8.84273 21.9881 8.20897 24.5326C8.04386 25.1955 7.90815 25.8661 7.80252 26.5426H24.0001C25.4588 26.5426 26.8577 27.0999 27.8892 28.0919C28.9206 29.0839 29.5001 30.4292 29.5001 31.8321V47.7005C29.5001 49.1034 28.9206 50.4488 27.8892 51.4408C26.8577 52.4327 25.4588 52.99 24.0001 52.99H7.50002C6.04132 52.99 4.64237 52.4327 3.61092 51.4408C2.57946 50.4488 2 49.1034 2 47.7005V30.113C2.00167 25.3244 3.23243 20.6102 5.58308 16.3887C7.93372 12.1673 11.3315 8.5692 15.475 5.91368L20.3976 2.73999L23.4226 7.13026L18.5001 10.3039ZM14.3973 4.22047C9.98248 7.05042 6.35275 10.8906 3.83778 15.4072C1.32203 19.9251 0.00179064 24.9766 0 30.1123V47.7005C0 49.6657 0.812566 51.5316 2.22816 52.893C3.64076 54.2515 5.5386 55 7.50002 55H24.0001C25.9615 55 27.8593 54.2515 29.2719 52.893C30.6875 51.5316 31.5001 49.6657 31.5001 47.7005V31.8321C31.5001 29.8669 30.6875 28.0011 29.2719 26.6397C27.8593 25.2811 25.9615 24.5326 24.0001 24.5326H10.2769C10.8661 22.3877 11.7955 20.335 13.0385 18.4481C14.7241 15.8894 16.9504 13.6904 19.5797 11.9959L26.2463 7.69777L20.9427 0.000488281L14.3997 4.21894C14.3989 4.21945 14.3981 4.21996 14.3973 4.22047Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.0797 11.9959C55.4504 13.6904 53.2241 15.8894 51.5385 18.448C50.2955 20.3349 49.3661 22.3876 48.7769 24.5326H62.5001C64.4615 24.5326 66.3593 25.2811 67.7719 26.6396C69.1875 28.001 70.0001 29.8668 70.0001 31.832V47.7005C70.0001 49.6657 69.1875 51.5315 67.7719 52.8929C66.3593 54.2514 64.4615 54.9999 62.5001 54.9999H46C44.0386 54.9999 42.1408 54.2514 40.7282 52.8929C39.3126 51.5315 38.5 49.6657 38.5 47.7005V30.113C38.5018 24.9772 39.822 19.925 42.3378 15.4071C44.8531 10.8898 48.4836 7.04915 52.8994 4.21907C52.8995 4.21901 52.8993 4.21914 52.8994 4.21907L59.4799 0L64.7389 7.70249L58.0797 11.9959ZM62.5001 26.5426C63.9588 26.5426 65.3577 27.0998 66.3892 28.0918C67.4206 29.0838 68.0001 30.4292 68.0001 31.832V47.7005C68.0001 49.1033 67.4206 50.4487 66.3892 51.4407C65.3577 52.4327 63.9588 52.9899 62.5001 52.9899H46C44.5413 52.9899 43.1424 52.4327 42.1109 51.4407C41.0795 50.4487 40.5 49.1033 40.5 47.7005V30.113C40.5017 25.3243 41.7324 20.6101 44.0831 16.3887C46.4337 12.1673 49.8315 8.56913 53.975 5.91361L58.9251 2.73993L61.9226 7.13019L57.0001 10.3039C54.1409 12.1465 51.7129 14.5424 49.8709 17.3384C48.4096 19.5566 47.3427 21.988 46.709 24.5326C46.5439 25.1955 46.4082 25.8661 46.3025 26.5426H62.5001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="main d-flex flex-column justify-content-between">
                      <p className="main_review">
                        Nullam nec cursus morbi quam. Malesuada volutpat nunc neque mauris est,
                        risus sit sed cursus. Nibh praesent felis, vitae tristique aliquam tellus
                        etiam amet. Dignissim vitae sagittis magna tempor.
                      </p>
                      <span className="main_author highlight">Floyd Miles</span>
                    </div>
                  </div>
                </div>
                <div className="reviews_slider-slide swiper-slide">
                  <div className="reviews_slider-slide_wrapper d-flex flex-column flex-md-row">
                    <span className="icon">
                      <svg
                        className="quotes-icon"
                        width="70"
                        height="55"
                        viewBox="0 0 70 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.5001 10.3039C15.6409 12.1466 13.2129 14.5424 11.3709 17.3385C9.90963 19.5567 8.84273 21.9881 8.20897 24.5326C8.04386 25.1955 7.90815 25.8661 7.80252 26.5426H24.0001C25.4588 26.5426 26.8577 27.0999 27.8892 28.0919C28.9206 29.0839 29.5001 30.4292 29.5001 31.8321V47.7005C29.5001 49.1034 28.9206 50.4488 27.8892 51.4408C26.8577 52.4327 25.4588 52.99 24.0001 52.99H7.50002C6.04132 52.99 4.64237 52.4327 3.61092 51.4408C2.57946 50.4488 2 49.1034 2 47.7005V30.113C2.00167 25.3244 3.23243 20.6102 5.58308 16.3887C7.93372 12.1673 11.3315 8.5692 15.475 5.91368L20.3976 2.73999L23.4226 7.13026L18.5001 10.3039ZM14.3973 4.22047C9.98248 7.05042 6.35275 10.8906 3.83778 15.4072C1.32203 19.9251 0.00179064 24.9766 0 30.1123V47.7005C0 49.6657 0.812566 51.5316 2.22816 52.893C3.64076 54.2515 5.5386 55 7.50002 55H24.0001C25.9615 55 27.8593 54.2515 29.2719 52.893C30.6875 51.5316 31.5001 49.6657 31.5001 47.7005V31.8321C31.5001 29.8669 30.6875 28.0011 29.2719 26.6397C27.8593 25.2811 25.9615 24.5326 24.0001 24.5326H10.2769C10.8661 22.3877 11.7955 20.335 13.0385 18.4481C14.7241 15.8894 16.9504 13.6904 19.5797 11.9959L26.2463 7.69777L20.9427 0.000488281L14.3997 4.21894C14.3989 4.21945 14.3981 4.21996 14.3973 4.22047Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.0797 11.9959C55.4504 13.6904 53.2241 15.8894 51.5385 18.448C50.2955 20.3349 49.3661 22.3876 48.7769 24.5326H62.5001C64.4615 24.5326 66.3593 25.2811 67.7719 26.6396C69.1875 28.001 70.0001 29.8668 70.0001 31.832V47.7005C70.0001 49.6657 69.1875 51.5315 67.7719 52.8929C66.3593 54.2514 64.4615 54.9999 62.5001 54.9999H46C44.0386 54.9999 42.1408 54.2514 40.7282 52.8929C39.3126 51.5315 38.5 49.6657 38.5 47.7005V30.113C38.5018 24.9772 39.822 19.925 42.3378 15.4071C44.8531 10.8898 48.4836 7.04915 52.8994 4.21907C52.8995 4.21901 52.8993 4.21914 52.8994 4.21907L59.4799 0L64.7389 7.70249L58.0797 11.9959ZM62.5001 26.5426C63.9588 26.5426 65.3577 27.0998 66.3892 28.0918C67.4206 29.0838 68.0001 30.4292 68.0001 31.832V47.7005C68.0001 49.1033 67.4206 50.4487 66.3892 51.4407C65.3577 52.4327 63.9588 52.9899 62.5001 52.9899H46C44.5413 52.9899 43.1424 52.4327 42.1109 51.4407C41.0795 50.4487 40.5 49.1033 40.5 47.7005V30.113C40.5017 25.3243 41.7324 20.6101 44.0831 16.3887C46.4337 12.1673 49.8315 8.56913 53.975 5.91361L58.9251 2.73993L61.9226 7.13019L57.0001 10.3039C54.1409 12.1465 51.7129 14.5424 49.8709 17.3384C48.4096 19.5566 47.3427 21.988 46.709 24.5326C46.5439 25.1955 46.4082 25.8661 46.3025 26.5426H62.5001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="main">
                      <p className="main_review">
                        Egestas tincidunt arcu pellentesque tortor vulputate. Diam nulla
                        sollicitudin diam, rhoncus cursus faucibus mus ornare. Ut tincidunt ut eu
                        amet sit ut magna. Tincidunt dignissim pharetra, sit ut dictum volutpat
                        pharetra aenean blandit.
                      </p>
                      <span className="main_author highlight">Esther Howard</span>
                    </div>
                  </div>
                </div>
                <div className="reviews_slider-slide swiper-slide">
                  <div className="reviews_slider-slide_wrapper d-flex flex-column flex-md-row">
                    <span className="icon">
                      <svg
                        className="quotes-icon"
                        width="70"
                        height="55"
                        viewBox="0 0 70 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.5001 10.3039C15.6409 12.1466 13.2129 14.5424 11.3709 17.3385C9.90963 19.5567 8.84273 21.9881 8.20897 24.5326C8.04386 25.1955 7.90815 25.8661 7.80252 26.5426H24.0001C25.4588 26.5426 26.8577 27.0999 27.8892 28.0919C28.9206 29.0839 29.5001 30.4292 29.5001 31.8321V47.7005C29.5001 49.1034 28.9206 50.4488 27.8892 51.4408C26.8577 52.4327 25.4588 52.99 24.0001 52.99H7.50002C6.04132 52.99 4.64237 52.4327 3.61092 51.4408C2.57946 50.4488 2 49.1034 2 47.7005V30.113C2.00167 25.3244 3.23243 20.6102 5.58308 16.3887C7.93372 12.1673 11.3315 8.5692 15.475 5.91368L20.3976 2.73999L23.4226 7.13026L18.5001 10.3039ZM14.3973 4.22047C9.98248 7.05042 6.35275 10.8906 3.83778 15.4072C1.32203 19.9251 0.00179064 24.9766 0 30.1123V47.7005C0 49.6657 0.812566 51.5316 2.22816 52.893C3.64076 54.2515 5.5386 55 7.50002 55H24.0001C25.9615 55 27.8593 54.2515 29.2719 52.893C30.6875 51.5316 31.5001 49.6657 31.5001 47.7005V31.8321C31.5001 29.8669 30.6875 28.0011 29.2719 26.6397C27.8593 25.2811 25.9615 24.5326 24.0001 24.5326H10.2769C10.8661 22.3877 11.7955 20.335 13.0385 18.4481C14.7241 15.8894 16.9504 13.6904 19.5797 11.9959L26.2463 7.69777L20.9427 0.000488281L14.3997 4.21894C14.3989 4.21945 14.3981 4.21996 14.3973 4.22047Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.0797 11.9959C55.4504 13.6904 53.2241 15.8894 51.5385 18.448C50.2955 20.3349 49.3661 22.3876 48.7769 24.5326H62.5001C64.4615 24.5326 66.3593 25.2811 67.7719 26.6396C69.1875 28.001 70.0001 29.8668 70.0001 31.832V47.7005C70.0001 49.6657 69.1875 51.5315 67.7719 52.8929C66.3593 54.2514 64.4615 54.9999 62.5001 54.9999H46C44.0386 54.9999 42.1408 54.2514 40.7282 52.8929C39.3126 51.5315 38.5 49.6657 38.5 47.7005V30.113C38.5018 24.9772 39.822 19.925 42.3378 15.4071C44.8531 10.8898 48.4836 7.04915 52.8994 4.21907C52.8995 4.21901 52.8993 4.21914 52.8994 4.21907L59.4799 0L64.7389 7.70249L58.0797 11.9959ZM62.5001 26.5426C63.9588 26.5426 65.3577 27.0998 66.3892 28.0918C67.4206 29.0838 68.0001 30.4292 68.0001 31.832V47.7005C68.0001 49.1033 67.4206 50.4487 66.3892 51.4407C65.3577 52.4327 63.9588 52.9899 62.5001 52.9899H46C44.5413 52.9899 43.1424 52.4327 42.1109 51.4407C41.0795 50.4487 40.5 49.1033 40.5 47.7005V30.113C40.5017 25.3243 41.7324 20.6101 44.0831 16.3887C46.4337 12.1673 49.8315 8.56913 53.975 5.91361L58.9251 2.73993L61.9226 7.13019L57.0001 10.3039C54.1409 12.1465 51.7129 14.5424 49.8709 17.3384C48.4096 19.5566 47.3427 21.988 46.709 24.5326C46.5439 25.1955 46.4082 25.8661 46.3025 26.5426H62.5001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="main d-flex flex-column justify-content-between">
                      <p className="main_review">
                        Tincidunt ante faucibus in dui quam aliquam integer nunc neque. Augue in
                        nullam urna nulla. Hac nisi habitant elementum cras duis placerat egestas
                        nisl. Vestibulum molestie tellus facilisi id. Sed id.
                      </p>
                      <span className="main_author highlight">Harry Potter</span>
                    </div>
                  </div>
                </div>
                <div className="reviews_slider-slide swiper-slide">
                  <div className="reviews_slider-slide_wrapper d-flex flex-column flex-md-row">
                    <span className="icon">
                      <svg
                        className="quotes-icon"
                        width="70"
                        height="55"
                        viewBox="0 0 70 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.5001 10.3039C15.6409 12.1466 13.2129 14.5424 11.3709 17.3385C9.90963 19.5567 8.84273 21.9881 8.20897 24.5326C8.04386 25.1955 7.90815 25.8661 7.80252 26.5426H24.0001C25.4588 26.5426 26.8577 27.0999 27.8892 28.0919C28.9206 29.0839 29.5001 30.4292 29.5001 31.8321V47.7005C29.5001 49.1034 28.9206 50.4488 27.8892 51.4408C26.8577 52.4327 25.4588 52.99 24.0001 52.99H7.50002C6.04132 52.99 4.64237 52.4327 3.61092 51.4408C2.57946 50.4488 2 49.1034 2 47.7005V30.113C2.00167 25.3244 3.23243 20.6102 5.58308 16.3887C7.93372 12.1673 11.3315 8.5692 15.475 5.91368L20.3976 2.73999L23.4226 7.13026L18.5001 10.3039ZM14.3973 4.22047C9.98248 7.05042 6.35275 10.8906 3.83778 15.4072C1.32203 19.9251 0.00179064 24.9766 0 30.1123V47.7005C0 49.6657 0.812566 51.5316 2.22816 52.893C3.64076 54.2515 5.5386 55 7.50002 55H24.0001C25.9615 55 27.8593 54.2515 29.2719 52.893C30.6875 51.5316 31.5001 49.6657 31.5001 47.7005V31.8321C31.5001 29.8669 30.6875 28.0011 29.2719 26.6397C27.8593 25.2811 25.9615 24.5326 24.0001 24.5326H10.2769C10.8661 22.3877 11.7955 20.335 13.0385 18.4481C14.7241 15.8894 16.9504 13.6904 19.5797 11.9959L26.2463 7.69777L20.9427 0.000488281L14.3997 4.21894C14.3989 4.21945 14.3981 4.21996 14.3973 4.22047Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M58.0797 11.9959C55.4504 13.6904 53.2241 15.8894 51.5385 18.448C50.2955 20.3349 49.3661 22.3876 48.7769 24.5326H62.5001C64.4615 24.5326 66.3593 25.2811 67.7719 26.6396C69.1875 28.001 70.0001 29.8668 70.0001 31.832V47.7005C70.0001 49.6657 69.1875 51.5315 67.7719 52.8929C66.3593 54.2514 64.4615 54.9999 62.5001 54.9999H46C44.0386 54.9999 42.1408 54.2514 40.7282 52.8929C39.3126 51.5315 38.5 49.6657 38.5 47.7005V30.113C38.5018 24.9772 39.822 19.925 42.3378 15.4071C44.8531 10.8898 48.4836 7.04915 52.8994 4.21907C52.8995 4.21901 52.8993 4.21914 52.8994 4.21907L59.4799 0L64.7389 7.70249L58.0797 11.9959ZM62.5001 26.5426C63.9588 26.5426 65.3577 27.0998 66.3892 28.0918C67.4206 29.0838 68.0001 30.4292 68.0001 31.832V47.7005C68.0001 49.1033 67.4206 50.4487 66.3892 51.4407C65.3577 52.4327 63.9588 52.9899 62.5001 52.9899H46C44.5413 52.9899 43.1424 52.4327 42.1109 51.4407C41.0795 50.4487 40.5 49.1033 40.5 47.7005V30.113C40.5017 25.3243 41.7324 20.6101 44.0831 16.3887C46.4337 12.1673 49.8315 8.56913 53.975 5.91361L58.9251 2.73993L61.9226 7.13019L57.0001 10.3039C54.1409 12.1465 51.7129 14.5424 49.8709 17.3384C48.4096 19.5566 47.3427 21.988 46.709 24.5326C46.5439 25.1955 46.4082 25.8661 46.3025 26.5426H62.5001Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="main d-flex flex-column justify-content-between">
                      <p className="main_review">
                        Interdum tincidunt condimentum vestibulum feugiat arcu, in. Maecenas sit sem
                        erat tellus pellentesque aliquet. Interdum tincidunt condimentum vestibulum
                        feugiat arcu, in. Maecenas sit sem erat tellus pellentesque aliquet.
                      </p>
                      <span className="main_author highlight">John Doe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviews_controls d-flex align-items-center">
              <span className="reviews_controls-control reviews_controls-control--prev">
                <i className="icon-arrow_left"></i>
              </span>
              <span className="reviews_controls-control reviews_controls-control--next">
                <i className="icon-arrow_right"></i>
              </span>
            </div>
          </div>
        </section>
        <Start />
      </main>
    </>
  );
};

export default About;