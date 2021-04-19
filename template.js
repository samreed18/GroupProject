const urlParams = new URLSearchParams(queryString);

const star = urlParams.get('star')

console.log("run")
fetch("/star.json")
.then((response) => {
    return response.json()
    console.log("run")
})
.then((data) => {
  console.log(data)
})
