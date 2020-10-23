

//link momoent to page
var currentDay = $("#currentDay");
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.text(rightNow);
var currentTime = moment().format("h a");
var container = $('#container');
var input0 = localStorage.getItem('input0');
var input1 = localStorage.getItem('input1');
var input2 = localStorage.getItem('input2');
var input3 = localStorage.getItem('input3');
var input4 = localStorage.getItem('input4');
var input5 = localStorage.getItem('input5');
var input6 = localStorage.getItem('input6');
var input7 = localStorage.getItem('input7');
var input8 = localStorage.getItem('input8');
var input9 = localStorage.getItem('input9');
//have time pass grey out
//moment#isBefore('#8:00AAM'); // true

var times = ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];


for (i = 0; i < times.length; i++) {

  var row = $('<form>')
    .addClass('row')
    .appendTo($(container));

  var col1 = $('<div>')
    .addClass('col-1 hour')
    .html(times[i])
    .appendTo($(row))
  var col10 = $("<input >")
    .addClass('col-10 input' + i)
    .attr('id', "input" + i)

    .appendTo($(row))

  var btn = $('<button >')
    .addClass('saveBtn btn' + i)
    .addClass('col-1')
    .appendTo($(row))
    .attr('id', "btn" + i)
    .attr('value', i);



  if (moment(times[i]).isAfter(currentTime)) {
    $(col10).addClass("future");
  }
  else if (moment(times[i]).isBefore(currentTime)) {
    $(col10).addClass("past");
  }
  else {
    $(col10).addClass("present");
  };

  $('#input0').val(input0)
  $('#input1').val(input1)
  $('#input2').val(input2)
  $('#input3').val(input3)
  $('#input4').val(input4)
  $('#input5').val(input5)
  $('#input6').val(input6)
  $('#input7').val(input7)
  $('#input8').val(input8)
  $('#input9').val(input9)
}
//link btn to input and save

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
})
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

setInterval(function () {
  $("input").each(function (index, input) {
    auditTask(hour);
  });
  //check upcoming due dates every 30 minutes
}, (1000 * 60) * 30);
*/