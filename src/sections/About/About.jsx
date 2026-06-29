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
              <p>نؤمن في أكاديمية أندرلخت بشغف كرة القدم، ونثق بقدرة كل طفل على التألق، حيث نقدم برامج تدريبية مصممة بعناية لتنمية مهارات لاعبي كرة القدم من جميع المستويات، بدءًا من المبتدئين وصولاً إلى اللاعبين المتمرسين.</p>
              <p>يُشرف على تدريب لاعبينا فريق من المدربين المحترفين ذوي الخبرة الواسعة في تدريب الأطفال، ونحرص على غرس قيم مهمة مثل احترام الذات، والعمل الجماعي، والانضباط في نفوس لاعبينا.</p>
              <p>نسعى في أكاديمية أندرلخت إلى خلق بيئة إيجابية وممتعة تشجع على التعلم والنمو؛ إيماناً منا بأن كرة القدم أكثر من مجرد لعبة، بل هي أداة لبناء الشخصية وتطوير المهارات الحياتية.</p>
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