import React from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaUniversity } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
function Home() {
  const viloyatlar = [
    { label: "Toshkent", id: 1 },
    { label: "Samarqand", id: 2 },
    { label: "Buxoro", id: 3 },
    { label: "Farg'ona", id: 4 },
    { label: "Andijon", id: 5 },
    { label: "Namangan", id: 6 },
    { label: "Jizzax", id: 7 },
    { label: "Qashqadaryo", id: 8 },
    { label: "Surxondaryo", id: 9 },
    { label: "Xorazm", id: 10 },
    { label: "Navoiy", id: 11 },
    { label: "Sirdaryo", id: 12 },
  ];
  return (
    <div className="homePage">
      <div className="hero">
        <div className="container">
          <div className="heroText">
            <div className="mainText">
              <h1 className="heroMainText">
                Talabalar Turar Joyiga joylashish endi muammo emas!{" "}
              </h1>
              <h2 className="subMainText">
                Tanlang, band qiling va joylashing!
              </h2>
            </div>
          </div>
          <div className="heroFilter">
            <div className="filterItem">
              <Autocomplete
                disablePortal
                options={viloyatlar}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Viloyat yoki shaharlar" />
                )}
              />
            </div>
            <div className="filterItem">
              <Autocomplete
                disablePortal
                options={viloyatlar}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Oliy ta'lim muassasasi" />
                )}
              />
            </div>
            <div className="filterItem">
              <input
                className="searchInput"
                type="text"
                placeholder="Yotoqxona nomi bo'yicha"
              />
            </div>
            <div className="filterItem">
              <button className="searchBtn">Qidirish</button>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="dormitorySection">
          <div className="container">
            <h2 className="sectionTitle">Top yotoqxonalar</h2>
            <div className="dormitoriesBlock">
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recentlyAddedSection">
          <div className="container">
            <h2 className="sectionTitle">Oxirgi qo'shilgan yotoqxonalar</h2>
            <div className="dormitoriesBlock">
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
              <div className="dormitoryBox">
                <div className="dormitoryImg">
                  <img src="/dormitory.jpeg" alt="" />
                </div>
                <div className="dormitoryText">
                  <div className="row">
                    <h3>DXSH-TTJ 2</h3>
                  </div>
                  <div className="row">
                    <FaUniversity />
                    <p>Farg'ona Davlat Texnika Universiteti</p>
                  </div>
                  <div className="row location">
                    <CiLocationOn />
                    <p>Farg'ona sh, Mustaqillik 185</p>
                  </div>
                  <div className="row boxMainInfo">
                    <div className="rowItem">
                      <p>Bo'sh joylar</p>
                      <p>20+</p>
                    </div>
                    <div className="rowItem">
                      <p>300 000 so'm / oy</p>
                    </div>
                  </div>
                  <div className="boxBtn">
                    <button>Ko'proq ko'rish</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mapSection">
          <div className="container">
            <h2 className="sectionTitle">Joy Bor Xaritada</h2>
            <div className="mapBlock">
              <img src="/map.webp" alt="" />
            </div>
          </div>
        </section>
        <section className="universitets">
          <div className="container">
            <h2 className="sectionTitle">Hamkor oliy ta'lim muassasalari</h2>
            <div className="universityBlock">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                speed={10000} // sekinroq aylanish uchun sozlang
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="universityLogo">
                    <img src="/tuit.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="contactSection">
          <div className="container">
            <h2 className="sectionTitle">Bog'lanish</h2>
            <div className="contactme">
              <form className="contactForm" action="#">
                <div className="row">
                  <div className="rowItem">
                    <label htmlFor="name">Ism</label>
                    <input required type="text" placeholder="Ism" />
                  </div>
                  <div className="rowItem">
                    <label htmlFor="fam">Familiya</label>
                    <input required type="text" placeholder="Familiya" />
                  </div>
                </div>
                <div className="row">
                  <div className="rowItem">
                    <label htmlFor="name">Email</label>
                    <input required type="text" placeholder="Email" />
                  </div>
                  <div className="rowItem">
                    <label htmlFor="name">Telefon raqam</label>
                    <input required type="text" placeholder="Telefon raqami" />
                  </div>
                </div>
                <div className="row">
                  <div className="rowItem">
                    <label htmlFor="message">Fikr yoki savol</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Fikr yoki savol"
                    ></textarea>
                  </div>
                </div>
                <div className="row buttonRow">
                  <button className="sendBtn">Yuborish</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
