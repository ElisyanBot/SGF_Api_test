const body = document.querySelector("#lista");
const parser = new DOMParser();

function fetchApi(uri) {
  fetch(`${uri}`)
    .then((xml) => xml.text())
    .then((xmlString) => {
      return parser.parseFromString(xmlString, "application/xml");
    })
    .then((xmlobj) => {
      let output = "";
      xmlobj.querySelectorAll("post").forEach((post) => {
        output += `
        <div class="kol"> 
          <p class="nummer"> ${post.children[0].innerHTML} </p>
          <p> ${post.children[1].innerHTML} </p>
          <p> ${post.children[2].innerHTML} </p>
          <p> ${post.children[4].innerHTML} </p>
          <p> ${post.children[5].innerHTML} </p>
        </div>
        `;
      });
      body.innerHTML = output;
    });
}

const btns = document.querySelectorAll("#buttons button");
btns[0].addEventListener("click", () => {
  btns[1].classList.remove("active");
  btns[2].classList.remove("active");
  btns[0].classList = "active";
  fetchApi(
    "https://golfdata.se/xml/sgf_ranking_xml.asp?rankinglista=HD&ORDNING=R&YEAR=2013&lista=1&user=GolfBoxT2"
  );
});

btns[1].addEventListener("click", () => {
  btns[0].classList.remove("active");
  btns[2].classList.remove("active");

  btns[1].classList = "active";
  fetchApi(
    "https://golfdata.se/xml/sgf_ranking_xml.asp?rankinglista=HD&ORDNING=R&YEAR=2014&lista=1&user=GolfBoxT2"
  );
});
btns[2].addEventListener("click", () => {
  btns[0].classList.remove("active");
  btns[1].classList.remove("active");

  btns[2].classList = "active";
  fetchApi(
    "https://golfdata.se/xml/sgf_ranking_xml.asp?rankinglista=HD&ORDNING=R&YEAR=2015&lista=1&user=GolfBoxT2"
  );
});
