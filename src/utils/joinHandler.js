import Swal from "sweetalert2";

export const handleJoin = (data = {}) => {
  const {
    plan = "غير محدد",
    type = "join"
  } = data;

  Swal.fire({
    title: type === "trial" ? "احجز تجربة مجانية ⚽" : "انضم للأكاديمية ⚽",
    
    customClass: {
      popup: 'swal2-rtl'
    },

    html: `
      <input type="text" id="swal-name" class="swal2-input" placeholder="اسم اللاعب">
      <input type="number" id="swal-age" class="swal2-input" placeholder="العمر">
      <input type="tel" id="swal-phone" class="swal2-input" placeholder="رقم ولي الأمر">
    `,

    confirmButtonText: "إرسال",
    focusConfirm: false,

    preConfirm: () => {
      const name = document.getElementById("swal-name").value.trim();
      const age = document.getElementById("swal-age").value.trim();
      const phone = document.getElementById("swal-phone").value.trim();

      if (!name || !age || !phone) {
        Swal.showValidationMessage("من فضلك املأ كل البيانات");
        return false;
      }

      return { name, age, phone };
    }
  }).then((result) => {
    if (!result.isConfirmed) return;

    const { name, age, phone } = result.value;
    const academyPhone = "201222996826";

    const message =
      `طلب جديد ⚽%0A%0A` +
      `* الاسم:* ${name}%0A` +
      `* العمر:* ${age}%0A` +
      `* الرقم:* ${phone}%0A` +
      `* الخطة:* ${plan}%0A%0A`;

    window.open(
      `https://wa.me/${academyPhone}?text=${message}`,
      "_blank"
    );
  });
};