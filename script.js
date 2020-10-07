timeEle = document.querySelector("#time");
hexEle = document.querySelector("#hex");
questionEle = document.querySelector("#question");

let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone);

function time() {
  var date = new Date();
  times = Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: timezone,
  }).format(date);

  timeEle.innerHTML = times;
  //   var rgb = times.split(":");
  var rgb = times.split`:`.map((x) => +x);
  //   console.log(rgb);

  setContrast(rgb);
  times = times.replaceAll(":", "");

  hexColor = "#" + times;
  //   console.log(hexColor);
  hexEle.innerHTML = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function setContrast(rgb) {
  //   console.log(typeof rgb[2]);
  // console.log(parseInt(rgb[0], 16));
  // console.log(parseInt(rgb[1], 16));
  // console.log(parseInt(rgb[2], 16));
  const brightness = Math.round(
    (parseInt(rgb[0] * 299) + parseInt(rgb[1] * 587) + parseInt(rgb[2]) * 114) /
      1000
  );
  // console.log(brightness);
  const textColour = brightness > 125 ? "black" : "white";
  //   console.log(textColour);
  timeEle.style.color = textColour;
  hexEle.style.color = textColour;
  questionEle.style.color = textColour;
}

var t = setInterval(time, 1000);
