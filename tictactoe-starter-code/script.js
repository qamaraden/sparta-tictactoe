$(function(){
  console.log("DOM activated");
//As a user
//I want to be able to change any box to a black background and have a big white X when it's clicked
//I want the  h2 to say "It is O's turn" when the box is clicked
//
var turnUser = $("td")
var turnUser2 = $("td")
// var turn1 = turnUser.addClass("X")
// var turn2 = turnUser.addClass("O")
// //
// //
//
//   $(turnUser).each(function(){
//   $(turn1).on("click",function(){
//     $(this).html("X").addClass("X")
//     $(".playerTurn").html("It's O's turn")
//     if (true) {
//       $(turn2).on("click",function(){
//           $(this).html("O").addClass("O")
//           $(".playerTurn").html("It's X's turn")
//           if (true) {
//             $(turn1).on("click",function(){
//               $(this).html("X").addClass("X")
//               $(".playerTurn").html("It's O's turn")
//               })
//               if (true) {
//                 $(turn2).on("click",function(){
//                   $(this).html("O").addClass("O")
//                   $(".playerTurn").html("It's X's turn")
//                   })
//               }
//           }
//         })
//     }
//     })
//
//   })

  // $(turnUser2).each(function(){
  // $(this).on("click",function(){
  //   $(this).html("O").addClass("O")
  //   $(".playerTurn").html("It's X's turn")
  //   })
  // })

  // $(turnUser).on("click",function(){
  //   $(this).html("X").addClass("X")
  //   $(".playerTurn").html("It's O's turn")
  //   })
  //
  // $(turnUser2).on("click",function(){
  //   $(this).html("O").addClass("O")
  //   $(".playerTurn").html("It's X's turn")
  //   })




// function


    $(turnUser).each(function(){
    $(this).on("click",function(){
      $(this).html("X").addClass("X")
      $(".playerTurn").html("It's O's turn")
        if (true) {
          $(turnUser2).each(function(){
            $(this).on("click",function(){
              $(this).html("O").addClass("O")
              $(".playerTurn").html("It's X's turn")
              if (true) {
                $(turnUser).on("click",function(){
                  $(this).html("X").addClass("X")
                  $(".playerTurn").html("It's O's turn")
                  })
                  if (true) {
                    $(turnUser2).on("click",function(){
                      $(this).html("O").addClass("O")
                      $(".playerTurn").html("It's X's turn")
                      })
                  }
              }
    //
              })
            })
          }

      })
    })

//
//
//
//
//
// //
// //
// //   function computerTurn(){
// //     var choose = $("td:not(.O)");
// //     randChoice = choose[Math.floor(Math.random()* choose.length)]
// //     trackTicTac(randChoice, ".O")
// //   }
// //
//   function trackTicTac(obj, mark){
//     var winningProbability = [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]];
//
//     var markedPosition = $(obj).data("position");
//     $.each(winningProbability, function(key, winningProbabilityIndex){
//       if ($.inArray(markedPosition, winningProbabilityIndex) >= 0) {
//       markedLength = 0;
//       $.each(winningProbabilityIndex, function(index, value) {
//         var innerSquareClass = $("#tile-" + value).attr("class");
//         if (innerSquareClass.indexOf(mark) > 0) {
//           markedLength = markedLength + 1;
//           if (markedLength == winningProbabilityIndex.length) {
//             finished = true;
//             if (mark == "x-mark") {
//               status = " You Win!";
//             } else {
//               status = " You Lost!";
//             }
//             alert("Game Over." + status);
//           }
//         }
//       });
//     }
//   });
//   return finished;
//   }
// //
//   $(document).ready(function() {
//   finished = false;
//   $(".playerTurn").on('click', function() {
//     if (!finished) {
//       var squareClass = $(this).attr("class");
//       if (squareClass.indexOf("marked") < 0) {
//         $(this).addClass('marked');
//         $(this).addClass('x-mark');
//         finished = trackTicTac(this, 'x-mark');
//         computerTurn();
//       }
//     }
//   });
// // });
//
// $("td").click(function (){
//
//     if(player1Name=="" || player2Name==""){
//         alert("Please set player all the names.");
//         return;
//     }
//
//     var tr = $(this).parent().index();
//     var td = $(this).index();
//
//     if(grid[tr][td]!==0){
//         alert("This position is taken. Please try other position.");
//         return;
//     }
//     if(hasWinner==1){
//         alert("Please click play again");
//         return;
//     }
//
//     if(turn==player1Name){
//         moveCount++;
//         $(this).text("O");
//         grid[tr][td] = 1;
//         var ifWon = winnerCheck(1,player1Name);
//         if(!ifWon){
//             if(moveCount>=9){
//                 boardMsg("Match Drawn!");
//                 moveCount=0;
//                 $("#playButton").text("Play again");
//                 hasWinner=1;
//                 return;
//             }else{
//                 turn = player2Name;
//                 boardMsg(player2Name+"'s turn now!");
//             }
//             return;
//         }
//         else{
//             return;
//         }
//     }
//     else if(turn==player2Name){
//         moveCount++;
//         $(this).text("X");
//         grid[row][col] = 2;
//         var ifWon = winnerCheck(2,player2Name);
//         if(!ifWon){
//             if(moveCount>=9){
//                 boardMsg("Match Drawn!");
//                 moveCount=0;
//                 $("#playButton").text("Play again");
//                 hasWinner=1;
//                 return;
//             }else{
//                 turn = player1Name;
//                 boardMsg(player1Name+"'s turn now!");
//             }
//             return;
//         }
//         else{
//             return;
//         }
//     }











  // var gameOver = false;
  // var yourScore = 0;
  // var compScore = 0;
  // var gameStart = ("td")
  //
  // $(gameStart).click(function(){
  //







  // })
  //
  //
  //


// $(turnComp).each(function(){
//   $(this).on("click",function(){
//     $(this).html("O")
//     $(this).addClass("0")
//     $(".playerTurn").html("It's X's turn")
//
//   })
//   console.log("worked")
// })




/*
$("td").on("click", function(){
  $("td").addClass("X")
})

*/

})
