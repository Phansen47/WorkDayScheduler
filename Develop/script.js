  $(function () {
    // Display the current date in the header
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  
    // Get the current hour using Day.js
    var currentHour = dayjs().hour();
  
    // Iterate through each time block
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var blockHour = parseInt(timeBlockId.split("-")[1]);
  
      // Apply past, present, or future classes based on the current hour
      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
  
      // Retrieve and set user input from local storage
      var savedInput = localStorage.getItem(timeBlockId);
      if (savedInput) {
        $(this).find(".description").val(savedInput);
      }
    });
  
    // Add a click event listener for the save buttons
    $(".saveBtn").on("click", function () {
      var timeBlockId = $(this).parent().attr("id");
      var userInput = $(this).siblings(".description").val();
      localStorage.setItem(timeBlockId, userInput);
    });
  });
  