const API_URL = "https://dog.ceo/api/breeds/image/random";
const COUNT = 3;

fetch(`${API_URL}/${COUNT}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === "success") {
      postMessage(data.message);
    } else {
      console.log("Dogs Api error", data);
    }
  })
  .catch((err) => {
    console.log("Dogs Api error", err);
  });
