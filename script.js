//provides day in header area
function updateTime () {
var currentDay = dayjs()
currentDay = dayjs().format('MMM D, YYYY, hh:mm:ss a')
$('#currentDay').text(currentDay); 
};
setInterval(updateTime, 1000)

//allows click to save text and time locally
 $(document).ready(function() {  

  $(".saveBtn").on("click", function () {
  
    let description = $(this).siblings(".description").val();
    let timeStamp = $(this).parent(".time-block").attr("id");
    localStorage.setItem(timeStamp, description);

  })
  // iterates over time-blocks and compares time block againt current time, and then rmoves classes, leaving the appropriate .css style
  function schedule() {
  var time = dayjs().hour();

  $(".time-block").each(function () { 
  var blockHour = $parseInit($(this).attr("id").split("hour-")[1]);

  if (blockHour < time) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (blockHour === time) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
})
 }

 schedule();
});
