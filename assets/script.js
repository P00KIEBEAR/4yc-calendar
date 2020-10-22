

//link momoent to page
var currentDay = document.getElementById("currentDay");
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.innerText = rightNow;
var currentTime = moment().format("h:mm a");
var container = document.getElementById('container');

//have time pass grey out
//moment#isBefore('#8:00AAM'); // true

var times = ['08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm']

for (i = 0; i < times.length; i++) {
  var row = document.createElement('div');
  $(row).addClass('row')
    .appendTo($(container));
  var col1 = document.createElement('div');
  $(col1).addClass('col-1 ')
    .html(times[i])
    .appendTo($(row))
  var col10 = document.createElement("input");
  $(col10).addClass('col-10')
    .appendTo($(row))
  var col1 = document.createElement('button');
  $(col1).addClass('col-1 saveBnt')

    .appendTo($(row))



}
//link btn to input and save
