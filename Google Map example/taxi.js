function saveTravelData() {
  // Retrieve the JSON string
  const userStr = localStorage.getItem('travelOrders');

  // Parse JSON string to object
  const userObj = JSON.parse(userStr);
  const origin1= userObj.origin;
  const destination1 = userObj.destination;
  const passengers = userObj.passengers;
  const pickTime = userObj.pickUpTime;
  document.getElementById("demo1").innerHTML = origin1;
  document.getElementById("demo2").innerHTML = destination1;
  document.getElementById("demo3").innerHTML = passengers;
  document.getElementById("demo4").innerHTML = pickTime;
}
  
  

$(document).ready(function(){
    $("#bilakhkkkk").click(function(){
      $("#seyed2").toggle();
      $("#bilakhkkkk").toggle();
      $("#container").toggle();
      $("#send-Api").toggle();
      $("#seyed22").toggle();
      send()
    });
  });


$(document).ready(function(){
  $("#send-Api").click(function(){
    $('#demo').toggle();
    saveTravelData();
  });
});

let addresses =[];

document.addEventListener('DOMContentLoaded',() =>{

document.getElementById('bilakhkkkk').addEventListener('click',addTravel);

});


const addTravel = async (ev)=>{
      ev.preventDefault();
      let address = {
      origin:document.getElementById('origin').value,
      destination:document.getElementById('destination').value,
      passengers:document.getElementById('passengers').value,
      pickUpTime:document.getElementById('pickUpTime').value
      
      
      }
      localStorage.setItem('travelOrders',JSON.stringify(address));
  
      let AddressOriginData = JSON.parse(localStorage.getItem('travelOrdersOrigin'));
      let AddressDestinationData=JSON.parse(localStorage.getItem('travelOrdersDestination'));
      let latitudeO =AddressOriginData['lat'];
      let longitudeO=AddressOriginData['long'];
      let latitudeD=AddressDestinationData['lat'];
      let longitudeD=AddressDestinationData['long']
      
      let LatOrigin, LongOrigin,latD,longD;
      LatOrigin = latitudeO;
      LongOrigin = longitudeO;
      latDestination=latitudeD;
      longDestination=longitudeD;


      let current = new Date();
      let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
      let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      let dateTime = cDate + "T" + cTime;

       


      let currentDate = new Date();
      let time = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate() + "T" + document.getElementById('pickUpTime').value +":"+currentDate.getSeconds();

      let finalAddressData = {
        LatOrigin:LatOrigin,
        LongOrigin:LongOrigin,
        latDestination:latDestination,
        longDestination:longDestination,
        origin:document.getElementById('origin').value,
        destination:document.getElementById('destination').value,
        passengers:document.getElementById('passengers').value,
        desiredTime:time,
        callTime:dateTime

      };

      localStorage.setItem('finalAddressData',JSON.stringify(finalAddressData));

      let sendToApi={
        latOrigin:LatOrigin,
        longOrigin:LongOrigin,
        latDestination:latDestination,
        longDestination:longDestination,
        callTime:dateTime,
        passengers:document.getElementById('passengers').value,
        desiredTime:time
      };

      const origin1 = {
        name: document.getElementById('origin').value,
        latitude: LatOrigin,
        longitude:LongOrigin

      }; 
      const destination1 ={
        name: document.getElementById('destination').value,
        latitude :latDestination,
        longitude:longDestination
      };

      const finalSendApi={
        idno:"11",
        origin:origin1,
        destination:destination1,
        callTime:dateTime,
        desiredTime:time,
        passengerNumber:document.getElementById('passengers').value
      };

      const input = document.getElementById("origin");
      document.forms[0].reset();
    };
    function initMap() {
      const uluru = { lat: 41.902782, lng: 12.496366 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: uluru,
        mapTypeControl: false,
      });
      // Create the search box and link it to the UI element.
      const input = document.getElementById("origin");
      const searchBox2 = new google.maps.places.SearchBox(input);
    
      
      // Bias the SearchBox results towards current map's viewport.
      map.addListener("bounds_changed", () => {
        searchBox2.setBounds(map.getBounds());
      });
    
      let markers = [];
    
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox2.addListener("places_changed", () => {
        const places = searchBox2.getPlaces();
    
        if (places.length == 0) {
          return;
        }
    
        // Clear out the old markers.
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
    
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
    
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }
    
          const icon = {
            url: 'https://i.postimg.cc/63yBJ5sR/R2.png',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(45, 45),
          };
    
          // Create a marker for each place.
          markers.push(
            new google.maps.Marker({
              map,
              icon:icon,
              title: place.name,
              position: place.geometry.location,
            })
          );

          let originData = {
            lat:place.geometry.location.lat(),
            long:place.geometry.location.lng()
          };
          localStorage.setItem('travelOrdersOrigin',JSON.stringify(originData));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });



      const input2 = document.getElementById("destination");
      const searchBox = new google.maps.places.SearchBox(input2);
    
      
      // Bias the SearchBox results towards current map's viewport.
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });
    
      let markers1 = [];
    
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
    
        if (places.length == 0) {
          return;
        }
    
        // Clear out the old markers.
        markers1.forEach((marker) => {
          marker.setMap(null);
        });
        markers1 = [];
    
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
    
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }
    
          const icon1 = {
            url: 'https://i.postimg.cc/ryYSvPkB/R.png',
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(45, 45),
          };
    
          // Create a marker for each place.
          markers1.push(
            new google.maps.Marker({
              map,
              icon:icon1,
              title: place.name,
              position: place.geometry.location,
            })
          );

          let destinationData = {
            lat:place.geometry.location.lat(),
            long:place.geometry.location.lng()
          };
          localStorage.setItem('travelOrdersDestination',JSON.stringify(destinationData));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });

    }  

      
  
  