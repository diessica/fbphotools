/*
* Facebook Photools 1.0
* Copyright 2013, Diéssica (github.com/diessicode)
* Description: Discover original size and source of Facebook photos
*/

function originalSize() {
    var originalForm = document.originalForm,
        imgUrl       = originalForm.imgUrl.value,
        sliceP1      = imgUrl.lastIndexOf("/"),
        sliceP2      = imgUrl.lastIndexOf("_"),
        idUrl        = imgUrl.slice(sliceP1, sliceP2);
    open("https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash3" + idUrl + "_n.jpg");
}

function photoSource() {
    var sourceForm = document.sourceForm,
        imgUrl     = sourceForm.imgUrl.value,
        sliceP1    = imgUrl.indexOf("_") + 1,
        sliceP2    = imgUrl.indexOf("_", sliceP1),
        idUrl      = imgUrl.slice(sliceP1, sliceP2);
    open("https://facebook.com/photo.php?fbid=" + idUrl);
}
