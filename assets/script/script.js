var curDate = moment().format("MM/DD/YYYY");
$("#theDate").append(curDate);
styleTime();

function styleTime() {
    var curTime = moment().format("h A");
    $("#theDate").append(`<br>${curTime}`);
    curTime = moment().format("H");
    for (i = 0; i <= 18; i++) {
        if (i < curTime) {
            //past
        } else if (i === curTime) {
            //present
        } else {
            //future
        }
    }
}