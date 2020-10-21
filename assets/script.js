

//link momoent to page
var currentDay = document.getElementById("currentDay");
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.innerText = rightNow;
var currentTime = moment().format("h:mm:ss a");


//have time pass grey out


$("#8time").click(function () {
  $("#8quarterHour").toggle();
})


//link btn to input and save
