/*
* Facebook Photools 1.0
* Copyright 2013, Diéssica (github.com/diessicode)
* Description: Discover original size and source of Facebook photos
*/

(function(){
    // Get original photo form
    var originalForm = document.originalForm;
    
    originalForm.onsubmit = function originalSize() {
        // Get photo URL
        var imgUrl       = originalForm.imgUrl.value,
            sliceP1      = imgUrl.lastIndexOf("/"),
            sliceP2      = imgUrl.lastIndexOf("_"),
            idUrl        = imgUrl.slice(sliceP1, sliceP2);
        // Open photo in original size
        open("https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash3" + idUrl + "_n.jpg");
    };
    
    // Get photo source form
    var sourceForm = document.sourceForm;
    
    sourceForm.onsubmit = function photoSource() {
        // Get photo URL
        var imgUrl     = sourceForm.imgUrl.value,
        // Get photo ID
            sliceP1    = imgUrl.indexOf("_") + 1,
            sliceP2    = imgUrl.indexOf("_", sliceP1),
            idUrl      = imgUrl.slice(sliceP1, sliceP2);
        // Open photo source
        open("https://facebook.com/photo.php?fbid=" + idUrl);
    };
})();
