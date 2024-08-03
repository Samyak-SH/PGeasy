let pg_place_id = document.getElementById("pg_place_id");
let n_place_id  =document.getElementById("n_place_id");
let test1 = document.getElementById("test1");
let test2  =document.getElementById("test2");

let pg_autocomplete = new google.maps.places.Autocomplete(pg_place_id);
let n_place_autocomplete = new google.maps.places.Autocomplete(n_place_id);

document.getElementById("submit").onclick = ()=>{
    test1.value = pg_autocomplete.getPlace().place_id;
    test2.value = n_place_autocomplete.getPlace().place_id;
}

// document.getElementById("submit").addEventListener('click', async ()=>{
//     console.log(pg_place_id.value)
//     console.log(n_place_id.value)
//     console.log("\n");
//     pg_place_id.value = String(pg_autocomplete.getPlace().place_id);
//     n_place_id.value = String(n_place_autocomplete.getPlace().n_place_id);

//     console.log(pg_place_id.value)
//     console.log(n_place_id.value)

//     pg_place_id.value="";
//     n_place_id.value="";

// })
