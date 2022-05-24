// array to store photos
var photos = [];
// element to store the image names
var fileNames = [];
// store html list that contains an image
var imageList = [];
// store the assembled image list codes
var image;
// open list tag
var openList = "<li class='partner'>";
// close list tag
var closeList = "</li>";

// create a loop to create 6 imgs starting with index of 0
for (var i = 0; i < 6; i++) {
    // <li id="photo"><img src="images/winterland2.jpg"></li>
    fileNames.push("partner-" + (i + 1));
    photos.push("<img src='images/partners/" + fileNames[i] + ".png'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList;