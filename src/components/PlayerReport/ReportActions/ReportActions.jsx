import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faShareNodes, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import "./ReportActions.css";

const ReportActions = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "تقرير اللاعب",
          text: "تقرير تقييم اللاعب",
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      showSuccessAlert();
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  const handleWhatsappShare = () => {
    const url = window.location.href;
    const text = `⚽ تقرير اللاعب\n\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showSuccessAlert();
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "تم نسخ الرابط بنجاح",
      timer: 1500,
      showConfirmButton: false,
      scrollbarPadding: false,
    });
  };

  return (
    <div className="report-actions">
      <button className="action-btn home-btn" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} />
        <span>الرئيسية</span>
      </button>

      <button className="action-btn whatsapp-btn" onClick={handleWhatsappShare}>
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>واتساب</span>
      </button>

      <button className="action-btn share-btn" onClick={handleShare}>
        <FontAwesomeIcon icon={faShareNodes} />
        <span>مشاركة</span>
      </button>

      <button className="action-btn copy-btn" onClick={copyLink}>
        <FontAwesomeIcon icon={faCopy} />
        <span>نسخ الرابط</span>
      </button>
    </div>
  );
};

export default ReportActions;