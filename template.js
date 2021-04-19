const urlParams = new URLSearchParams(window.location.search);

const star = urlParams.get('star')

console.log("run")
fetch("https://raw.githubusercontent.com/samreed18/GroupProject/main/star.json")
.then((response) => {
    return response.json()
    console.log("run")
})
.then((data) => {
  console.log(data[star])
  data = data[star]
  console.log(data.name)
  document.getElementById("title").innerHTML = data.name;
  document.getElementById("img").src = data.imgUrl;
  document.getElementById("description").innerHTML = data.description
})
