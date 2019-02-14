// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var personal_info = {
  firstName: "Aaron"
  ,lastName: "Hellman"
  ,jobTitle: "Data Analyst"
  ,homeOffice: "Domain D2"
};
// ,tellMeMore: "Hi! Welcome to the second website I have ever built. I am currently a data analyst in financial planning and analysis that is implementing machine learning and data science with Python in our fanatical forecasts. I like what I am doing and am happy that it is getting me on a course to be a Data Scientist but feel that I need more technical knowledge to further support my team. That is the reason that I am applying for this course. I hope you like the site! "

// var bookJSON =
// fetch('https://openlibrary.org/api/books?bibkeys=OLID:OL262758W&format=json&jscmd=data')
// ;
fetch('https://openlibrary.org/api/books?bibkeys=OLID:OL262758W&format=json&jscmd=data')
  .then(function(response) {
    var bookJSON = response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

// var bookJAVAS = JSON.parse(bookJSON);

function apiFunc() {
  document.getElementById("api_title_txt").innerHTML = bookJSON.title;
  document.getElementById("api_image").innerHTML = bookJSON.cover.small;
  document.getElementById("api_author_txt").innerHTML = bookJSON.authors.name;
}