var curDate = moment().format("MM/DD/YYYY");
$("#theDate").append(curDate);
styleTime();

function styleTime() {
    var curTime = moment().format("h A");
    $("#theDate").append(`<br>${curTime}`);
    curTime = moment().format("H");
    curTime -= 9;
    console.log(curTime);
    for (let i = 0; i <= 18; i++) {
        if (i < curTime) {
            //past
            console.log(i);
            $("#" + i).attr("style", "background-color:lightpink");
        } else if (i === curTime) {
            //present
            console.log(i);
            $("#" + i).attr("style", "background-color:green");
        } else {
            //future
            console.log(i);
            $("#" + i).attr("style", "background-color:white");
        }
    }
}