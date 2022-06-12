function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    // console.log(hr);
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var utchr = d.getUTCHours();
    // console.log(utchr);
    if (utchr < hr) {
        utchr += 24;
    }
    var timeDiff = utchr - hr;

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // Time zone

    // console.log(hr);
    var adjTimeDiff = Math.abs(timeDiff);
    // console.log(adjTimeDiff);
    var timeZone;

    if (adjTimeDiff == 4) {
        timeZone = "ET";
    } else if (adjTimeDiff == 5) {
        timeZone = "CT";
    } else if (adjTimeDiff == 6) {
        timeZone = "MT";
    } else if (adjTimeDiff == 7) {
        timeZone = "PT";
    } else {
        timeZone = "unknown";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    document.getElementById("clock").innerText = time;

    setInterval(currentTime, 3000);
}
currentTime();