"use strict";

//link momoent to page
var currentDay = $("#currentDay");
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.text(rightNow);
var currentTime = moment().format("H");
var container = $('#container');

var appts = JSON.parse(localStorage.getItem('appt')) || [];
var ids = JSON.parse(localStorage.getItem('id')) || [];

var apptObj = {};

ids.forEach((id, i) => apptObj[id] = appts[i]);
console.log(apptObj);

//have time pass grey out
//moment#isBefore('#8:00AAM'); // true
var times = ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
;
for (var i = 0; i < times.length; i++) {
  var x = (8 + i)
  var row = $('<form>')
    .addClass('row')
    .appendTo($(container));

  var col1 = $('<div>')
    .addClass('col-1 hour')
    .html(times[i])
    .appendTo($(row));

  var col10 = $("<input>")
    .addClass('col-10 input' + i)
    .attr('id', i)
    .attr('name', i)
    .attr('value', apptObj[i])
    .attr('type', 'text')
    .appendTo($(row));

  var btn = $('<button type="sumbit" >')
    .addClass('saveBtn btn' + i)
    .addClass('col-1')
    .attr('id', "btn" + i)
    .attr('value', i)
    .appendTo($(row));

  if (currentTime > x) {
    $(col10).addClass('past');
  }
  else if (currentTime < x) {
    $(col10).addClass('future');
  }
  else {
    $(col10).addClass('present');
  }
}
setInterval(function () {
  location.reload();
}, (1000 * 60) * 15);

//link btn to input and save

$("form").submit(function (event) {
  event.preventDefault();
  var x = $(this).serializeArray();
  var id = (x[0].name);
  var appt = (x[0].value);
  ids.push(id);
  appts.push(appt);
  localStorage.setItem('appt', JSON.stringify(appts));
  localStorage.setItem('id', JSON.stringify(ids));
});
/*
console.log($(this).serializeArray());
$('#btn0').on('click', function (event) {
  event.preventDefault();
  var input = $('#input0')
    .val()
    .trim();
  localStorage.setItem('input0', input)
})
$('#btn1').on('click', function (event) {
  event.preventDefault();
  var input = $('#input1')
    .val()
    .trim();
  localStorage.setItem('input1', input)
})
$('#btn2').on('click', function (event) {
  event.preventDefault();
  var input = $('#input2')
    .val()
    .trim();
  localStorage.setItem('input2', input)
})
$('#btn3').on('click', function (event) {
  event.preventDefault();
  var input = $('#input3')
    .val()
    .trim();
  localStorage.setItem('input3', input)
})
$('#btn4').on('click', function (event) {
  event.preventDefault();
  var input = $('#input4')
    .val()
    .trim();
  localStorage.setItem('input4', input)
})
$('#btn5').on('click', function (event) {
  event.preventDefault();
  var input = $('#input5')
    .val()
    .trim();
  localStorage.setItem('input5', input)
})
$('#btn6').on('click', function (event) {
  event.preventDefault();
  var input = $('#input6')
    .val()
    .trim();
  localStorage.setItem('input6', input)
})
$('#btn7').on('click', function (event) {
  event.preventDefault();
  var input = $('#input7')
    .val()
    .trim();
  localStorage.setItem('input7', input)
})
$('#btn8').on('click', function (event) {
  event.preventDefault();
  var input = $('#input8')
    .val()
    .trim();
  localStorage.setItem('input8', input)
})
$('#btn9').on('click', function (event) {
  event.preventDefault();
  var input = $('#input9')
    .val()
    .trim();
  localStorage.setItem('input9', input)
})*/
/*
 if (time._i > times._i[i]) {
    $(col10).addClass('past')
  }
  else if (time._i < times._i[i]) {
    $(col10).addClass('future')
  }
  else {
    $(col10).addClass('present')
  }
var block = $(col1).find("div").text().trim();
var time = moment(block, "L").set("hour")
if (moment().isAfter(time)) {
  $(col10).addClass("past");
}
else if (moment().isBefore(time)) {
  $(col10).addClass("future");
}
else {
  $(col10).addClass("present");
};


*/