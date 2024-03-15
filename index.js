let string = "hello";
function shout(str) {
    return str.toUpperCase();
}
console.log(shout(string)); 

function shouts(str) {
    return str.toLowerCase();
}
console.log(shouts(string));

function whisper(str) {
    return str.toLowerCase();
}

console.log(whisper(string));

function logShout(str) {
    console.log(str.toUpperCase());
}

logShout(string);

function  logWhisper(str) {
    console.log(str.toLowerCase());
}

logWhisper();

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }     else if (string === string.toUpperCase()) {
        return  "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
 }
}