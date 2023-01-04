function clickme() {
    let wake = document.getElementById("goodMorning").value;
    let lunch = document.getElementById("goodAfternoon").value;
    let nap = document.getElementById("goodEvening").value;
    let night = document.getElementById("goodNight").value;
    const date = new Date();
    let hrs = date.getHours();

    if (hrs == wake) {
        document.getElementsByClassName("child3").innerText = "Good Morning !! Wake Up !! ";
        document.getElementById("image").src = "good_morning.png";
        document.getElementById("image").style.borderRadius = "2vw";
        document.getElementById("image").style.border = "3px dotted lime;";
        document.getElementsByClassName("child7").innerText = "GRAB SOME HEALTHY BREAKFAST !!! ";
    } if (hrs == lunch) {
        document.getElementsByClassName("child3")[0].innerText = "Good Afternoon !! Have Some Lunch ";
        document.getElementById("image").src = "good_afternoon.png";
        document.getElementById("image").style.borderRadius = "2vw";
        document.getElementById("image").style.border = "3px dashed lime;";
        document.getElementsByClassName("child7")[0].innerText = "Let's Have Some Lunch !! ";
    } if (hrs == nap) {
        document.getElementsByClassName("child3")[0].innerText = "Good Evening !!!";
        document.getElementById("image").src = "good_evening.png";
        document.getElementById("image").style.borderRadius = "2vw";
        document.getElementById("image").style.border = "3px solid lime;";
        document.getElementsByClassName("child7")[0].innerText = "Stop Yawning, Get Some Tea.. It's Just Evening  !! ";
    } if (hrs == night) {
        document.getElementsByClassName("child3")[0].innerText = "Good Night !! Take Some Sleep";
        document.getElementById("image").src = "good_night.png";
        document.getElementById("image").style.borderRadius = "2vw";
        document.getElementById("image").style.border = "3px dashed aqua;";
        document.getElementsByClassName("child7")[0].innerText = " Close Your Eyes and Go to Sleep !! ";
    } if ((wake == lunch) && (lunch == nap) && (nap == night) && (night == wake)) {
        document.getElementsByClassName("child3")[0].innerText = "Good Morning!! Wake Up !! ";
        document.getElementById("image").src = "good_morning.png";
        document.getElementById("image").style.borderRadius = "2.2vw";
        document.getElementById("image").style.border = "3px dashed lime;";
        document.getElementsByClassName("child7")[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!! ";
    }
    // } if (wake == lunch) {
    //     document.getElementsByClassName("child3")[0].innerText = "Good Morning!! Wake Up !! ";
    //     document.getElementById("image").src = "good_morning.png";
    //     document.getElementById("image").style.borderRadius = "2.2vw";
    //     document.getElementById("image").style.border = "3px dashed lime;";
    //     document.getElementsByClassName("child7")[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!! ";
    // } if (lunch == nap) {
    //     document.getElementsByClassName("child3")[0].innerText = "Good Afternoon !! Have Some Lunch ";
    //     document.getElementById("image").src = "good_afternoon.png";
    //     document.getElementById("image").style.borderRadius = "2vw";
    //     document.getElementById("image").style.border = "3px dashed lime;";
    //     document.getElementsByClassName("child7")[0].innerText = "Let's Have Some Lunch !! ";
    // } if (nap == night) {
    //     document.getElementsByClassName("child3")[0].innerText = "Good Evening !!!";
    //     document.getElementById("image").src = "good_evening.png";
    //     document.getElementById("image").style.borderRadius = "2vw";
    //     document.getElementById("image").style.border = "3px solid lime;";
    //     document.getElementsByClassName("child7")[0].innerText = "Stop Yawning, Get Some Tea.. It's Just Evening  !! ";
    // } 
    // if (wake == night) {
    //     document.getElementsByClassName("child3")[0].innerText = "Good Morning!! Wake Up !! ";
    //     document.getElementById("image").src = "good_morning.png";
    //     document.getElementById("image").style.borderRadius = "2.2vw";
    //     document.getElementById("image").style.border = "3px dashed lime;";
    //     document.getElementsByClassName("child7")[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!! ";
    // }
    function WakeUpTime() {
        let wakePlusOneHour = parseInt(wake) + 1; // let wake = document.getElementById("goodMorning").value; => "10" ==> 10 (number)
        if (wake < 12) {
            if (wake < 11) return wake + " AM - " + wakePlusOneHour + " AM";
            else return wake + " AM - " + wakePlusOneHour + " PM";
        } else {
            wakePlusOneHour -= 12; // wakePlusOneHour = wakePlusOneHour - 12;
            wake -= 12; // wake = wake - 12
            if (wake < 11) return wake + " PM - " + wakePlusOneHour + " PM";
            else return wake + " PM - " + wakePlusOneHour + " AM";
        }
    }
    function LunchTime() {
        let lunchPlusOneHour = parseInt(lunch) + 1;// let lunch = document.getElementById("goodAfternoon").value;
        if (lunch < 12) {
            if (lunch < 11) return lunch + " AM - " + lunchPlusOneHour + " AM";
            else return lunch + " AM - " + lunchPlusOneHour + " PM";
        } else {
            lunchPlusOneHour -= 12; // lunchPlusOneHour = lunchPlusOneHour - 12;
            lunch -= 12; // lunch = lunch - 12;
            if (lunch < 11) return lunch + " PM - " + lunchPlusOneHour + " PM";
            else return lunch + " PM - " + lunchPlusOneHour + " AM";
        }
    }
    function NapTime() {
        let napPlusOneHour = parseInt(nap) + 1; // let nap = document.getElementById("goodEvening").value;
        if (nap < 12) {
            if (nap < 11) return nap + " AM - " + napPlusOneHour + " AM";
            else return nap + " AM - " + napPlusOneHour + " PM";
        } else {
            napPlusOneHour -= 12; // napPlusOneHour = napPlusOneHour -12
            nap -= 12; // nap = nap - 12;
            if (nap < 11) return nap + " PM - " + napPlusOneHour + " PM";
            else return nap + " PM - " + napPlusOneHour + " AM";
        }
    }
    function NightTime() {
        let nightPlusOneHour = parseInt(night) + 1; // let night = document.getElementById("goodNight").value;
        if (night < 12) {
            if (night < 11) return night + " AM - " + nightPlusOneHour + " AM"
            else return night + " AM - " + nightPlusOneHour + " PM"
        } else {
            nightPlusOneHour -= 12; // nightPlusOneHour = nightPlusOneHour - 12;
            night -= 12; // night = night - 12;
            if (night < 11) return night + " PM - " + nightPlusOneHour + " PM";
            else return night + " PM - " + nightPlusOneHour + " AM";
        }
    }
    document.getElementById("WakeUpTime").innerHTML = WakeUpTime();
    document.getElementById("LunchTime").innerHTML = LunchTime();
    document.getElementById("NapTime").innerHTML = NapTime();
    document.getElementById("NightTime").innerHTML = NightTime();
}
function clk() {
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let clock;
    if (hrs > 12) {
        clock = "PM"
        hrs -= 12;
    } else clock = "AM";

    hrs < 10 ? hrs = "0" + hrs : hrs += 0;
    mins < 10 ? mins = "0" + mins : mins += 0;
    secs < 10 ? secs = "0" + secs : secs += 0;

    const hoursSlot = document.getElementById("getHour");
    hoursSlot.innerHTML = hrs + " : ";

    const minsSlot = document.getElementById("getMin");
    minsSlot.innerHTML = mins + " : ";

    const secsSlot = document.getElementById("getSec");
    secsSlot.innerHTML = secs;

    const meridianSlot = document.getElementById("clock");
    meridianSlot.innerHTML = clock;
}
setInterval(() => {
    clk();
}, 1000);

const hover = document.getElementsByClassName('btn')[0];

// 👇️ Change text color on mouseover
hover.addEventListener('mouseover', function handleMouseOver() {
    hover.innerHTML = "It's Party Time !!!";
});

// 👇️ Change text color back on mouseout
hover.addEventListener('mouseout', function handleMouseOut() {
    hover.innerHTML = "Set Alarm";
});
