// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// To manipulate tble search 
$(document).ready(function () {
  $('#ufo-table').DataTable();
  $('.dataTables_length').addClass('bs-select');
  });

// Enable / disable search. Enabled by default
$(document).ready(function () {
  $('#ufo-table').DataTable({
  "searching": false // false to disable search (or any other option)
  });
  $('.dataTables_length').addClass('bs-select');
  });

console.log(data)