

$(document).ready(function() {
    $("circle").each(function() {
        var percent = this.id;
        console.log(percent)
        if (percent == 0) {
            $(this).css("stroke-dashoffset", "0")
        } else {
            $(this).css("stroke-dashoffset", "calc(190 - (190 * " + percent + ") / 100)")
        }

    });

    $("#experties ul li").each(function() {

        var expertiseinfo = $(this).children(".experties-info")
        console.log(expertiseinfo.html())
        var mainbar = $(this).children(".bar")
        var bar = mainbar.children(".experties-bar")
        console.log(bar.html())
        var percentage = expertiseinfo.children("#exp-percentage").html()
        console.log("Percentage : " + percentage)
        bar.animate({
            width: percentage
        }, 2500)
    });

    $("[id^=viewimg]").on("click", function() {
        var parent = $(this).parent().parent()
        var imgtoview = parent.children("#projimg").attr("src")
        var previewer = $(".img-previewer")
        previewer.css("display", "flex")
        $("#imgprev").attr("src", imgtoview)
        $("#closePreviewer").on("click", function() {
            previewer.css("display", "none")
        });
    });

    $("#toggleinfo").on("click", function() {

        $(".generalinfo").css("display", "flex")
        $(".generalinfo").animate({
            left: '0'
        }, 1000)
        $(".screen-cover").css("display", "block")
        $(".screen-cover").animate({
            opacity: "1"
        }, 1000)
    });

    $("#closeInfo").on("click", function() {
        $(".screen-cover").animate({
            opacity: "0"
        }, 1000, function() {
            $(".screen-cover").css("display", "none")
        });
        $(".generalinfo").animate({
            left: '-290px'
        }, 1000, function() {
            $(".generalinfo").css("display", "none")
        });
    });




});