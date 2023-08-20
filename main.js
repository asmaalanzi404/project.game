function check(nameInput) {
  let thisname = ["سيف", "بدرية", "ياسر"];

  if (thisname.includes(nameInput)) {
    if (nameInput === "سيف") {
      location.href = "./game2.html";
    } else if (nameInput === "بدرية") {
      location.href = "./game3.html";
    } else if (nameInput === "ياسر") {
      location.href = "./game4.html";
    }
  } else {
    alert("الاسم غير صحيح");
  }
}

let BtnID = document.getElementById("btnhelp1") || document.getElementById('btnhelp2') || document.getElementById('btnhelp3')
let choosID = BtnID.id

if(choosID === 'btnhelp1'){
  btnhelp1.addEventListener("click", function () {
    alert("مكون من ثلاث أحرف");
  });
}
else if (choosID === 'btnhelp2') {
  btnhelp2.addEventListener("click", function () {
    alert("مكون من خمس احرف");
  });
  
} 
else if (choosID === 'btnhelp3'){
  btnhelp3.addEventListener("click", function () {
    alert("مكون من اربع أحرف");
  })
}
  
let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function () {
  let nameInput = document.getElementById("nameInput").value;
  check(nameInput);
});

// let btnhelp = document.getElementById("btnhelp");
// btnhelp.addEventListener("click", function () {
//   if(thisname[0]){
//   alert("مكون من ثلاث أحرف");
//   }
// });
// let btnhelp2 = document.getElementById("btnhelp2");
// btnhelp.addEventListener("click", function () {
//   alert("مكون من خمس احرف");
// });
// let btnhelp3 = document.getElementById("btnhelp3");
// btnhelp.addEventListener("click", function () {
//   alert("مكون من اربع أحرف");
// });
