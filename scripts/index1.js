/**
 * Created by owner on 11/15/2016.
 */
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function () {
        //app.receivedEvent('deviceready');
        //pictureSource = navigator.camera.PictureSourceType;
        //destinationType = navigator.camera.DestinationType;
        //decode function

        //Barcode start
        $(function () {
            "use strict";
            $("#barcode").click(function () {
                //alert("clicked");
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        alert("Information: " + result.text + "\n" +
                            "Format: " + result.format + "\n");
                    },
                    function (error) {
                        alert(error);
                    }
                );
                //end
            });
        });
        //Barcode end

        //Geolocation start
        var geoloc = function (position) {
            var latitude = position.coords.latitude,
                longitude = position.coords.longitude,
                coords = latitude + ', ' + longitude;

            document.getElementById('google-map').setAttribute('src', 'http://maps.google.co.uk?q=' + coords + '&z=60&output=embed');

        }

        //get location function
        document.getElementById("geolocator").onclick = function () {
            navigator.geolocation.getCurrentPosition(geoloc);
            return false;
        }
        //Geolocation end

        //document.getElementById("camera").onclick = function () {
        //    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        //        quality: 50,
        //
        //        destinationType: destinationType.DATA_URL
        //    });
        //}
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};