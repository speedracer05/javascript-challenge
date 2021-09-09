// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


// Loop through data and log observation object and append one tble row
sightings.forEach(sighting => {
 
  var row = tbody.append("tr");

  row.append("td").text(sighting.datetime);
  row.append("td").text(sighting.city);
  row.append("td").text(sighting.state);
  row.append("td").text(sighting.country);
  row.append("td").text(sighting.shape);
  row.append("td").text(sighting.durationMinutes);
  row.append("td").text(sighting.comments);
console.log(data)
});