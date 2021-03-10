var curDate = moment().format("MM/DD/YYYY");
$("#theDate").append(curDate);
styleTime();

function styleTime() {
    var curTime = moment().format("h A");
    $("#theDate").append(`<br>${curTime}`);
    curTime = moment().format("H");
    curTime -= 9;
    // console.log(curTime);
    for (let i = 0; i <= 18; i++) {
        if (i < curTime) {
            //past
            //console.log(i);
            $("#" + i).attr("style", "background-color:lightpink");
            $("#" + i).attr("readonly", true);
        } else if (i === curTime) {
            //present
            // console.log(i);
            $("#" + i).attr("style", "background-color:green");
        } else {
            //future
            //console.log(i);
            $("#" + i).attr("style", "background-color:white");
        }
    }
}

$(".rowBtn").on("click", function() {
    //Each btn when clicked
    //get the value of its parent input
    //then saves it to localstorige
    var currentTime = $(this).parent().attr("id");
    //console.log($($(this).parent().children()[1]).val());
    var dayPlan = $($(this).parent().children()[1]).val();
    localStorage.setItem(currentTime, dayPlan);
});
$(".time").each(function() {
    // console.log($(this));
    var currentTime = $(this).parent().attr("id");
    //console.log($(this).parent().attr("id"));

    var dayPlan = localStorage.getItem(currentTime);
    $(this).val(dayPlan);
    //console.log($(this).val(dayPlan));
});