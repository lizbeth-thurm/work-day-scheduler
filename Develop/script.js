// Show current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Function to change color of time blocks
function changeColor() {

    var currentTime = moment().hour();

    $(".time-block").each(function () {

        var timeBlockHour = parseInt($(this).attr("id"));

        if (timeBlockHour < currentTime) {
            $(this).addClass("past");
        } else if (timeBlockHour === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }

    })

};

// Function to save text to local storage on button click
$(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);

});

// Function to get text from local storage
function getText() {

    $(".time-block").each(function () {

        var time = $(this).attr("id");
        var text = localStorage.getItem(time);

        $(this).children(".description").val(text);

    })

}

// Call functions
changeColor();
getText();
