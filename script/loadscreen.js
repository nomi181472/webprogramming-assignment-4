if (!localStorage.getItem("LoadingDone")) {
  window.onbeforeunload = function () {
    this.localStorage.setItem("LoadingDone", 1);
  };
}

setInterval(function () {
  if (localStorage.getItem("LoadingDone")) {
    changeBackground();
    this.localStorage.setItem("LoadingDone", 0);
  }
}, 1000);
function changeBackground() {
  $(document).ready(function () {
    $("#body").css("background-image", "url(./script/background.png)");
  });
  //document.body.style.backgroundImage = "url(./script/background.png)";
}

$(document).ready(function () {
  $("#form").hide();
  function toShow() {
    $("#form").show(1000);
    $(".form").css({
      position: "absolute",
      height: "50px",

      top: "calc(40% - 50px/2)" /* height divided by 2*/,
      left: "calc(40% - 50px/2)",
      padding: "12px 20px",
      margin: "8px 0",
      "box-sizing": "border-box",
    });
    $(".text").css({
      "background-color": "#3CBC8D",
      color: "white",
    });
    $(".submit").css({
      "margin-left": "50px",
    });
  }
  window.setTimeout(toShow, 2000);
});
function refreshExistingTab() {
  var string = window.location.href;
  string = string.substring(0, string.length - 9) + "game.html";
  console.log(string);
  window.location.href = string;
}
