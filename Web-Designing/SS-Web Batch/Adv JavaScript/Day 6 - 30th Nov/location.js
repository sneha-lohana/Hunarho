// Code to get the current GPS position of your device. Returns Latitude and longitude.
navigator.geolocation.getCurrentPosition((position)=>{console.log("Current Position=>",position)},
(err)=>{
    console.log("Error=>",err);
});

// Access Video and audio of a browser
// Step 1: video tag
// Step 2: navigator.mediaDevices

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
}).then((stream) => {
    const video = document.getElementById("video");
    video.srcObject = stream;
    console.log(stream);
}).catch((err)=>{
    console.log(err);
});