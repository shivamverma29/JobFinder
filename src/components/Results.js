{
  /* <script async src="https://cse.google.com/cse.js?cx=828cbbff39a934e19">
</script>
<div class="gcse-search"></div>
AIzaSyDq7QjWQrREaTLNnUv4Qdo2HdsfjME92HU */
}

const Results = ({ companies, type, urls, setUrls }) => {
  let x = 1;
  companies = companies.split(",");
  function getUrls() {
    for (let i = 0; i < companies.length; i++) {
      getData(i);
      console.log(companies[i]);
    }
  }
  function getData(n) {
    fetch(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyDq7QjWQrREaTLNnUv4Qdo2HdsfjME92HU&cx=828cbbff39a934e19&q=" +
        companies[n] +
        type +
        "india 2024"
    )
      .then((res) => res.json())
      .then((data) =>
        setUrls((prevUrls) => {
          return [...prevUrls, data["items"][0]["link"]];
        })
      )
      .catch((err) => console.log(err));
  }
  if (x == 1) {
    getUrls();
    x = 0;
  }
  return (
    <div className="result">
      {urls}
      <p>{type}</p>
    </div>
  );
};

export default Results;
