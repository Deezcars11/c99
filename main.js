var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() 
{
     recognition.start();
    
}
recognition.onresult=function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript.toLowerCase();


    console.log(content);
    if(content=="selfie"){
        speak(); 
    }
   

}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").innerHTML;
    var utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height: 250,
    image_format: "png",
    png_quality: 90
})
;
