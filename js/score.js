$(function() {
    var scoreEquipe1 = sessionStorage.getItem("scoreEquipe1");
    if (scoreEquipe1 && $.isNumeric(scoreEquipe1)) {
        $("#score-equipe-1").val(scoreEquipe1);
    }
    var scoreEquipe2 = sessionStorage.getItem("scoreEquipe2");
    if (scoreEquipe2 && $.isNumeric(scoreEquipe2)) {
        $("#score-equipe-2").val(scoreEquipe2);
    }

    $(".augmenter-score").click(function() {
        modifierScore(this, true);
    });
    $(".diminuer-score").click(function() {
        modifierScore(this, false);
    });

});

function modifierScore(bouton, isAugmenter) {
    var numEquipe = $(bouton).attr("equipe");
    var inputScore = $("#score-equipe-" + numEquipe);
    if ($.isNumeric($(inputScore).val())) {
        var newScore;
        if (isAugmenter) {
            newScore = parseInt($(inputScore).val()) + 1;
        } else {
            newScore = parseInt($(inputScore).val()) - 1
        }
        $(inputScore).val(newScore);
        sessionStorage.setItem("scoreEquipe" + numEquipe, newScore);
    } else {
        $(inputScore).val(0);
    }
}