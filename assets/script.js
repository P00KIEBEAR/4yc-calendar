

//link momoent to page
var currentDay = document.getElementById("currentDay");
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.innerText = rightNow;
var currentTime = moment().format("h:mm ");
var container = document.getElementById('container');
var inputs = JSON.parse(localStorage.getItem('inputs')) || []
//have time pass grey out
//moment#isBefore('#8:00AAM'); // true

var times = moment(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']);




for (i = 0; i < times._i.length; i++) {

  var row = document.createElement('div');
  $(row).addClass('row')
    .appendTo($(container));
  var col1 = document.createElement('div');
  $(col1).addClass('col-1 ' + 'hour')
    .html(times._i[i])
    .appendTo($(row))
  var col10 = document.createElement("input");
  $(col10).addClass('col-10')
    .attr('value', i)
    .attr('id', "input")
    .text(inputs[i])
    .appendTo($(row))
  var col1 = document.createElement('div');
  $(col1).addClass('col-1')
    .appendTo($(row))
  var btn = document.createElement('button')
  $(btn).addClass('saveBtn')
    .appendTo($(col1))
    .attr('id', "btn");
  if (moment().isAfter(times._i[i], "HH")) {
    $(col10).addClass('past')
  }
  else {
    $(col10).addClass('future')
  }
}
//link btn to input and save

$("#btn").on("click", function () {
  var input = $('#input')
    .val()
    .trim();
  localStorage.setItem('inputs', JSON.stringify(input));
  console.log(input);
});
