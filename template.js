const urlParams = new URLSearchParams(window.location.search);

const star = urlParams.get('star')

console.log("run")
fetch("/GroupProject/star.json")
.then((response) => {
    return response.json()
    console.log("run")
})
.then((data) => {
  console.log(data)
})
