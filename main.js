Webcam.set({
    height: 300,
    width: 350,
    img_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("resultRow").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}