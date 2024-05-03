'use strict';

var geoController = (function () {
    // ******************************
    // Private Variables
    // ******************************

    let position = null;
    let lastMessage = null;
    let lastError = null;
    let successCallback = null;
    let errorCallback = null;
    let options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
    };

    // ******************************
    // Private Functions
    // ******************************

    function getCurrentLocation(success, error) {
        // Set callbacks
        successCallback = success;
        errorCallback = error;

        // Reset private variables
        position = null;
        lastError = null;
        lastMessage = "";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, locationError, options);
        }
        else {
            displayError("Update your browser to use Geolocation.");
        }
    }

    function setPosition(pos) {
        position = pos;

        if (successCallback) {
            successCallback(position);
        }
    }

    function locationError(error) {
        lastError = error;

        switch (error.code) {
            case error.PERMISSION_DENIED:
                msg = "User does not want to display their location.";
                break;
            case error.POSITION_UNAVAILABLE:
                msg = "Can't determine user's location";
                break;
            case error.TIMEOUT:
                msg = "The request for geoloation information timed out";
                break;
            case error.UNKNOW_ERROR:
                msg = "An unknown error occurred."
                break;
        }
        if (errorCallback) {
            errorCallback(lastMessage);
        }
    }

    // ******************************
    // Public Functions
    // ******************************

    return {
        "getCurrentLocation": function (success, error) {
            getCurrentLocation(success, error);
        },
        "getPosition": function () {
            return position;
        },
        "getLastError": function () {
            return lastError;
        },
        "getLastMessage": function () {
            return lastMessage;
        },
        "getOptions": function () {
            return options;
        },
        "setOptions": function (opts) {
            options = opts;
        },
        
    }
})();