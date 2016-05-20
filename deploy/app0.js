$(document).ready(function(){
  var upperTotal = 0;
  var p2UpperTotal = 0;
  var upperBonus = 0;
  var p2upperBonus = 0;
  var totalScore = 0;
  var p2TotalScore = 0;
  var lowerSub = 0;
  var p2lowerSub = 0;
  var YahtzeeScore = 0;
  var p2YahtzeeScore = 0;
  var upperSub = 0;
  var p2upperSub = 0;
  var rollsLeft = 3;
  var tossResult = [];
  var counter = 0;
  var roll = function() {
    if (rollsLeft > 0) {
        for (var j=0; j<5; j++) {
          if (!($('#keep' + j).prop('checked'))) {
          tossResult[j] = Math.ceil(Math.random()*6);
          $('#die'+j).empty();
          $('#die'+j).append("<img src='" + tossResult[j] +".jpg'/>");
          }
        }
        rollsLeft --;
        $('#rollsLeft').empty();
        $('#rollsLeft').append(rollsLeft);
    } else {
      alert("You are out of rolls this turn!");
    }
  };

  var checkThree = function() {
    var resultSorted = tossResult.sort();
    if ((resultSorted[0] === resultSorted[1] && resultSorted[1] === resultSorted[2]) || (resultSorted[1] === resultSorted[2] && resultSorted[2] === resultSorted[3]) || (resultSorted[2] === resultSorted[3] && resultSorted[3] === resultSorted[4])) {
      threeOfAKindScore = tossResult[0] + tossResult[1] + tossResult[2] + tossResult[3] + tossResult[4];
    } else {
      threeOfAKindScore = 0;
    }
    if (counter % 2 === 0) {
    $('#threeOfAKind').append("Three of a kind: " + threeOfAKindScore);
    lowerSub+=threeOfAKindScore;
    $('.p1 .threeBtn').remove();
    } else {
    $('#p2threeOfAKind').append("Three of a kind: " + threeOfAKindScore);
    p2lowerSub+=threeOfAKindScore;
    $('.p2 .threeBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkFour = function() {
    var resultSorted = tossResult.sort();
    if ((resultSorted[0] === resultSorted[1] && resultSorted[0] === resultSorted[2] && resultSorted[0] === resultSorted[3]) || (resultSorted[1] === resultSorted[2] && resultSorted[1] === resultSorted[3] && resultSorted[1] === resultSorted[4])) {
      fourOfAKindScore = tossResult[0] + tossResult[1] + tossResult[2] + tossResult[3] + tossResult[4];
    } else {
      fourOfAKindScore = 0;
    }
    if (counter % 2 === 0) {
    $('#fourOfAKind').append("Four of a kind: " + fourOfAKindScore);
    lowerSub+=fourOfAKindScore;
    $('.p1 .fourBtn').remove();
    } else {
    $('#p2fourOfAKind').append("Four of a kind: " + fourOfAKindScore);
    p2lowerSub+=fourOfAKindScore;
    $('.p2 .fourBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkFullHouse = function() {
    var resultSorted = tossResult.sort();
    if ((resultSorted[0] === resultSorted[1] && resultSorted[2] === resultSorted[3] && resultSorted[2] === resultSorted[4]) || (resultSorted[0] === resultSorted[1] && resultSorted[0] === resultSorted[2] && resultSorted[3] === resultSorted[4])) {
      fullHouseScore = 25;
    } else {
      fullHouseScore = 0;
    }
    if (counter % 2 === 0) {
    $('#fullHouse').append("Full house: " + fullHouseScore);
    lowerSub+=fullHouseScore;
    $('.p1 .fullBtn').remove();
    } else {
    $('#p2fullHouse').append("Full house: " + fullHouseScore);
    p2lowerSub+=fullHouseScore;
    $('.p2 .fullBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkSmallStraight = function() {
    var resultSorted = tossResult.sort();
    if (/1234|2345|3456/.test( resultSorted.join("").replace(/(.)\1/,"$1") )) {
      smallStraightScore = 30;
    } else {
      smallStraightScore = 0;
    }
    if (counter % 2 === 0){
    $('#smallStraight').append("Small straight: " + smallStraightScore);
    lowerSub+=smallStraightScore;
    $('.p1 .smallBtn').remove();
    } else {
    $('#p2smallStraight').append("Small straight: " + smallStraightScore);
    p2lowerSub+=smallStraightScore;
    $('.p2 .smallBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkLargeStraight = function() {
    var resultSorted = tossResult.sort();
    if (/12345|23456/.test( resultSorted.join(""))) {
      largeStraightScore = 40;
    } else {
      largeStraightScore = 0;
    }
    if (counter % 2 === 0){
    $('#largeStraight').append("Large straight: " + largeStraightScore);
    lowerSub+=largeStraightScore;
    $('.p1 .largeBtn').remove();
    } else {
    $('#p2largeStraight').append("Large straight: " + largeStraightScore);
    p2lowerSub+=largeStraightScore;
    $('.p2 .largeBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkYahtzee = function(){
    if (tossResult[0] === tossResult[1] && tossResult[0] === tossResult[2] && tossResult[0] === tossResult[3] && tossResult[0] === tossResult[4]) {
      yahtzeeScore = 50;
    }
    else {
      yahtzeeScore = 0;
    }
    if (counter % 2 === 0){
    $('#yahtzee').append("Yahtzee: " + yahtzeeScore);
    lowerSub+=yahtzeeScore;
    $('.p1 .yahtzeeBtn').remove();
    } else {
    $('#p2yahtzee').append("Yahtzee: " + yahtzeeScore);
    p2lowerSub+=yahtzeeScore;
    $('.p2 .yahtzeeBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkChance = function() {
    var chanceRoll = tossResult[0]+tossResult[1]+tossResult[2]+tossResult[3]+tossResult[4];
    if (counter % 2 === 0) {
    $('#chance').append("Chance: " + chanceRoll);
    lowerSub+=chanceRoll;
    $('.p1 .chanceBtn').remove();
    } else {
    $('#p2chance').append("Chance: " + chanceRoll);
    p2lowerSub+=chanceRoll;
    $('.p2 .chanceBtn').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkOnes = function() {
    var count=0;
    for (var i=0; i<5; i++) {
      if (tossResult[i] === 1) {
        count++;
      }
    }
    if (counter % 2 === 0){
    $('#score1').append("1's: " + count);
    upperSub+=count;
    $('.p1 .button1').remove();
    } else {
    $('#p2score1').append("1's: " + count);
    p2upperSub+=count;
    $('.p2 .button1').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkTwos = function() {
    var count=0;
    for (var i=0; i<5; i++) {
      if (tossResult[i] === 2) {
        count++;
      }
    }
    if (counter % 2 === 0) {
    $('#score2').append("2's: " + count * 2);
    upperSub+=count*2;
    $('.p1 .button2').remove();
    } else {
    $('#p2score2').append("2's: " + count * 2);
    p2upperSub+=count*2;
    $('.p2 .button2').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkThrees = function() {
    var count=0;
    for (var i=0; i<5; i++) {
      if (tossResult[i] === 3) {
        count++;
      }
    }
    if (counter % 2 === 0) {
    $('#score3').append("3's: " + count * 3);
    upperSub+=count*3;
    $('.p1 .button3').remove();
    } else {
    $('#p2score3').append("3's: " + count * 3);
    p2upperSub+=count*3;
    $('.p2 .button3').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkFours = function() {
    var count=0;
    for (var i=0; i<5; i++) {
      if (tossResult[i] === 4) {
        count++;
      }
    }
    if (counter % 2 === 0) {
    $('#score4').append("4's: " + count * 4);
    upperSub+=count*4;
    $('.p1 .button4').remove();
    } else {
    $('#p2score4').append("4's: " + count * 4);
    p2upperSub+=count*4;
    $('.p2 .button4').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkFives = function() {
    var count=0;
    for (var i=0; i<5; i++) {
      if (tossResult[i] === 5) {
        count++;
      }
    }
    if (counter % 2 === 0) {
    $('#score5').append("5's: " + count * 5);
    upperSub+=count*5;
    $('.p1 .button5').remove();
    } else {
    $('#p2score5').append("5's: " + count * 5);
    p2upperSub+=count*5;
    $('.p2 .button5').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var checkSixes = function() {
    var count=0;
    for (var i=0; i<5; i++) {
      if (tossResult[i] === 6) {
        count++;
      }
    }
    if (counter % 2 === 0) {
    $('#score6').append("6's: " + count * 6);
    upperSub+=count*6;
    $('.p1 .button6').remove();
    } else {
    $('#p2score6').append("6's: " + count * 6);
    p2upperSub+=count*6;
    $('.p2 .button6').remove();
    }
    var thisButton = $(this);
    buttonPush(thisButton);
  };
  var buttonPush = function(pushedButton) {
    rollsLeft = 3;
    tossResult = [];
    $('#rollsLeft').empty();
    $('#rollsLeft').append(rollsLeft);
    console.log(pushedButton);
    $('#keep0, #keep1, #keep2, #keep3, #keep4').prop("checked", false);
    $('#die0, #die1, #die2, #die3, #die4').empty();
    if (counter % 2 === 0) {
      $('#upperSubtotal').empty();
      $('#upperSubtotal').append(upperSub);
      if (upperSub >= 63) {
        upperBonus = 35;
        upperTotal = upperSub + 35;
      }
      else {
        upperTotal = upperSub;
      }
      $('#bonus').empty();
      $('#bonus').append(upperBonus);
      $('#upperTotal').empty();
      $('#upperTotal').append(upperTotal);
      $('#lowerSubtotal').empty();
      $('#lowerSubtotal').append(lowerSub);
      totalScore = upperTotal + lowerSub;
      $('#currentScore').empty();
      $('#currentScore').append(totalScore);
      $('.p1 input').prop('disabled',true);
      $('.p2 input').prop('disabled',false);
    } else {
      $('#p2upperSubtotal').empty();
      $('#p2upperSubtotal').append(p2upperSub);
      if (p2upperSub >= 63) {
        p2upperBonus = 35;
        p2upperTotal = p2upperSub + 35;
      }
      else {
        p2upperTotal = p2upperSub;
      }
      $('#p2bonus').empty();
      $('#p2bonus').append(p2upperBonus);
      $('#p2upperTotal').empty();
      $('#p2upperTotal').append(p2upperTotal);
      $('#p2lowerSubtotal').empty();
      $('#p2lowerSubtotal').append(p2lowerSub);
      p2totalScore = p2upperTotal + p2lowerSub;
      $('#p2currentScore').empty();
      $('#p2currentScore').append(p2totalScore);
      $('.p2 input').prop('disabled',true);
      $('.p1 input').prop('disabled',false);
    }
    counter++;
    if (counter === 26 && totalScore > p2totalScore){
      alert("Game over! Player one wins by a score of " + totalScore + " to " + p2totalScore);
    } else if (counter === 26 && totalScore === p2totalScore) {
      alert("Game over! You tied!");
    } else if (counter === 26 && totalScore < p2totalScore) {
      alert("Game over! Player two wins by a score of " + p2totalScore + " to " + totalScore);
    }
  };
  $('.rollBtn').click(roll);
  $('.button1').click(checkOnes);
  $('.button2').click(checkTwos);
  $('.button3').click(checkThrees);
  $('.button4').click(checkFours);
  $('.button5').click(checkFives);
  $('.button6').click(checkSixes);
  $('.threeBtn').click(checkThree);
  $('.fourBtn').click(checkFour);
  $('.fullBtn').click(checkFullHouse);
  $('.smallBtn').click(checkSmallStraight);
  $('.largeBtn').click(checkLargeStraight);
  $('.yahtzeeBtn').click(checkYahtzee);
  $('.chanceBtn').click(checkChance);
});
