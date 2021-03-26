var rootEl = $("#root");
var HourBackground = $("textarea");
var content = $("description");
var Save = $("fa-save");


//Page Clock
function Time() {
    var RightNow = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(RightNow);
}
setInterval(Time, 1000);

//Time Color selector
var today = moment();
var CurrentHour = today.format("H");
function UpdateTimeColor() {
    var startingHour = 9;
    for(i=0; i < 9; i++) {
        if (startingHour < CurrentHour) {
            HourBackground.eq(i).addClass("past");
        } else if (startingHour == CurrentHour) {
            HourBackground.eq(i).addClass("present");
        } else if (startingHour > CurrentHour) {
            HourBackground.eq(i).addClass("future");
        }
        startingHour++;
        rootEl.append(HourBackground);
    }
}

function SaveData () {
    // console.log("Hello World");
    var userInput = ($(this)).siblings(".description").val();
    var inputId = ($(this)).parent("div").attr("id");
    window.localStorage.setItem(inputId , userInput);

    console.log(inputId);
    console.log(userInput);
};

function loadSave() {
    var Hours = [
        "hour-9", //0
        "hour-10", 
        "hour-11", 
        "hour-12", 
        "hour-13", 
        "hour-14", 
        "hour-15", 
        "hour-16", 
        "hour-17", //8
    ];
    for(i=0; i < 9; i++) {
        var LastInput = window.localStorage.getItem(Hours[i]);
        if(LastInput == null) return;
        console.log(LastInput); //display on screen
        $("#" + Hours[i] + " > textarea").val(LastInput);
    };
    
}

content.text("Hello");
UpdateTimeColor();
loadSave()
$(".saveBtn").on("click", SaveData);







