$(document).ready(function () {
  // Load tasks from localStorage if available
  if (localStorage.getItem("tasks")) {
    $("#taskList").html(localStorage.getItem("tasks"));
  }

  // Add task
  $("#addButton").click(function () {
    var taskText = $("#taskInput").val();
    if (taskText.trim() !== "") {
      var newTask = $(
        '<li><input type="checkbox"> <span>' +
          taskText +
          '</span> <button class="delete">Delete</button></li>'
      );
      $("#taskList").append(newTask);
      $("#taskInput").val("");
      saveTasks();
    } else {
      alert("Please enter a task!");
    }
  });

  // Mark task as completed
  $("#taskList").on("click", 'input[type="checkbox"]', function () {
    $(this).next("span").toggleClass("completed");
    saveTasks();
  });

  // Delete task
  $("#taskList").on("click", ".delete", function () {
    $(this).parent().remove();
    saveTasks();
  });

  // Function to save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", $("#taskList").html());
  }
});
