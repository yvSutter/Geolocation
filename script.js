let h2 = document.querySelector("h2");

function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;
};
function error(errorLocation) {
    console.log(errorLocation);
}
var watchID = navigator.geolocation.watchPosition(success, error, {

});

//navigator.geolocation.clearWatch(watchID)