$(document).ready(function() {

  var asterArray;
  var winHeight = $(window).height();
  var timeLeft = 30;

  $(document).keydown(function(e) {
    $('#rocket').keydown;
    switch (e.which) {

      //move left
      case 65:
        $('#rocket').animate({
          left: "-=40px"
        }, 100);
        break;

        //move right
      case 68:
        $('#rocket').animate({
          left: "+=40px"
        }, 100);
        break;
    };

  });

  countDown();

  function countDown() {
    var gameEnd = setInterval(function() {
      if (timeLeft == 0) {
        clearInterval(gameEnd);
      } else {
        $("#a1").animate({
          top: winHeight
        }, 3000);
        $("#a2").delay(2000).animate({
          top: winHeight
        }, 3000);
        $("#a3").delay(4300).animate({
          top: winHeight
        }, 3000);
        $("#a4").delay(4600).animate({
          top: winHeight
        }, 3000);
        $("#a5").delay(5000).animate({
          top: winHeight
        }, 4000);
        $("#a6").delay(5400).animate({
          top: winHeight
        }, 5000);
        $("#a7").delay(6000).animate({
          top: winHeight
        }, 6000);
        $("#a8").delay(6400).animate({
          top: winHeight
        }, 7000);
        $("#a9").delay(6800).animate({
          top: winHeight
        }, 8000);
        $("#a10").delay(7200).animate({
          top: winHeight
        }, 9000);
        $("#a11").delay(7800).animate({
          top: winHeight
        }, 10000);
        $("#a12").delay(8200).animate({
          top: winHeight
        }, 11000);
        $("#a13").delay(8700).animate({
          top: winHeight
        }, 12000);
        $("#a14").delay(9000).animate({
          top: winHeight
        }, 13000);
        $("#a15").delay(9300).animate({
          top: winHeight
        }, 14000);
        $("#a16").delay(9700).animate({
          top: winHeight
        }, 15000);
        $("#a17").delay(10000).animate({
          top: winHeight
        }, 16000);
        $("#a18").delay(10300).animate({
          top: winHeight
        }, 17000);
        $("#a19").delay(10700).animate({
          top: winHeight
        }, 18000);
        $("#a20").delay(11000).animate({
          top: winHeight
        }, 19000);
        $("#a21").delay(11300).animate({
          top: winHeight
        }, 20000);
        $("#a22").delay(11600).animate({
          top: winHeight
        }, 21000);
        $("#a23").delay(11900).animate({
          top: winHeight
        }, 22000);
        $("#a24").delay(12200).animate({
          top: winHeight
        }, 23000);
        $("#a25").delay(12600).animate({
          top: winHeight
        }, 24000);
        $("#a26").delay(129000).animate({
          top: winHeight
        }, 25000);
        $("#a27").delay(123000).animate({
          top: winHeight
        }, 26000);
        $("#a28").delay(127000).animate({
          top: winHeight
        }, 27000);
        $("#a29").delay(130000).animate({
          top: winHeight
        }, 28000);
        $("#a30").delay(133000).animate({
          top: winHeight
        }, 29000);
        $("#a31").delay(137000).animate({
          top: winHeight
        }, 30000);
        $("#a32").delay(140000).animate({
          top: winHeight
        }, 31000);
        $("#a33").delay(143000).animate({
          top: winHeight
        }, 32000);
        $("#a34").delay(147000).animate({
          top: winHeight
        }, 33000);
        $("#a35").delay(150000).animate({
          top: winHeight
        }, 34000);
        $("#a36").delay(153000).animate({
          top: winHeight
        }, 35000);

        $("#a37").delay(157000).animate({
          top: winHeight
        }, 36000);

        $("#a38").delay(160000).animate({
          top: winHeight
        }, 37000);

        $("#a39").delay(163000).animate({
          top: winHeight
        }, 38000);

        $("#a40").delay(167000).animate({
          top: winHeight
        }, 39000);

        timeLeft = timeLeft - 1;
      }
    }, 1000);
  }

  function asteroidArray() {

  }

});