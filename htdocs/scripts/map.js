function beginMap() {
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(pos){
            initMap(pos.coords.latitude, pos.coords.longitude);
        });
    }
    else
    {
        initMap(-25.363, 131.044);
    }
}

function initMap(latitud, longitud) {
    // El mapa en si
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:Number(latitud), lng:Number(longitud)},
        zoom: 15,
    });

    // Crear la finestra informativa per la posició
    var posMark = new google.maps.InfoWindow({
        position: {lat:Number(latitud), lng:Number(longitud)},
        content: "Your Position"
    });

    $("#route_in_lat").val(latitud);
    $("#route_in_lng").val(longitud);

    posMark.open(map);

    map.addListener('click', function(mapsMouseEvent) {
        posMark.close();

        posMark = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
            content: "Your Position"
        });
        posMark.open(map);

        $("#route_in_lat").val(mapsMouseEvent.latLng.lat);
        $("#route_in_lng").val(mapsMouseEvent.latLng.lng);
    });
}
