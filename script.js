//mgmt: cd407e30-202e-4a6d-b145-08bd00ab0159
//carseat: de3c7511-e3e1-4910-bc3d-496cf6bfa7b9
// rex: f3252f59-6f89-40cb-a954-96ee3f902c6f

let MBID = ['cd407e30-202e-4a6d-b145-08bd00ab0159', 'de3c7511-e3e1-4910-bc3d-496cf6bfa7b9', 'f3252f59-6f89-40cb-a954-96ee3f902c6f'];

for (var i = 0; i < 3; i++) {
  let url = "https://coverartarchive.org/release/" + MBID[i];
  let albumID = "album" + i;
  
  fetch(url)
    .then(function(response) { 
      return response.json();
    }).then(function(json) {
      let results = '<img src="' + json.images[0].image + '" class="card-img-top" alt="..."></img>';
    
      document.getElementById(albumID).innerHTML = results;
    });
}