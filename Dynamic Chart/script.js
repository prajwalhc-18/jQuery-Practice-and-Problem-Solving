$(document).ready(function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart;

  // Function to create the chart
  function createChart(labels, data) {
    if (myChart) {
      myChart.destroy(); // Destroy the existing chart if it exists
    }

    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Data",
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  // Initial chart creation
  createChart([], []);

  // Event listener for the update button
  $("#updateChart").click(function () {
    var dataInput = $("#dataInput").val().trim();
    if (dataInput === "") {
      alert("Please enter data.");
      return;
    }

    var dataPoints = dataInput.split(",").map(Number);
    var labels = [];
    for (var i = 1; i <= dataPoints.length; i++) {
      labels.push("Label " + i);
    }
    createChart(labels, dataPoints);
  });
});
