import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Pricing.css";
import { handleJoin } from "../../utils/joinHandler.js";

const Pricing = () => {
  const plans = [
    {
      title: "الدفع الشهري",
      price: "400",
      duration: "شهرياً",
      desc: "تقسيم تكلفة البرنامج إلى أقساط شهرية ميسرة.",
      animation: "fadeInRight",
      plan: "شهري",
    },
    {
      title: "الدفع ربع سنوى",
      price: "1200",
      duration: "كل 3 شهور",
      desc: "مناسبة للعائلات التي تفضل دفع مبالغ أكبر كل 3 أشهر.",
      animation: "fadeInUp",
      plan: "ربع سنوى",
    },
    {
      title: "النصف سنوي",
      price: "2400",
      duration: "كل 6 شهور",
      desc: "مثالية للعائلات التي تفضل دفع مبالغ أكبر كل 6 أشهر.",
      animation: "fadeInLeft",
      plan: "نصف سنوى",
    },
  ];

  return (
    <>
      {/* <section className="pricing-section" id="pricing">
        <Container fluid className="bg-light-custom p-4 p-md-5 rounded-5">
          <Row className="mb-4 align-items-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
            <Col lg={6}>
              <h2 className="fw-bold">خطة الدفع</h2>
              <p className="text-muted small">نُقدم خطط مرنة تناسب جميع العائلات ونُؤمن بإتاحة الفرصة للجميع.</p>
            </Col>
            <Col lg={6}>
              <h2 className="fw-bold mb-3">لا تنتظر أكثر، ابدأ رحلة ابنك نحو النجوم!</h2>
            </Col>
          </Row>
          
          <Row className="g-3">
            {plans.map((item, index) => (
              <Col key={index} lg={4} md={6} sm={12} className={`wow ${item.animation}`} data-wow-duration="2s" data-wow-delay=".2s">
                <div className="pricing-card p-4 h-100 d-flex flex-column">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-bold">{item.title}</h5>
                    <div className="price-box text-center">
                      <span className="price"> {item.price}</span>
                      <span className="currency d-block"> جنية</span>
                      <p className="duration"> {item.duration}</p>
                    </div>
                  </div>
                  <p className="card-info text-muted">{item.desc}</p>
                  <Button 
                    className="btn btn-primary-custom w-50 mx-auto mt-auto"
                    onClick={() => handleJoin(item.plan)}
                  > 
                    اشترك
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      <section className="quote-section py-5 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
        <Container>
          <h2 className="display-5 fw-bold">لا يوجد مستحيل في كرة القدم، فقط عليك أن تؤمن بنفسك.</h2>
        </Container>
      </section>
    </>
  );
};

export default Pricing;