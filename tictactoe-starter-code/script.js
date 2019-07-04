$(function(){
  var $tiles = $("td");
  var playerTurn = 1;
  for (var i = 0; i < $tiles.length; i++) {
    $($tiles[i]).click(function(){
      if ($(this).html() == "") {
        if (playerTurn == 1) {
          $(this).html("X");
          playerTurn = 2;
        } else {
          $(this).html("O");
          playerTurn = 1;
        }
      }
      addScore();
    });
  }
  function addScore() {
      var xScore = 0;
      var oScore = 0;
      var winningCombinations = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < winningCombinations.length; i++) {
      for (var j = 0; j < winningCombinations[i].length; j++) {
        if ($($tiles[winningCombinations[i][j]]).html() == "X") {
          xScore++;
        } else if ($($tiles[winningCombinations[i][j]]).html() == "O") {
          oScore++;
        }
      }
      checkForWinner(xScore, oScore);
      xScore = 0;
      oScore = 0;
    }
  }
  function checkForWinner(xScore, oScore) {
    if(xScore == 3) {
      console.log("X wins!");
    } else if(oScore == 3) {
      console.log("O wins!");
    }
  }




})
