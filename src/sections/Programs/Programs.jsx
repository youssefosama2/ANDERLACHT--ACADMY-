import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Programs.css";
import { handleJoin } from "../../utils/joinHandler.js";

const Programs = () => {
  const programs = [
    {
      title: "تدريبات اللياقة البدنية",
      desc: "تشرف على برامجنا المتخصصة:",
      image: "/assets/img/img-academy4.jpeg",
      btn: "سجل طفلك الآن",
      reverse: false,
      animation: "fadeInLeft",
      points: [
        "طاقم من مدربي اللياقة البدنية المؤهلين ذوي الخبرة الواسعة.",
        "نستخدم أحدث الأساليب العلمية والتدريبية لضمان فعالية برامجنا.",
        "نقدم برامج متنوعة تناسب جميع الفئات العمرية ومستويات اللياقة.",
        "نؤمن بأهمية التدرج في التدريب ونحرص على سلامة وأمان لاعبينا.",
        "نظام غذائي صحي متوازن يُكمل برامج اللياقة البدنية."
      ],
    },
    {
      title: "التدريبات الذهنية والفنية",
      desc: "تهدف برامجنا الى:",
      image: "/assets/img/img-academy3.webp",
      btn: "انضم الآن",
      reverse: true,
      animation: "fadeInRight",
      points: [
        "تعزيز صحة القلب والأوعية الدموية وتحسين وظائف الجهاز التنفسي.",
        "تقوية العضلات والمفاصل وتحسين اللياقة البدنية.",
        "الحفاظ على وزن صحي ومكافحة السمنة.",
        "تعزيز صحة العظام وتقليل خطر الإصابة بهشاشة العظام.",
        "تحسين المزاج وتقليل التوتر وتعزيز الثقة بالنفس."
      ],
    },
    {
      title: "تدريبات الاوزان والانضباط",
      desc: "مع برامج اللياقة البدنية ، ستتمكن من:",
      image: "/assets/img/img-academy2.webp",
      btn: "استثمر فى مستقبل طفلك",
      reverse: false,
      animation: "fadeInLeft",
      points: [
        "تحقيق أقصى قدر من إمكانياتك الكروية.",
        "الحصول على جسم صحي وقوي.",
        "تعزيز ثقتك بنفسك وتحسين مزاجك.",
        "العيش بأسلوب حياة أكثر نشاطا وصحة.",
        "انضم إلينا اليوم وابدأ رحلتك نحو اللياقة البدنية والإنجاز."
      ],
    },
  ];

  return (
    <section className="programs py-5" id="programs">
      <Container-fluid>
        {programs.map((item, index) => (
          <Row
            key={index}
            className={`align-items-center py-5 g-5 ${
              item.reverse
                ? "flex-column-reverse flex-lg-row-reverse"
                : "flex-column-reverse flex-lg-row"
            } wow ${item.animation}`} 
            data-wow-duration="2s" 
            data-wow-delay=".2s"
          >
            <Col lg={6} md={12}>
              <div className="program-content text-end">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <ul>
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <Button
                  className="program-btn"
                  onClick={() =>
                    handleJoin({
                      type: "info",
                      plan: "استفسار",
                    })
                  }
                >
                  {item.btn}
                </Button>
              </div>
            </Col>
            
            <Col lg={6} md={12}>
              <div className="program-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        ))}
      </Container-fluid>
    </section>
  );
};

export default Programs;