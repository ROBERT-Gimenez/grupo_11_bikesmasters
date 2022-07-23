function iniciarMap(){
    let coord = [
        {lat:-34.6070072 ,lng: -58.3832482}, 
        {lat:-34.5512324 ,lng: -58.4541015},
        {lat:-34.6726987 ,lng: -58.4881908}
    ]
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord[0]
    });
    let marker = new google.maps.Marker({
        position: coord[0],
        map: map
    });
    let marker1 = new google.maps.Marker({
        position: coord[1],
        map: map
    });
    let marker2 = new google.maps.Marker({
        position: coord[2],
        map: map
    });
}
