
var setup_header = function () {
  // Get the select to update
  var header = document.getElementById("header");

  // Request the file list file from the server
  fetch("/data/file_list.txt")
  .then(data=>{return data.text();})
  // On data, split the response into multiple options in the select.
  .then(res=>{console.log(res, "TODO");});
};

setup_header();
