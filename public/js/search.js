let input = document.querySelector(".searchInput");
let submit = document.querySelector(".searchButton");
let autocomplete = new google.maps.places.Autocomplete(input);

let c_place_id = document.getElementById("c_place_id");
// let distance = document.getElementById("distance");


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
        
slider.oninput = function() {
  output.innerHTML = this.value;
}

submit.onclick = (event)=>{
  c_place_id.value = autocomplete.getPlace().place_id;
  distance.value = slider.value;
  console.log(c_place_id.value);
}


