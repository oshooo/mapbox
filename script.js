mapboxgl.accessToken = 'pk.eyJ1Ijoib3NobzIzNCIsImEiOiJja3E1ZDl1NzMxNjZzMm5sbmtpZzVjZGhxIn0._7QHEgdc3doM2w6vuoPi9g';
  
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})
    function successLocation(position){
        console.log(position)
        setupMap([position.coords.longitude, position.coords.latitude])
        
    }
    function errorLocation(){
        // setupMap([4.14, 3.15])
    }

    function setupMap(center){
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom: 14
        
          })
          const nav = new mapboxgl.NavigationControl();
            map.addControl(nav);
        
            const directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
              });
              
              
              map.addControl(directions, 'top-left');
    }

    

