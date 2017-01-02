var timerSeconds = 4;

$(function() {
    $(".input-timer").val(timerSeconds + 1 + " s");

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio/lettres.mp3');

    var myCounter = new Countdown({
        seconds:timerSeconds,  // number of seconds to count down
        onUpdateStatus: function(sec){
            $(".input-timer").val(sec + " s");
            if (sec == 9) {
                audioElement.play();
            }
        }, // callback for each second
        onCounterEnd: function(){
            console.log("fini");
            $(".input-lettres-reponse").slideDown();
        } // final action
    });

    $(".lancer-timer").click(function() {
        $(".reset-timer").click();
        myCounter.start();
    });

    $(".reset-timer").click(function () {
        myCounter.stop();
        var newTime = timerSeconds + 1;
        $(".input-timer").val(newTime + " s");
        $(".input-lettres-reponse").hide("slow");
    });

    $(".input-lettres, .input-lettres-reponse").keyup(function () {
        var longueurMot = $(this).val().length;
        var mot = $(this).val().charAt(0).toUpperCase();
        for (x = 0; x < longueurMot; x++) {
            var lettreEnCours = $(this).val().charAt(x).toUpperCase();
            if (x != 0 && lettreEnCours != "-" ) {
                mot += "-" + lettreEnCours;
            }
        }
        $(this).val(mot);
    });

});

function Countdown(options) {
    var timer,
        instance = this,
        seconds = options.seconds || 10,
        updateStatus = options.onUpdateStatus || function () {},
        counterEnd = options.onCounterEnd || function () {};

    function decrementCounter() {
        updateStatus(seconds);
        if (seconds === 0) {
            counterEnd();
            instance.stop();
        }
        seconds--;
    }

    this.start = function () {
        clearInterval(timer);
        timer = 0;
        seconds = options.seconds;
        timer = setInterval(decrementCounter, 1000);
    };

    this.stop = function () {
        clearInterval(timer);
    };
}