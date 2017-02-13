jQuery(function() {

//plays ryu stage music
var game_start = new Audio('./audio/stage.mp3');
  game_start.play();

var game_start2 = new Audio('./audio/fight.mp3');
  game_start2.play();

//Sound effects
var SoundEffect1 = new Audio('./audio/2CH.mp3');
var SoundEffect2 = new Audio('./audio/71H.mp3');
var SoundEffect3 = new Audio('./audio/2AH.mp3');
var SoundEffect4 = new Audio('./audio/2BH.mp3');

var You = new Audio('./audio/you.mp3');
var Win = new Audio('./audio/win.mp3');

// var ryuMovesList = [ "ryu/ryuFMP.gif",'ryu/ryuFP.gif','ryu/ryuHCK.gif','ryu/ryuHK.gif','ryuMK.gif', 'ryu/ryuPunch.gif'];

// var kenMovesList= ['ken/kenAK.gif','ken/kenPunch.gif', 'ken/kenHP.gif', 'kenBalls.gif', 'kenBalls2.gif' ];

//Ryu's character
var ryu = $('#ryuFirst');

//Ken's character
var ken = $('#kenFirst');

//ken's health
var kenDie = $('#kenDeath')

//ryu's health
var ryuDie = $('#ryuDeath')

//all kens
var allKens = $('.ken');

// all ryus
var allRyus = $('.ryu');

//Ryu Wins character
var ryuWinCharacter = $('#ryuSpecial')

var kenLostCharacter = $('#kenDead')

//Ken Wins character
var kenWinCharacter = $('#kenPeace')
var ryuLostCharacter = $('#ryuDead')

//Ryu slideShow Effect
var ryuIndex = 1;
showRyu(ryuIndex);
var f;

 var plusRyu = function (n,c){
  f = c;
  showRyu(ryuIndex += n, f);
 }


  function showRyu(n, condit){
    var i;
    var x = $(".ryu");

    if (n > x.length) {ryuIndex = 1}
    if (n < 1) {ryuIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
      if(condit === true) {x[ryuIndex-1].style.display = "block";}
  }


$(document).keyup(function(ryuski){
       if (ryuski.keyCode === 90){
         ryu.hide();
         kenDie.css("width","+=5px");
         SoundEffect1.play();
         SoundEffect2.play();
         SoundEffect3.play();
         SoundEffect4.play();
         ryuWins();
         draw();
         plusRyu(+1, true);
  }


});


// Ryu slideShow Effect
// Anthony helped me with the if condition checker so the slideshow doesn't display by default
var kenIndex = 1;
showKen(kenIndex);
var a;
var plusKens = function(n, o){
  a = o;
showKen(kenIndex += n, a);

 }

function showKen(n, condit){
    var j;
    var k = $(".ken");

    if (n > k.length) {kenIndex = 1}
    if (n < 1) {kenIndex = k.length}
    for (j = 0; j < k.length; j++) {
      k[j].style.display = "none";
    }

    if(condit === true){k[kenIndex-1].style.display = "block";}

  }


   $(document).keyup(function(kenski){
            if (kenski.keyCode ===77){
            ken.hide();
            ryuDie.css("width","+=5px");
            SoundEffect1.play();
            SoundEffect2.play();
            SoundEffect3.play();
            SoundEffect4.play();
            kenWins();
            draw();
            plusKens(+1, true)

              }
});



//these 2 functions check for winner
var kenWins = function(){
    if (ryuDie.css('width') === '400px'){
       // ryuWinCharacter.show();
     ryuLostCharacter.show();
     ryu.remove();
     ken.remove();
     allKens.remove();
     allRyus.remove();
     You.play();

    setTimeout(function(){
     kenWinCharacter.show();
     Win.play();

    }, 10);

    setTimeout(function(){
          Win.play();

    }, 1000);

      setTimeout(function(){
        alert('Ken Wins!!!, Thanks for playing!!!');
        window.location.href = "index.html";

    }, 2000);

}

    }


var ryuWins = function(){
    if (kenDie.css('width') === '400px'){
      // ryuWinCharacter.show();
     kenLostCharacter.show();
     ken.remove();
     allKens.remove();
     allRyus.remove();
     You.play();


    setTimeout(function(){
     ryuWinCharacter.show();

    }, 10);

         setTimeout(function(){
          Win.play();

    }, 1000);

      setTimeout(function(){
        alert('Ryu Wins!!!, Thanks for playing!!!');
        window.location.href = "index.html";

    }, 2000);

}

    }


var draw = function(){
    if (kenDie.css('width') === '400px' && ryuDie.css('width') === '400px') {
     ryu.remove();
     ken.remove();
     allKens.remove();
     allRyus.remove();
     You.play();


    setTimeout(function(){
     ryuWinCharacter.show();
     kenWinCharacter.show();

    }, 10);

    setTimeout(function(){
          Win.play();

    }, 1000);

      setTimeout(function(){
        alert('Draw!!!, Thanks for playing!!!');
        window.location.href = "index.html";

    }, 2000);

}

    }

































  });
