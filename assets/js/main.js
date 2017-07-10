var $;
var console;
var setTimeout;
var bet = 0;
var odds = 0;
var payout = 0;

// PAGE REFRESH

$('#PageRefresh').click(function() {

      location.reload();

	});


// DISABLED BET BUTTON

$('select').on('change', function() {
    'use strict';
    console.log($(this).val());
    if ($(this).val() !== "0") {
        $(this).find(':selected').addClass('selected');

    }
    $(this).find(':selected').siblings('option').removeClass('selected');

    if ($("#horseSelection .selected")) {
        $("input[value='Bet']").removeAttr('disabled');
    } else {
        $("input[value='Bet']").attr('disabled');
    }

});


// WINNER HIGHLIGHT AND HORSES RUNNING

$("input[value='Bet']").click(function() {
    'use strict';
    var functionOne = function() {

        var r = $.Deferred();

        setTimeout(function() {
            $("#track div").toggleClass("allHorse");
        }, 0);
        console.log('Horses Run');

        return r;

    };

    var functionTwo = function() {

        setTimeout(function() {
            $("#track div").toggleClass("allHorse");

            var choice = Math.random();

            if (choice < 0.1) {
                $("div").not(this).removeClass("winner");
                $("div#1-2").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track1").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track2").toggleClass("secondHorse");
            } else if (choice < 0.1) {
                $("div").not(this).removeClass("winner");
                $("div#1-3").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track1").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track3").toggleClass("secondHorse");
            } else if (choice < 0.2) {
                $("div").not(this).removeClass("winner");
                $("div#1-4").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track1").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track4").toggleClass("secondHorse");
            } else if (choice < 0.3) {
                $("div").not(this).removeClass("winner");
                $("div#1-5").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track1").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track5").toggleClass("secondHorse");
            } else if (choice < 0.4) {
                $("div").not(this).removeClass("winner");
                $("div#2-3").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track2").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track3").toggleClass("secondHorse");
            } else if (choice < 0.5) {
                $("div").not(this).removeClass("winner");
                $("div#2-4").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track2").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track4").toggleClass("secondHorse");
            } else if (choice < 0.6) {
                $("div").not(this).removeClass("winner");
                $("div#2-5").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track2").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track5").toggleClass("secondHorse");
            } else if (choice < 0.7) {
                $("div").not(this).removeClass("winner");
                $("div#3-4").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track3").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track4").toggleClass("secondHorse");
            } else if (choice < 0.8) {
                $("div").not(this).removeClass("winner");
                $("div#3-5").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track3").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track5").toggleClass("secondHorse");
            } else {
                $("div").not(this).removeClass("winner");
                $("div#4-5").toggleClass("winner");
                $("div").not(this).removeClass("firstHorse");
                $("#track4").toggleClass("firstHorse");
                $("div").not(this).removeClass("secondHorse");
                $("#track5").toggleClass("secondHorse");
            }

            if ($(".winner").hasClass("1-2")) {
                bet = parseInt($(".oneTwo").val());
                odds = parseInt($("#1-2 div+div").text());
                console.log(odds);
                console.log(bet);
                payout = bet * odds;
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("1-3")) {
                bet = parseInt($(".oneThree").val());
                odds = parseInt($("#1-3 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("1-4")) {
                bet = parseInt($(".oneFour").val());
                odds = parseInt($("#1-4 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("1-5")) {
                bet = parseInt($(".oneFive").val());
                odds = parseInt($("#1-5 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("2-3")) {
                bet = parseInt($(".twoThree").val());
                odds = parseInt($("#2-3 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("2-4")) {
                bet = parseInt($(".twoFour").val());
                odds = parseInt($("#2-4 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("2-5")) {
                bet = parseInt($(".twoFive").val());
                odds = parseInt($("#2-5 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("3-4")) {
                bet = parseInt($(".threeFour").val());
                odds = parseInt($("#3-4 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else if ($(".winner").hasClass("3-5")) {
                bet = parseInt($(".threeFive").val());
                odds = parseInt($("#3-5 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            } else {
                bet = parseInt($(".fourFive").val());
                odds = parseInt($("#4-5 div+div").text());
                payout = bet * odds;
                console.log(odds);
                console.log(bet);
                $("#payout").val(payout);
            }

        }, 6000);

        console.log('Winners Selected');

    };


    functionOne().done(functionTwo());

});
