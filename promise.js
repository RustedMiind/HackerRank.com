// const url = "https://jsonmock.hackerrank.com/api/countries?page=2";
// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", url);
// xhttp.onreadystatechange = function () {
//   console.log(this.status);
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(JSON.parse(this.responseText));
//   }
// };
// xhttp.send();
let page = 1;
async function getData(pageNumber) {
  let countryName;
  let countryData;
  const url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  xhttp.onreadystatechange = function () {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      for (let i in data) {
        if (data[i].alpha2Code === code) {
          countryName = data[i].name;
          countryData = data[i];
        }
      }
    }
  };
  xhttp.send();
  if (!countryName) {
    getData(pageNumber + 1);
  }
}
getData(page);
