import React from "react";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
function Home() {
  return (
    <div className="homePage">
      <div className="hero">
        <div className="container">
          <div className="heroText">
            <h1 className="mainText">Qidiring, tanlang, ro‘yhatdan o‘ting!</h1>
            <p className="heroInfo">
              Talabalar uchun keng ko‘lamli yotoqxonalar platformasi
            </p>
            <form action="#">
              <input type="text" placeholder="Qidirish..." />
              <button>
                <CiSearch />
              </button>
            </form>
          </div>
          <div className="heroImg">
            <img src="/heroimg.png" alt="" />
          </div>
        </div>
      </div>

      <main>
        <section className="dormitorySection">
          <div className="container">
            <h2 className="sectionTitle">Platformadagi top yotoqxonalar</h2>
            <div className="dormitoryBlock">
              <div className="card">
                <div className="cardImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="cardText">
                  <h2>FDTU(TATUFF) DXSH 2</h2>
                  <h3>Farg'ona Davlat Texnika Universiteti</h3>
                  <p className="price">300.000 so'm/oy</p>
                  <p className="stars">⭐⭐⭐⭐⭐ 5.0 / 5</p>
                  <button className="bookBtn">
                    Band qilish{" "}
                    <span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="cardImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="cardText">
                  <h2>FDTU(TATUFF) DXSH 2</h2>
                  <h3>Farg'ona Davlat Texnika Universiteti</h3>
                  <p className="price">300.000 so'm/oy</p>
                  <p className="stars">⭐⭐⭐⭐⭐ 5.0 / 5</p>
                  <button className="bookBtn">
                    Band qilish{" "}
                    <span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="cardImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="cardText">
                  <h2>FDTU(TATUFF) DXSH 2</h2>
                  <h3>Farg'ona Davlat Texnika Universiteti</h3>
                  <p className="price">300.000 so'm/oy</p>
                  <p className="stars">⭐⭐⭐⭐⭐ 5.0 / 5</p>
                  <button className="bookBtn">
                    Band qilish{" "}
                    <span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="cardImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="cardText">
                  <h2>FDTU(TATUFF) DXSH 2</h2>
                  <h3>Farg'ona Davlat Texnika Universiteti</h3>
                  <p className="price">300.000 so'm/oy</p>
                  <p className="stars">⭐⭐⭐⭐⭐ 5.0 / 5</p>
                  <button className="bookBtn">
                    Band qilish{" "}
                    <span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="universitySection">
          <div className="container">
            <h2 className="sectionTitle">
              O'zbekistondagi barcha yotoqxonalar
            </h2>
            <div className="cityBlock">
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
              <div className="univerCard">
                <div className="cardImg">
                  <img src="/Toshkent.png" alt="" />
                </div>
                <div className="cardText">
                  <h2>Toshkent</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners">
          <div className="container">
            <h2 className="sectionTitle">Hamkor Oliygohlar</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              freeMode={true}
              freeModeMomentum={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="partner">
                  <img src="/ozmu.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
