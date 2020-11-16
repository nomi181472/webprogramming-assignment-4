function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function printImgSrc(array, _class, mCLass, to, lStr) {
  $(document).ready(function () {
    $(_class).html(makeImgSrc(array, to, lStr));
    $(mCLass).css("margin-left", "170px");
  });
}
function makeImgSrc(array, to, lStr) {
  var string = "";
  var first = '<td><img  src="';
  var mid = '" alt="unable to upload" id="' + to;
  var last = "/></td>";
  for (var i = 0; i < array.length; i++) {
    string =
      string +
      first +
      array[i] +
      mid +
      i +
      '" width=' +
      1000 / array.length +
      "px " +
      'class="' +
      array[i].substring(lStr, array[i].length - 4) +
      '"' +
      last;
  }
  // console.log(string);
  return string;
}
var dlevel1 = [
  "./images/dragableElephant.png",
  "./images/dragableTiger.png",
  "./images/dragableZebra.png",
  "./images/dragableCat.png",
  "./images/dragableHorse.png",
];
var udlevel1 = [
  "./images/undragableElephant.png",
  "./images/undragableTiger.png",
  "./images/undragableZebra.png",
  "./images/undragableCat.png",
  "./images/undragableHorse.png",
];
function makeTime(timer) {
  $(document).ready(function () {
    $(".countdown").html(timer);
  });
}
function increaseLevel(l) {
  $(document).ready(function () {
    $(".level").html(l);
  });
}
function resetScore(i) {
  $(document).ready(function () {
    $(".level").html(i);
  });
}
function main(time, level) {
  resetScore(0);
  makeTime(time);
  increaseLevel(level);
  shuffle(dlevel1);
  shuffle(udlevel1);

  printImgSrc(dlevel1, ".row1", ".dragable", "draggable", 9);
  printImgSrc(udlevel1, ".row3", ".undragable", "droppable", 11);

  dragAndDrop();
}
function dragAndDrop() {
  $(document).ready(function () {
    $("#draggable0").draggable({ revert: true });
    $("#droppable0").droppable({
      hoverClass: "active",
      drop: function (event, ui) {
        dragged = ui.draggable.attr("class").split(" ")[0];
        dropped = $(this).attr("class").split(" ")[0];
        if (dragged === dropped) {
          var score = parseInt($(".score").html());
          $(".score").html(score + 10);
          $("audio#correct")[0].play();
        } else {
          var score = parseInt($(".score").html());
          $(".score").html(score - 10);
          $(".undragable")
            .toggle("bounce", $(this).position(), { times: 3 }, 300)
            .show(100);
          $("audio#wrong")[0].play();
        }
        $(this).html(ui.draggable.remove().html());
        if (globalCounter !== 4) {
          globalCounter = globalCounter + 1;
        }
        //$(this).addClass("ui-state-highlight");
        //$("#draggable0").draggable({ disabled: true });
      },
    });
  });
  $(document).ready(function () {
    $("#draggable1").draggable({ revert: true });
    $("#droppable1").droppable({
      hoverClass: "active",
      drop: function (event, ui) {
        dragged = ui.draggable.attr("class").split(" ")[0];
        dropped = $(this).attr("class").split(" ")[0];
        if (dragged === dropped) {
          var score = parseInt($(".score").html());
          $(".score").html(score + 10);
          $("audio#correct")[0].play();
        } else {
          var score = parseInt($(".score").html());
          $(".score").html(score - 10);
          $(".undragable")
            .toggle("bounce", $(this).position(), { times: 3 }, 300)
            .fadeIn(100);
          $("audio#wrong")[0].play();
        }

        $(this).html(ui.draggable.remove().html());
        if (globalCounter !== 4) {
          globalCounter = globalCounter + 1;
        }
        //$(this).addClass("ui-state-highlight");
        //$("#draggable1").draggable({ disabled: true });
      },
    });
  });
  $(document).ready(function () {
    $("#draggable2").draggable({ revert: true });
    $("#droppable2").droppable({
      hoverClass: "active",
      drop: function (event, ui) {
        dragged = ui.draggable.attr("class").split(" ")[0];
        dropped = $(this).attr("class").split(" ")[0];
        if (dragged === dropped) {
          var score = parseInt($(".score").html());
          $(".score").html(score + 10);
          $("audio#correct")[0].play();
        } else {
          var score = parseInt($(".score").html());
          $(".score").html(score - 10);
          $(".undragable")
            .toggle("bounce", $(this).position(), { times: 3 }, 300)
            .fadeIn(100);
          $("audio#wrong")[0].play();
        }

        $(this).html(ui.draggable.remove().html());
        if (globalCounter !== 4) {
          globalCounter = globalCounter + 1;
        }
        // $(this).addClass("ui-state-highlight");
        //$("#draggable2").draggable({ disabled: true });
      },
    });
  });
  $(document).ready(function () {
    $("#draggable3").draggable({ revert: true });
    $("#droppable3").droppable({
      hoverClass: "active",
      drop: function (event, ui) {
        dragged = ui.draggable.attr("class").split(" ")[0];
        dropped = $(this).attr("class").split(" ")[0];
        if (dragged === dropped) {
          var score = parseInt($(".score").html());
          $(".score").html(score + 10);
          $("audio#correct")[0].play();
        } else {
          var score = parseInt($(".score").html());
          $(".score").html(score - 10);
          $(".undragable")
            .toggle("bounce", $(this).position(), { times: 3 }, 300)
            .fadeIn(100);
          $("audio#wrong")[0].play();
        }

        $(this).html(ui.draggable.remove().html());
        if (globalCounter !== 4) {
          globalCounter = globalCounter + 1;
        }
        //$(this).addClass("ui-state-highlight");
        //$("#draggable3").draggable({ disabled: true });
      },
    });
  });
  $(document).ready(function () {
    $("#draggable4").draggable({ revert: true });
    $("#droppable4").droppable({
      hoverClass: "active",
      drop: function (event, ui) {
        dragged = ui.draggable.attr("class").split(" ")[0];
        dropped = $(this).attr("class").split(" ")[0];
        if (dragged === dropped) {
          var score = parseInt($(".score").html());
          $(".score").html(score + 10);
          $("audio#correct")[0].play();
        } else {
          var score = parseInt($(".score").html());
          $(".score").html(score - 10);
          $(".undragable")
            .toggle("bounce", $(this).position(), { times: 3 }, 300)
            .fadeIn(100);
          $("audio#wrong")[0].play();
        }
        if (globalCounter !== 4) {
          globalCounter = globalCounter + 1;
        }
        $(this).html(ui.draggable.remove().html());

        //$(this).addClass("ui-state-highlight");
        //$("#draggable4").draggable({ disabled: true });
      },
    });
  });
}

function playTimer() {
  $(document).ready(function () {
    // Function to update counters on all elements with class counter
    var doUpdate = function () {
      $(".countdown").each(function () {
        var count = parseInt($(this).html());
        if (count !== 0) {
          $(this).html(count - 1);
          console.log(window.location.href);
          var score = parseInt($(".score").html());
          if (globalCounter === 4 && score >= 50) {
            var level = parseInt($(".level").html());
            console.log("score*level: " + score * level);
            if (score >= 50) {
              if (level != 2) {
                globalCounter = -1;

                console.log("win level 1");
                main(15, 2);
              } else if (score === 100) {
                if (confirm("You Won the Game. Play again?")) {
                  globalCounter = -1;
                  $(".score").html(0);
                  main(30, 1);
                } else {
                  window.close();
                }
              }
            }
          } else if (globalCounter === 4 && score < 50) {
            if (confirm("you lose game,want to play again ")) {
              globalCounter = -1;
              $(".score").html(0);
              main(30, 1);
            } else {
              window.close();
            }
          }
        } else {
          if (confirm("you lose game,want to play again ")) {
            globalCounter = -1;
            $(".score").html(0);
            main(30, 1);
          } else {
            window.close();
          }
        }
      });
    };

    // Schedule the update to happen once every second
    setInterval(doUpdate, 1000);
  });
}

playTimer();
var globalCounter = -1;
main(30, 1);
