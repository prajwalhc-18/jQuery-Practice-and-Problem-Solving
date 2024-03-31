$(document).ready(function () {
  // Fetch countries data from REST Countries API
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    method: "GET",
    success: function (data) {
      // Populate country list
      data.forEach(function (country) {
        $("#country-list").append(
          '<li data-name="' +
            country.name.common +
            '">' +
            country.name.common +
            "</li>"
        );
      });

      // Handle click on country item
      $("#country-list li").click(function () {
        var countryName = $(this).data("name");
        searchGoogle(countryName);
      });
    },
    error: function () {
      console.error("Error fetching countries data.");
    },
  });

  // Handle search input
  $("#search").on("input", function () {
    var searchText = $(this).val().toLowerCase();
    $("#country-list li").each(function () {
      var countryName = $(this).text().toLowerCase();
      if (countryName.indexOf(searchText) !== -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Handle "Enter" key press event on search input
  $("#search").on("keypress", function (e) {
    if (e.which === 13) {
      var countryName = $(this).val();
      searchGoogle(countryName);
    }
  });

  // Function to search Google for the given country name
  function searchGoogle(countryName) {
    var googleSearchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(countryName);
    window.open(googleSearchUrl, "_blank");
  }
});
