// Set up and Variables 
var dataSighting = data;
var inputFieldDate = d3.select("#datetime");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and log observation object and append one cell for each value
  data.forEach(sightings => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      // console.log(sightings)

      cell.text(value);
  });
});

// Create Listener to search through data on HTML page
// Reference assignment #13 wk 16 #04
var  inputDate = inputFieldDate.property("value").trim();

var findDate = dataSighting.filter(dataSighting => dataSighting.datetime === inputDate);
console.log(inputFieldDate)