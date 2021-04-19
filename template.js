const urlParams = new URLSearchParams(queryString);

const star = urlParams.get('star')

fetch("/star.json")
.then((response) => {
    return response.json()
})
.then((data) => {
  console.log(data)
}
