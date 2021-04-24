window.onload = function () {

  for (var i = 0; i < 5; i++) {
    var duck = createDuck();
  }

  function createDuck() {
    var duckDiv = document.createElement("div");
    duckDiv.classList.add("duck");
    var nextPosition = randomPosition();
    debugger;
    duckDiv.style.top = `${nextPosition.top}px`;
    duckDiv.style.left = `${nextPosition.left}px`;
    document.body.append(duckDiv);


    duckDiv.addEventListener("click", function () {
      duckDiv.classList.add("shot");

      setTimeout(function () {
        duckDiv.remove();
        checkForWinner();
      }, 1000);
    });

    setInterval(function () {
      duckDiv.classList.toggle("flap");
    }, 250);
    setInterval(function () {
      moveDuck(duckDiv);
    }, 1000);

    function moveDuck(duck) {
      var nextPosition = randomPosition();
      duck.style.top = `${nextPosition.top}px`;
      duck.style.left = `${nextPosition.left}px`;

      if (
        parseFloat(duck.style.left.substring(0, duck.style.left.length - 2)) <
        nextPosition.left
      ) {
        duckDiv.classList.remove("right");
      } else {
        duckDiv.classList.add("right");
      }
    }
    return duckDiv;
  }


  function randomPosition() {
    var randomWidth = Math.random() * window.innerWidth;
    var randomHeight = Math.random() * window.innerHeight;
    return { left: randomWidth, top: randomHeight };
  }




  function checkForWinner() {
    var anyDucksLeft = document.getElementsByClassName("duck").length;
    if (anyDucksLeft == 0) {
      alert("You win 1 trillion tokens.  Play the day away!");
    }
  }


};
