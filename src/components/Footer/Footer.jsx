import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faMapMarkerAlt,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      className="footer-section py-5 bg-white border-top wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay=".2s"
    >
      <Container className="text-end">
        <Row className="g-5">
          <Col lg={4}>
            <h3 className="fw-bold mb-4">أكاديمية أندرلخت</h3>
            <div className="contact-info text-muted small">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="ms-2" />
                  جمهورية مصر العربية - الاسكندرية
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className="ms-2" />
                الشاطبى - سموحة
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="ms-2" />
                01222996826
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="ms-2" />
                anderlachtacadmy@gmail.com
              </p>
            </div>
          </Col>
          
          <Col lg={3}>
            <ul className="list-unstyled footer-links p-0">
              <li className="mb-3"><a href="#about">حول</a></li>
              <li className="mb-3"><a href="#pricing">خطة الدفع</a></li>
              <li className="mb-3"><a href="#player">النجوم</a></li>
              <li className="mb-3"><a href="#programs">برامجنا</a></li>
              <li className="mb-3"><a href="#joinUs">انضم لنا</a></li>
            </ul>
          </Col>
          
          <Col lg={5}>
            <h2 className="fw-bold mb-4">
              نعلمك<br />بأخبارنا
            </h2>
            <div className="newsletter-form position-relative">
              <input
                type="email"
                className="form-control border-0 border-bottom rounded-0 py-3 text-end"
                placeholder="name@email.com"
              />
              <button className="btn btn-primary rounded-pill px-4 position-absolute start-0 top-50 translate-middle-y join-btn">
                اشتراك
              </button>
            </div>
          </Col>
        </Row>
        
        <hr className="my-5 opacity-10" />
        
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-2">
              <a href="https://www.facebook.com/share/1D7yM2CZMt/" className="rounded-circle border p-2 text-dark"><FontAwesomeIcon icon={faFacebookF} /></a>
              {/* <a href="#!" className="rounded-circle border p-2 text-dark"><FontAwesomeIcon icon={faYoutube} /></a> */}
              {/* <a href="#!" className="rounded-circle border p-2 text-dark"><FontAwesomeIcon icon={faInstagram} /></a> */}
              <a href="https://wa.me/201222996826" className="rounded-circle border p-2 text-dark"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-muted small mb-0">كل الحقوق محفوظة لاكاديمية اندرلخت الاسكندرية © 2026</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}