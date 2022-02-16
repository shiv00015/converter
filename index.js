

document.getElementById("convertor").onclick = function () {
  let num = document.getElementById("idnum").value;
  let fstId = document.getElementById("deid1");
  let sndId = document.getElementById("deid2");
  let result = document.getElementById("result").childNodes[1];

  let fstValue = fstId.value;
  let sndValue = sndId.value;
  if (num == "") {
    alert("Please Enter number");
  } else if (fstValue == "1") {
    if (sndValue == fstValue) {
      result.innerHTML = num;
    }
    if (sndValue == "2") {
      let ans = parseInt(num, 16);
      result.innerHTML = ans;
    } else if (sndValue == "3") {
      let ans = parseInt(num, 16).toString(8);
      result.innerHTML = ans;
    } else if (sndValue == "4") {
      let ans = parseInt(num, 16).toString(2);
      result.innerHTML = ans;
    }
  } else if (fstValue == "2") {
    if (sndValue == fstValue) {
      result.innerHTML = num;
    }
    if (sndValue == "1") {
      let ans = parseInt(num).toString(16);
      result.innerHTML = ans;
    } else if (sndValue == "3") {
      let ans = parseInt(num).toString(8);
      result.innerHTML = ans;
    } else if (sndValue == "4") {
      let ans = parseInt(num).toString(2);
      result.innerHTML = ans;
    }
  } else if (fstValue == "3") {
    if (sndValue == fstValue) {
      console.log(num);
    }
    if (sndValue == "2") {
      let ans = parseInt(num, 8);
      result.innerHTML = ans;
    } else if (sndValue == "1") {
      let ans = parseInt(num, 8).toString(16);
      result.innerHTML = ans;
    } else if (sndValue == "4") {
      let ans = parseInt(num, 8).toString(2);
      result.innerHTML = ans;
    }
  } else if (fstValue == "4") {
    if (sndValue == fstValue) {
      inner.innerHTML = num;
    }
    if (sndValue == "1") {
      let ans = parseInt(num, 10).toString(16);
      result.innerHTML = ans;
    } else if (sndValue == "3") {
      let ans = parseInt(num, 10).toString(8);
      result.innerHTML = ans;
    } else if (sndValue == "2") {
      let ans = parseInt(num, 2);
      result.innerHTML = ans;
    }
  }
};
