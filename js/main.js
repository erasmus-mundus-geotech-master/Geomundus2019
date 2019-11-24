function toggle(a) {
    var x = a;
    var b = a.innerHTML;
    if (x.nextElementSibling.style.display === 'none') {
        b = b.split('+');
        b = "-" + b[1];
        a.innerHTML = b;
        x.nextElementSibling.style.display = 'block';
    } else {
        b = b.split('-');
        b = "+" + b[1];
        a.innerHTML = b;
        x.nextElementSibling.style.display = 'none';
    }
}

var map;
var markers;

var Ujiloc = new google.maps.LatLng(39.9937, -0.0672);
var ValenciaAirportLoc = new google.maps.LatLng(39.4921903, -0.4743740);
var BarcelonaAirportLoc = new google.maps.LatLng(41.3038545, 2.0729609);
var MadridAirportLoc = new google.maps.LatLng(40.505776, -3.566914);


var imageUJI = {
    url: 'images/worldwide.png'
};

var imageAirport = {
    url: 'images/airport.png'
};

var ujiTooltip = 'Conference Venue: Universitat Jaume I- Espaitec 2'

var ValenciaAirport;
var BarcelonaAirport;
var MadridAirport;
var CastellonTrain;
var ValenciaTrain;
var BarcelonaTrain;
var MadridTrain;

var university;
var Dinner;

var infoUji
var infoValenciaAirport
var infoUji
var infoDinnerLoc

var contentUji = '<div id = "content" style = "color:#4a87d3" > ' +
    '<h2 style="color:#4a87d3">Jaume I University </h2>' +
    '<p align="left" style="color:#4a87d3">' +
    '<b style="color:#4a87d3">Address: </b> Avenida de Vicent Sos Baynat, s/n, 12071 Castellón <br>' +
    '<b style="color:#4a87d3">Teléfono: </b> +34 902320320<br>' +
    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.uji.es">' +
    'https://www.uji.es</a></p>' +
    '</div>';

align = "left"

function clearObjectFromMap(object) {
    if (object != null) {
        object.setMap(null);
    }
}

function clearInforWindows() {
    if (infoUji) infoUji.close();
    if (infoValenciaAirport) infoValenciaAirport.close();
    if (infoUji) infoUji.close();
    if (infoDinnerLoc) infoDinnerLoc.close();
}

function setMapVisibility(itemClicked) {
    window.location.hash = '#map_section';
    clearObjectFromMap(ValenciaAirport);
    clearObjectFromMap(BarcelonaAirport);
    clearObjectFromMap(MadridAirport);

    //clearObjectFromMap(university);
    clearObjectFromMap(Dinner);

    clearObjectFromMap(CastellonTrain);
    clearObjectFromMap(ValenciaTrain);
    clearObjectFromMap(BarcelonaTrain);
    clearObjectFromMap(MadridTrain);

    switch (itemClicked) {
        case "flight":
            {
                //Airports
                var contentValenciaAirport = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Manises Valencia Airport</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Telephone:+34 902 40 47 04</b></br>' +
                    '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="https://www.airport-valencia.com/">' +
                    'https://www.airport-valencia.com/</a></p>' +
                    '</a></p>' +
                    '<p>How to reach Castellon? (Transit Details)</br><a href="#fromValencia">View Details</a>' +
                    '</div>'

                infoValenciaAirport = new google.maps.InfoWindow({
                    content: contentValenciaAirport
                });

                ValenciaAirport = new google.maps.Marker({
                    position: ValenciaAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoBarcelonaAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4686A0">' +
                        '<h2 style="color:#4686A0">Barcelona–El Prat Airport</h2>' +
                        '<p align="left" style="color:#4686A0">' +
                        '<b style="color:#4686A0">Telephone:+34 902 40 47 04 </b></br>' +
                        '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="http://www.aeropuertobarcelona-elprat.com">' +
                        'http://www.aeropuertobarcelona-elprat.com</a></p>' +
                        '</a></p>' +
                        '<p>How to reach Castellon? (Transit Details)</br><a href="https://www.google.com/maps/dir/Barcelona%E2%80%93El+Prat+Airport+(BCN),+El+Prat+de+Llobregat/Valencia+Airport+(VLC),+Carretera+del+Aeropuerto,+Manises/@40.3879247,-0.3185232,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12a49e64847c8ea5:0xf32be942fb6f9bd7!2m2!1d2.0832941!2d41.297445!1m5!1m1!1s0xd605a9f60cc5a67:0x4cc2b7ffaab10182!2m2!1d-0.4780256!2d39.4892327!3e4" target="_blank">View in Map</a><br>			<a href="#howto" target="_blank">View Details</a>' +
                        '</div>'
                });

                BarcelonaAirport = new google.maps.Marker({
                    position: BarcelonaAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoMadridAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4686A0">' +
                        '<h2 style="color:#4686A0">Madrid-Barajas Airport</h2>' +
                        '<p align="left" style="color:#4686A0">' +
                        '<b style="color:#4686A0">Telephone:+34 91 321 10 00</b></br>' +
                        '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="https://www.aeropuertomadrid-barajas.com">' +
                        'https://www.aeropuertomadrid-barajas.com</a></p>' +
                        '</a></p>' +
                        '<p>How to reach Castellon? (Transit Details)</br><a href = "https://www.google.com/maps/dir/Madrid-Barajas+Adolfo+Suárez+Airport+(MAD),+Av+de+la+Hispanidad,+s%2Fn,+28042+Madrid/Valencia+Airport+(VLC),+Carretera+del+Aeropuerto,+Manises/@39.9904863,-3.1439886,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd4231d000000001:0x6e7725ea0f85ceef!2m2!1d-3.5675982!2d40.4983322!1m5!1m1!1s0xd605a9f60cc5a67:0x4cc2b7ffaab10182!2m2!1d-0.4780256!2d39.4892327!3e4" target = "_blank">View in Map</a>			<a href="#howto" target = "_blank"><br>View Details</a>' +
                        '</div>'
                });

                MadridAirport = new google.maps.Marker({
                    position: MadridAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                map.panTo(ValenciaAirportLoc);
                map.setZoom(7);
                ValenciaAirport.addListener('click', function() {
                    clearInforWindows()
                    infoValenciaAirport.open(map, ValenciaAirport);
                });
                BarcelonaAirport.addListener('click', function() {
                    clearInforWindows()
                    infoBarcelonaAirport.open(map, BarcelonaAirport);
                });
                MadridAirport.addListener('click', function() {
                    clearInforWindows()
                    infoMadridAirport.open(map, MadridAirport);
                });
            }
            break;
        case "location":
            {

                infoUji = new google.maps.InfoWindow({
                    content: contentUji
                });
                if (!university)
                    university = new google.maps.Marker({
                        position: Ujiloc,
                        map: map,
                        icon: imageUJI,
                        title: ujiTooltip,
                        animation: google.maps.Animation.BOUNCE
                    });

                university.addListener('click', function() {
                    clearInforWindows()
                    infoUji.open(map, university);
                    //infoDomplatz.close();
                });

                map.panTo(Ujiloc);
                map.setZoom(13);
            }
            break;
        case 'dinner':
            {
                var DinnerLoc = new google.maps.LatLng(39.983396, -0.035208);
                var imageDinnerLoc = {
                    url: 'images/dinnerloc.png',
                    // size: new google.maps.Size(458, 640),
                    scaledSize: new google.maps.Size(32, 32),
                    // The origin for this image is (0, 0).
                    // origin: DinnerLoc,
                    // The anchor for this image is the base of the flagpole at (0, 32).
                    // anchor: new google.maps.Point(229, 640)
                };

                var contentDinnerLoc = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Cervecería Gambrinus</h2><br>' +
                    '<img src="https://www.gambrinuscastellon.com/wp-content/uploads/2019/11/borrull.jpg" width = "150" heigght = "150"></img>' +
                    // '<h3 style="color:#4a87d3">City Center</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Plaça del Jutge Borrull,12003 <br>Castelló de la Plana, Castelló, Spain<br>' +
                    // '<b style="color:#4a87d3">Economy Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">72,- €</b> <br/>'+'<b style="color:#4a87d3">Comfort Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	77,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.gambrinuscastellon.com/" target="_blank">' +
                    'https://www.gambrinuscastellon.com/</a></p>' +
                    '</div>';
                infoDinnerLoc = new google.maps.InfoWindow({
                    content: contentDinnerLoc
                });

                Dinner = new google.maps.Marker({
                    position: DinnerLoc,
                    map: map,
                    icon: imageDinnerLoc,
                    // animation: google.maps.Animation.BOUNCE
                });

                DinnerLoc.addListener('click', function() {
                    clearInforWindows()
                    infoDinnerLoc.open(map, Dinner);
                });
                map.panTo(DinnerLoc);
                map.setZoom(13);
            }
            break;
        case 'publicTransport':
            {

                //Train
                var imageTrain = {
                    url: 'images/train.png'
                };

                var castellonLoc = new google.maps.LatLng(39.987890, -0.052657);
                var valenciaLoc = new google.maps.LatLng(39.465981, -0.377467);
                var barcelonaLoc = new google.maps.LatLng(41.379093, 2.140134);
                var madridLoc = new google.maps.LatLng(40.4065908, -3.6918535);

                var contentCastellon = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Castelló Railway Station</h2>' +
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b> Calle Pintor Oliet 2, 12006  Castellón de la Plana <br>' +
                    '<b style="color:#4a87d3">Teléfono: </b> +34 902320320<br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://www.renfe.com/EN/viajeros/index.html" target = "_blank">' +
                    'http://www.renfe.com/EN/viajeros/index.html</a></p>' +
                    '</div>';

                var contentBarcelona = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Barcelona Sants railway station</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Address: </b> Carrer del Rector Triadó 75, 08014 Barcelona <br>' +
                    '<b style="color:#4686A0">Teléfono: </b> +34 902 320 320 <br>' +
                    '<b style="color:#4686A0">Web Page: </b>' +
                    '<a href="http://www.renfe.com/viajeros/cercanias/barcelona/" target = "_blank">http://www.renfe.com/viajeros/cercanias/barcelona/</a><br>' +
                    '<a href = "https://www.google.com/maps/dir/Barcelona+Nord,+Carrer+de+Sabino+Arana,+Barcelona/Castell%C3%B3n+de+la+Plana/@41.3229395,2.0268209,11.86z/data=!4m14!4m13!1m5!1m1!1s0x12a499cbe131c8f5:0xc0c032f23fbbfe4c!2m2!1d2.1243454!2d41.3859291!1m5!1m1!1s0xd5ffe2bb82bc197:0xbf89204be1c64f49!2m2!1d-0.0513246!2d39.9863563!3e3" target = "_blank">View on map</a></p>' +
                    '</div>';

                var contentValencia = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Estació del Nord, Valencia</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Address: </b> Carrer de Alacant 25, 46004 Valencia <br>' +
                    '<b style="color:#4686A0">Teléfono: </b> +34 902 320 320 <br>' +
                    '<b style="color:#4686A0">Web Page: </b><a href="http://www.renfe.com/viajeros/cercanias/valencia/" target = "_blank">http://www.renfe.com/viajeros/cercanias/valencia/</a><br>' +
                    '<a href="https://www.google.com/maps/dir/Val%C3%A8ncia+Nord,+Carrer+d\'Alacant,+Valencia/Castell%C3%B3n+de+la+Plana/@39.7133618,-0.4975215,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd604f35909b5015:0x83499d175a2c11b4!2m2!1d-0.3774451!2d39.4660302!1m5!1m1!1s0xd5ffe2bb82bc197:0xbf89204be1c64f49!2m2!1d-0.0513246!2d39.9863563!3e3" target = "_blank">View on map</a>' +
                    '</p>' +
                    '</div>';

                var contentMadrid = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Madrid Atocha Railway Station</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Web Page: </b><a href="http://www.renfe.com/viajeros/cercanias/madrid/" target = "_blank">http://www.renfe.com/viajeros/cercanias/madrid/</a><br>' +
                    '<a href = "https://www.google.com/maps/dir/Atocha+Cercan%C3%ADas,+Madrid/Castell%C3%B3n+de+la+Plana/@39.9175727,-3.021992,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd42262445cdd817:0x3947f9c28d65035b!2m2!1d-3.6896451!2d40.4064655!1m5!1m1!1s0xd5ffe2bb82bc197:0xbf89204be1c64f49!2m2!1d-0.0513246!2d39.9863563!3e3" target = "_blank">View on map</a> </p>' +
                    '</div>';

                var infoCastellon = new google.maps.InfoWindow({
                    content: contentCastellon
                });

                var infoValencia = new google.maps.InfoWindow({
                    content: contentValencia
                });

                var infoBarcelona = new google.maps.InfoWindow({
                    content: contentBarcelona
                });

                var infoMadrid = new google.maps.InfoWindow({
                    content: contentMadrid
                });
                CastellonTrain = new google.maps.Marker({
                    position: castellonLoc,
                    map: map,
                    icon: imageTrain
                        //                    animation: google.maps.Animation.BOUNCE
                });

                ValenciaTrain = new google.maps.Marker({
                    position: valenciaLoc,
                    map: map,
                    icon: imageTrain
                        //                    animation: google.maps.Animation.BOUNCE
                });

                BarcelonaTrain = new google.maps.Marker({
                    position: barcelonaLoc,
                    map: map,
                    icon: imageTrain
                        //,                    animation: google.maps.Animation.BOUNCE
                });

                MadridTrain = new google.maps.Marker({
                    position: madridLoc,
                    map: map,
                    icon: imageTrain
                        //,                    animation: google.maps.Animation.BOUNCE
                });

                CastellonTrain.addListener('click', function() {
                    infoCastellon.open(map, CastellonTrain);
                });

                ValenciaTrain.addListener('click', function() {
                    infoValencia.open(map, ValenciaTrain);
                });

                BarcelonaTrain.addListener('click', function() {
                    infoBarcelona.open(map, BarcelonaTrain);
                });

                MadridTrain.addListener('click', function() {
                    infoMadrid.open(map, MadridTrain);
                });

                map.panTo(castellonLoc);
                map.setZoom(7);
            }
            break;
        default:
            {}
    }
}

$(window).resize(function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(Ujiloc);
});

function initMap() {
    //document.getElementById('map_section').style.display = 'none'
    map = new google.maps.Map(document.getElementById('map'), {
        center: Ujiloc,
        scrollwheel: false,
        zoom: 13
    });

    infoUji = new google.maps.InfoWindow({
        content: contentUji
    });

    university = new google.maps.Marker({
        position: Ujiloc,
        map: map,
        icon: imageUJI,
        animation: google.maps.Animation.BOUNCE,
        title: ujiTooltip,
    });

    university.addListener('click', function() {
        clearInforWindows()
        infoUji.open(map, university);
        //infoDomplatz.close();
    });

    map.panTo(Ujiloc);
    map.setZoom(13);
}