
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
    {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id=""capture_image src = "'+data_uri+'"/>';
    });

}

console.log('ml5 vesion',ml5.vesion);

classifer = ml5.classifer('https://teachablemachine.withgoogle.com/models/eeZrUaBvh/',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

 function check()
{
    img = document.getElementById('capture_image')
    classifer.classfy(img , gotResult);
}

function gotresult(error , result) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
     document.getElementById("result_object_name").innerHTML=result[0].lable
     document.getElementById("result_object_accurancy").innerHTML=result[0].confidene.ToFixed(3);
    }
}