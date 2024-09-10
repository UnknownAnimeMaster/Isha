$(document).ready(function() {
    var flame = $("#flame");
    var txt = $("h1");
    var countdownEnded = false;

    flame.addClass("unclickable");

    flame.on({
        click: function () {
            if (countdownEnded) {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("Happy Birthday, Isha!").delay(750).fadeIn(300);
                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );
                $("#birthdaySong")[0].play();
            }
        }
    });

    function updateCountdown() {
        const birthday = new Date("September 11, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = birthday - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        $("#days").text(textDay);
        $("#hours").text(textHour);
        $("#minutes").text(textMinute);
        $("#seconds").text(textSecond);

        if (gap <= 0) {
            clearInterval(countdownInterval);
            $("#countdown").text("It's Isha's Birthday!");
            flame.removeClass("unclickable");
            countdownEnded = true;
        }
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to avoid delay
});