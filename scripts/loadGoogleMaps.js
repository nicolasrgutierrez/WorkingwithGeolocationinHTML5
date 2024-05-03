'use strict';

function loadGoogleMaps() {
    // Set your Google Maps key here
    let key = "AIzaSyBZMfIsCujaUp5W5XFRL_Y2AVx-e7wUwOw";
    // Set your callback function here
    let callback = "gmapController.initialize";

    // Create a new <script> element
    let elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.src = "https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=" + callback;

    // Append new element to the end of the body
    document.body.appendChild(elem);
}