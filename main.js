let icon = document.getElementById("image");
let conditionTxt = document.getElementById("condition");
let locationTxt = document.getElementById("location");

async function fetchData(lon = 0, lat = 0) {
    try {
      let response = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`,
        {
          headers: {
            "X-RapidAPI-Key":
            'a542411a05mshba18738513f75fdp1d5a98jsn1f016e88b537',
          },
        }
      ).then((res) => res.json());


console.log("hi")
// comment

icon.src = response.current.condition.icon;
 conditionTxt.innerText = response.current.condition.text;
 locationTxt.innerText = `${response.location?.name} , ${response.location?.country} `;
    }
catch (error) {
    console.error(error);
  }
}


navigator.geolocation.getCurrentPosition(
    (pos) => {
      let lat = pos.coords.latitude,
        lon = pos.coords.longitude;
  
      fetchData(lon, lat);
  
      console.log({ lat, lon });
    },
    () => {
      document.getElementById("container").innerHTML =
        "<strong>Please allow to access location to be able to work</strong>";
    }
  );
