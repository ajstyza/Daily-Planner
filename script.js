//provides day in header area
function updateTime () {
var currentDay = dayjs()
currentDay = dayjs().format('MMM D, YYYY, hh:mm:ss a')
$('#currentDay').text(currentDay); 
};
setInterval(updateTime, 1000)

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
 // $(document).ready(function() {  })


  $(".saveBtn").on("click", function () {
  
    let description = $(this).siblings(".description").val();
    let timeStamp = $(this).parent(".time-block").attr("id");
    localStorage.setItem(timeStamp, description);

  });
  
//});

var time = dayjs().format("hh:mm")
$(".time-block").each(function () { 
var hour = $(this).parseInit($('#id'));

 if (time === hour) {
  $(".time-block").remove("past", "future")
 }
  else if (time > hour) {
    $(".time-block").remove("present", "future")
  
  }
  else (time < hour) {
    $(".time-block").remove("past", "present")

 });
