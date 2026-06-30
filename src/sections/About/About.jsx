import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUserGraduate,
  faShieldAlt,
  faFutbol
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <section className="About py-5">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="wow fadeInRight" data-wow-duration="2s" data-wow-delay=".2s">
              <h3 className="mb-4">استثمر فى مستقبل طفلك</h3>
              <img
                src="/assets/img/img-academy.webp"
                width="500"
                height="300"
                loading="lazy"
                alt="kids football"
                className="img-fluid rounded-4"
              />
            </Col>
            <Col md={6} sm={12} className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".2s">
              <h3 className="mb-3">حول أكاديمية أندرلخت</h3>

              <p>
              تُعد أكاديمية أندرلخت من الأكاديميات التي تهدف إلى إعداد اللاعبين وفق أحدث أساليب التدريب، مع التركيز على تطوير المهارات الفنية والبدنية والذهنية، وبناء شخصية اللاعب داخل وخارج الملعب في بيئة رياضية احترافية وآمنة.
              </p>

              <p>
              الأكاديمية معتمدة من الاتحاد المصري لكرة القدم، وتشارك رسميًا في البطولات التي ينظمها الاتحاد المصري لكرة القدم، مما يمنح اللاعبين فرصة المنافسة واكتساب الخبرات من خلال المشاركة في المنافسات الرسمية.
              </p>

              <p>
              كما تعمل الأكاديمية وفق منهج مستوحى من فلسفة نادي أندرلخت البلجيكي، وتحت إشراف نخبة من نجوم كرة القدم المصرية، من بينهم الكابتن محمد يوسف، والكابتن هادي خشبة، والكابتن أحمد حسن، إلى جانب فريق من المدربين المؤهلين، بهدف تقديم تجربة تدريبية متكاملة تساعد اللاعبين على التطور والوصول إلى أعلى المستويات.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="features text-center py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col md={4} className="wow fadeInRight" data-wow-duration="2s" data-wow-delay=".2s">
              <div className="feature-card p-4 shadow-sm bg-white">
                <FontAwesomeIcon icon={faUserGraduate} size="3x" className="text-primary mb-3" />
                <h3>مدربين محترفين</h3>       
                <p>خبرة في تدريب الأطفال</p>
              </div>
            </Col>
                        <Col md={4} className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
              <div className="feature-card p-4 shadow-sm bg-white">
                <FontAwesomeIcon icon={faShieldAlt} size="3x" className="text-success mb-3"/>
                <h3>بيئة آمنة</h3>
                <p>سلامة الأطفال أولويتنا</p>
              </div>
            </Col>
            <Col md={4} className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".2s">
              <div className="feature-card p-4 shadow-sm bg-white">
                <FontAwesomeIcon icon={faFutbol} size="3x" className="text-warning mb-3"/>
                <h3>تدريب حديث</h3>
                <p>أحدث طرق التدريب</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default About;