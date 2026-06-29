import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import imageCompression from "browser-image-compression";

import { supabase } from "../../utils/supabaseClient";
import { ACADEMY_ID } from "../../config/academy";
import "./Hero.css";

const positionsList = [
  "حارس مرمى (GK)",
  "قلب دفاع (CB)",
  "ظهير أيمن (RB)",
  "ظهير أيسر (LB)",
  "وسط مدافع (CDM)",
  "وسط ملعب (CM)",
  "وسط مهاجم (AM)",
  "جناح أيمن (RW/RM)",
  "جناح أيسر (LW/LM)",
  "مهاجم متأخر (SS)",
  "رأس حربة (ST)",
];

const registrationFormTemplate = `
<div class="swal-player-form">

  <div class="swal-image-wrapper">
    <div id="imagePicker" class="swal-image-picker">
      <img
        id="preview"
        class="swal-preview"
        style="display:none"
      />

      <div id="placeholderIcon" class="swal-placeholder">
        👤
      </div>

      <div class="swal-plus">+</div>
    </div>

    <input
      type="file"
      id="fileInput"
      accept="image/*"
      hidden
    />

    <p class="swal-hint">
      اضغط لإضافة صورة اللاعب
    </p>
  </div>

<div class="swal-grid">

  <input
    id="player-name"
    placeholder="اسم اللاعب *"
  />

  <input
    id="birth-date"
    type="text"
    placeholder="تاريخ الميلاد *"
    onfocus="(this.type='date')"
    onblur="(this.value ? this.type='date' : this.type='text')"
  />

  <select id="player-position">
    <option value="">اختر المركز *</option>
    ${positionsList
      .map(
        (p) =>
          `<option value="${p}">${p}</option>`
      )
      .join("")}
  </select>

  <select id="player-branch">
    <option value="">اختر الفرع *</option>
    <option value="وابور المياة">وابور المياة</option>
    <option value="سموحة">سموحة</option>
    <option value="فرق الدورى">فرق الدورى</option>
  </select>

  <div class="swal-phone-group" style="display:flex;gap:8px;direction:ltr;">
    <select id="player-country" class="form-select" style="width:110px;font-size:13px;border:1px solid #ccc;border-radius:6px;padding:0 4px;background:#fff;">
      <option value="+20" selected>🇪🇬 +20</option>
      <option value="+966">🇸🇦 +966</option>
      <option value="+971">🇦🇪 +971</option>
      <option value="+965">🇰🇼 +965</option>
      <option value="+973">🇧🇭 +973</option>
      <option value="+974">🇶🇦 +974</option>
      <option value="+968">🇴🇲 +968</option>
      <option value="+962">🇯🇴 +962</option>
      <option value="+961">🇱🇧 +961</option>
      <option value="+964">🇮🇶 +964</option>
      <option value="+970">🇵🇸 +970</option>
      <option value="+218">🇱🇾 +218</option>
      <option value="+216">🇹🇳 +216</option>
      <option value="+213">🇩🇿 +213</option>
      <option value="+212">🇲🇦 +212</option>
      <option value="+249">🇸🇩 +249</option>
      <option value="+967">🇾🇪 +967</option>
    </select>

    <input
      id="parent-phone"
      placeholder="رقم الهاتف *"
      type="tel"
      style="flex:1;margin:0;text-align:right;"
    />
  </div>

  <textarea
    id="medical-notes"
    placeholder="هل يوجد مشاكل صحية؟ (اختياري)"
    rows="3"
  ></textarea>

  <div class="swal-declaration">
    <p>
      <strong>إقرار ولي الأمر:</strong><br>
      يقر ولي الأمر بأن نجله لائق صحيًا ولا يعاني من أي ظروف أو مشكلات صحية تمنعه من ممارسة النشاط الرياضي، وفي حالة وجود أي مشكلة صحية فقد تم توضيحها في خانة الملاحظات الطبية أعلاه.
    </p>
  </div>

</div>
`;

const compressImage = async (file) => {
  try {
    const compressed = await imageCompression(file, {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 1000,
      useWebWorker: true,
      fileType: "image/jpeg",
      initialQuality: 0.7,
    });

    return compressed;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "خطأ في الصورة",
      text: error.message,
      scrollbarPadding: false,
    });

    return null;
  }
};

export default function HeroSection() {
  const navigate = useNavigate();
  const [playerCode, setPlayerCode] = useState("");

  const handleSearch = async () => {
    const trimmedCode = playerCode.trim();
    if (!trimmedCode) {
      Swal.fire({
        icon: "warning",
        title: "أدخل كود اللاعب",
        scrollbarPadding: false,
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("players")
        .select("new_id, player_code")
        .eq("academy_id", ACADEMY_ID)
        .eq("player_code", trimmedCode)
        .single();

      if (error || !data) {
        Swal.fire({
          icon: "error",
          title: "اللاعب غير موجود",
          text: "تأكد من كود اللاعب",
          scrollbarPadding: false,
        });
        return;
      }

      navigate(`/report/${trimmedCode}`);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "تعذر البحث عن اللاعب",
        scrollbarPadding: false,
      });
    }
  };

  return (
    <section className="hero d-flex align-items-center">
      <div className="container text-white text-center">
        <h1 className="fw-bold mb-3">اصنع بطل كرة القدم القادم</h1>
        <p className="mb-4">تدريب احترافي من 3 إلى 16 سنة بإشراف مدربين محترفين</p>
        
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-outline-light px-4"
            onClick={async () => {
              let imageFile = null;

              const handleImageClick = () =>
                document.getElementById("fileInput")?.click();

              const handleImageChange = async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                const compressed = await compressImage(file);
                if (!compressed) return;

                imageFile = compressed;
                const reader = new FileReader();

                reader.onload = (ev) => {
                  const preview = document.getElementById("preview");
                  const placeholder = document.getElementById("placeholderIcon");

                  preview.src = ev.target.result;
                  preview.style.display = "block";
                  placeholder.style.display = "none";
                };

                reader.readAsDataURL(imageFile);
              };

              const result = await Swal.fire({
                // title: "طلب انضمام لاعب",
                html: registrationFormTemplate,
                showCancelButton: true,
                confirmButtonText: "إرسال الطلب",
                cancelButtonText: "إلغاء",
                scrollbarPadding: false,

                didOpen: () => {
                  document.getElementById("imagePicker")?.addEventListener("click", handleImageClick);
                  document.getElementById("fileInput")?.addEventListener("change", handleImageChange);  
                  
                  const birthDateInput = document.getElementById("birth-date");
                  if (birthDateInput) {
                    const today = new Date();
                    const maxYear = today.getFullYear() - 2;
                    const maxDate = `${maxYear}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
                    const minYear = today.getFullYear() - 22;
                    const minDate = `${minYear}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
                    
                    birthDateInput.setAttribute("max", maxDate); 
                    birthDateInput.setAttribute("min", minDate); 
                  }
                },

                willClose: () => {
                  document.getElementById("imagePicker")?.removeEventListener("click", handleImageClick);
                  document.getElementById("fileInput")?.removeEventListener("change", handleImageChange);
                },

                preConfirm: () => {
                  if (!imageFile) {
                    const picker = document.getElementById("imagePicker");
                    picker.style.border = "2px solid #dc3545";
                    setTimeout(() => {
                      picker.style.border = "";
                    }, 2000);
                    return Swal.showValidationMessage("يرجى إضافة صورة اللاعب");
                  }


                  const playerName = document.getElementById("player-name")?.value.trim();
                  const birthDate = document.getElementById("birth-date")?.value;
                  const position = document.getElementById("player-position")?.value;
                  const branch = document.getElementById("player-branch")?.value;  
                  const countryCode = document.getElementById("player-country")?.value || "";
                  let phone = document.getElementById("parent-phone")?.value.trim();
                  const medicalNotes = document.getElementById("medical-notes")?.value;

                  if (!playerName || !birthDate || !position || !branch || !phone) {
                    return Swal.showValidationMessage("أكمل الحقول المطلوبة");
                  }

                  phone = phone.replace(/\D/g, "");
                  if (!phone) {
                    return Swal.showValidationMessage("يرجى إدخال رقم هاتف صحيح.");
                  }

                  if (phone.startsWith("0")) {
                    phone = phone.substring(1);
                  }

                  phone = `${countryCode}${phone}`;

                  return {
                    playerName,
                    birthDate,
                    position,
                    branch,
                    phone,
                    medicalNotes,
                  };
                },
              });

              if (!result.isConfirmed) return;

              try {
                Swal.fire({
                  title: "جاري إرسال الطلب...",
                  allowOutsideClick: false,
                  didOpen: () => Swal.showLoading(),
                });

                let imageUrl = null;

                if (imageFile) {
                  const filePath = `requests/${Date.now()}.jpg`;
                  const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, imageFile);
                  if (uploadError) throw uploadError;

                  const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
                  imageUrl = data.publicUrl;
                }

                const { error } = await supabase
                  .from("registration_requests")
                  .insert([
                    {
                      academy_id: ACADEMY_ID,
                      player_name: result.value.playerName,
                      birth_date: result.value.birthDate,
                      position: result.value.position,
                      branch: result.value.branch,
                      parent_phone: result.value.phone,
                      medical_notes: result.value.medicalNotes,
                      player_image: imageUrl,
                      status: "pending",
                    },
                  ]);

                if (error) throw error;

                Swal.fire({
                  icon: "success",
                  title: "تم إرسال الطلب بنجاح",
                  text: "سيتم مراجعة البيانات والتواصل معكم قريباً",
                });
              } catch (err) {
                Swal.fire({
                  icon: "error",
                  title: "حدث خطأ",
                  text: err.message,
                });
              }
            }}
          >
            تسجيل لاعب جديد
          </button>
        </div>

        <div className="player-search-box mt-4">
          <h5 className="mb-3">ابحث عن تقرير اللاعب</h5>
          <div className="d-flex justify-content-center align-items-center gap-2 w-100 mx-auto" style={{ maxWidth: "500px" }}>
            <input
              type="text"
              className="form-control search-input flex-grow-1"
              placeholder="أدخل كود اللاعب"
              value={playerCode}
              onChange={(e) => setPlayerCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="btn btn-primary btn-search-custom flex-shrink-0" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}