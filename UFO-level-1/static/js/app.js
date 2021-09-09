// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


// Loop through data and log observation object and append one tble row
var addData = (dataInput) => {
  dataSighting.forEach(sightings => {
      var row = $tbody.append("tr");
      columns.forEach(column => row.append("td").text(sightings[column])
      )
  });
}
