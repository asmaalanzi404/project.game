function check(input) {
  let thisname = ["ريف", "بدرية", "جواهر"];
  if (thisname.includes(input)) {
      location.href = "./game2.html";
  } else {
      alert("الاسم غير صحيح");
  }
}

let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function () {
  let nameInput = document.getElementById("nameInput").value;
  check(nameInput);
});

let btnhelp = document.getElementById("btnhelp");
btnhelp.addEventListener("click", function () {
  alert("مكون من ثلاث أحرف");
});