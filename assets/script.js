

//link momoent to page
var currentDay = $("#currentDay");
var rightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDay.text(rightNow);
var currentTime = moment().format("h:mm a");
var container = $('#container');
var inputs = JSON.parse(localStorage.getItem('input')) || []
//have time pass grey out
//moment#isBefore('#8:00AAM'); // true

var times = moment(['08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm']);


for (i = 0; i < times._i.length; i++) {

  var row = $('<form>')
    .addClass('row')
    .appendTo($(container));

  var col1 = $('<div>')
    .addClass('col-1 ' + 'hour')
    .html(times._i[i])
    .appendTo($(row))
  var col10 = $("<input>")
    .addClass('col-10')
    .attr('id', "input" + i)
    .appendTo($(row))

  var btn = $('<button>')
    .addClass('saveBtn')
    .addClass('col-1')
    .appendTo($(row))
    .attr('id', "btn" + i)
    .attr('value', i);


  var time = moment(currentTime).set('hh');
  times.set('hh')
  if (time._i > times._i[i]) {
    $(col10).addClass('past')
  }
  else if (time._i < times._i[i]) {
    $(col10).addClass('future')
  }
  else {
    $(col10).addClass('present')
  }
}






/*

$('#input' + i).attr('value', inputs)
$(btn + i).on("click", function () {
  event.preventDefault();
  var input = $('#input' + i)
    .val(i)
    .trim();
  localStorage.setItem('input', JSON.stringify(input));
  $(col10).text(inputs + i);
});
link btn to input and save
$('#input0').attr('value', input0)
$(btn0).on("click", function () {
  event.preventDefault();
  var input0 = $('#input0')
    .val()
    .trim();
  localStorage.setItem('input0', JSON.stringify(input0));
  $(col10).text(input0);
});

$('#input1').attr('value', input1)
$(btn1).on("click", function () {
  event.preventDefault();
  var input1 = $('#input1')
    .val()
    .trim();
  localStorage.setItem('input1', JSON.stringify(input1));
  $(col10).text(input1);
});
$('#input2').attr('value', input2)
$(btn2).on("click", function () {
  event.preventDefault();
  var input2 = $('#input2')
    .val()
    .trim();
  localStorage.setItem('input2', JSON.stringify(input2));
  $(col10).text(input2);
});
$('#input0').attr('value', inputs)
$(btn0).on("click", function () {
  event.preventDefault();
  var input0 = $('#input0')
    .val()
    .trim();
  localStorage.setItem('input0', JSON.stringify(input));
  $(col10).text(inputs);
});

 var block = $(col1).find("div").text().trim();

  // convert to moment object at 5:00pm
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