// Higher Order Function

document.addEventListener("keypress", respondToKey(event));

function respondToKey(event) {
  console.log("Key press was detected");
}

function aontherAddEventListener(typeOfEvent, callback) {
  var eventThatHappend = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };
  if (eventThatHappend.eventType === typeOfEvent) {
    callback(eventThatHappend);
  }
}


