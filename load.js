document.addEventListener(
  "DOMContentLoaded",
  function () {
    var menudo = document.querySelector(".menu");
    var trangthaimenudo = "duoi100";
    var chungtoi = document.querySelector(".chungtoi");
    var vtQc = chungtoi.offsetTop;
    var trangthaiQc = "duoi";

    var kchienthi = 600;
    var chancuoi = vtQc + kchienthi;

    // Hieu ung load bang JS
    var phantuload = document.querySelector(".s3");
    var trangthais3 = "duoi";
    var vitris3 = phantuload.offsetTop + 100;

    window.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset > 100) {
          // >100px thì
          if (trangthaimenudo == "duoi100") {
            trangthaimenudo = "tren100";
            menudo.classList.add("menuden");
          }
        } 
        else if (window.pageYOffset < 100) {
          if (trangthaimenudo == "tren100") {
            trangthaimenudo = "duoi100";
            menudo.classList.remove("menuden");
          }
        }

        // Xu li Qc hồng
        if (window.pageYOffset > vtQc && window.pageYOffset < chancuoi) {
          if (trangthaiQc == "duoi") {
            trangthaiQc = "danghienthi";
            chungtoi.classList.add("Qcdunglai");
          }
        } 
        else if (window.pageYOffset < vtQc || window.pageYOffset > chancuoi) {
          if (trangthaiQc == "danghienthi") {
            trangthaiQc = "duoi";
            chungtoi.classList.remove("Qcdunglai");
          }
        }

        // Load
        if (window.pageYOffset > vitris3) {
          if (trangthais3 == "duoi") {
            trangthais3 = "tren";
            phantuload.classList.add("dilen");
          }
        }

      },false);
  },false);

// window.pageYOffset : vị trí cuộn chuột
// tendoituong.offsetTop: Vị trí của phần tử trong trang web

// Bai 66
