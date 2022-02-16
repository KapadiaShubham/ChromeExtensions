// (function () {
//     alert("Hello");
//   })();
(function () {
    function fnAddButtons() {
      var btn = document.createElement("input");
      btn.value = "Sheets";
      btn.id = "sheets-btn";
      btn.type = "submit";
      document.querySelector(".FPdoLc center").appendChild(btn);

      var btn2 = document.createElement("input");
      btn2.value = "Docs";
      btn2.id = "docs-btn2";
      btn2.type = "submit";
      document.querySelector(".FPdoLc center").appendChild(btn2);

      var btn3 = document.createElement("input");
      btn3.value = "Slides";
      btn3.id = "slides-btn3";
      btn3.type = "submit";
      document.querySelector(".FPdoLc center").appendChild(btn3);
    }
  
    function fnDefineEvent1() {
      document.getElementById("sheets-btn").addEventListener("click", function (event) {window.open('https://docs.google.com/spreadsheets/u/0/?tgif=d' , "_blank");});
    }
    function fnDefineEvent2() {
      document.getElementById("docs-btn").addEventListener("click", function (event) {window.open('https://docs.google.com/document/u/0/' , "_blank");});
    }
    function fnDefineEvent3() {
      document.getElementById("slides-btn").addEventListener("click", function (event) {window.open('https://docs.google.com/presentation/u/0/?tgif=d' , "_blank");});
    }


    
  
    fnAddButtons();
    fnDefineEvent1();fnDefineEvent2();fnDefineEvent3();
  })();