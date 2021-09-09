// from data.js
var dataSighting = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through data and log observation object and append one cell for each value
  dataSighting.forEach(sightings => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      console.log(sightings)

      cell.text(value);
  });
});