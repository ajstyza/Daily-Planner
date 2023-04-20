//provides day in header area


//function updateTime() { // setInterval throws errors every second rather than updating page
var currentDay = dayjs()
currentDay = dayjs().format('MMM D, YYYY, hh:mm:ss a')
$('#currentDay').text(currentDay); 
//setInterval(currentDay, 1000);
// }
//updateTime();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  $(document).ready(function() {  })

 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $(".saveBtn").on("click", function () {
    //console.log("button clicked"); 

     // var description = document.getElementsByClassName("description");
     
    description = $(".description").val();

    console.log(description); });
   // localStorage requires two arguments, one of which is the "key"
    //localStorage.setItem(".description", description);});
  
  

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


var time = dayjs().format("hh:mm")
$(".time-block").each(function () { 
var hour = $("div.id > div").parseInit($('#id'));
console.log(); });
/*
  if time === hour 
    $("div.container-fluid > div").css("background-color", "red");

  if time > hour
    $("div.container-fluid > div").css("background-color", "grey");

  if time < hour 
    $("div.container-fluid > div").css("background-color", "green");

  
  rootEl = $(".container=fluid");

  rootEl.children('div').children().css('backround-color', 'red');

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
*/