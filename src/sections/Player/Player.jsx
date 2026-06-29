import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Player.css";

import "swiper/css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Players() {
  const swiperRef = useRef(null);

  const players = [
    { name: "فهد عبد العزيز", role: "لاعب وسط", img: "/assets/img/little-boy-playing-soccer-sport-kid-child-with-ball_792372-354.webp" },
    { name: "نبيل عمار", role: "مهاجم", img: "/assets/img/young-football-player-white-uniform-posing-football-field-school-sports-club_216821-2617.webp" },
    { name: "فارس محمود", role: "لاعب وسط", img: "/assets/img/portrait-young-boy-play-grass-football-field-stadium-match-cold-weather_709963-241.webp" },
    { name: "خالد محمد", role: "مدافع", img: "/assets/img/football-player-playing-field_1303-24539.webp" },
    { name: "محمد علي", role: "حارس مرمى", img: "/assets/img/football-trainer-teaching-his-pupils_23-2149708014.webp" },
    { name: "أحمد صبحي", role: "مدافع", img: "/assets/img/pexels-photo-10347859.webp" },
    { name: "محمود حسن", role: "مهاجم", img: "/assets/img/soccer-player-training-with-ball_141188-5657.webp" },
    { name: "عبدالرحمن محمد", role: "لاعب وسط", img: "/assets/img/full-shot-child-football-field_23-2149270917.webp" },
  ];

  return (
    <section id="player" className="academy-stars py-5 wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
      <Container>
        <Row className="mb-4 align-items-center">
          <Col className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold">نجوم الأكاديمية</h3>
            <div className="d-flex gap-2">
              <Button
                variant="outline-primary"
                className="rounded-circle slider-btn"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <Button
                variant="primary"
                className="rounded-circle slider-btn"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </div>
          </Col>
        </Row>
        
        <Swiper
          key="ar-stars-swiper"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {players.map((player, index) => (
            <SwiperSlide key={index}>
              <div className="player-card text-center p-3">
                <img src={player.img} alt={player.name} className="img-fluid mb-3" />
                <h5 className="fw-bold mb-1">{player.name}</h5>
                <p className="text-muted small">{player.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}