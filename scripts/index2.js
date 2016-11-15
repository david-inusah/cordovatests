/**
 * Created by owner on 11/15/2016.
 */

(function () {

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        document.getElementById("camera").onclick = function () {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,
                destinationType: destinationType.DATA_URL,
                saveToPhotoAlbum: true,
                allowEdit: true
            });
        }
    };

    function onPhotoDataSuccess(imageData) {

    }

    function onFail(message) {

    }

    function clearCache() {

    }

})();