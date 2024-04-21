$(document).ready(function() {
    // Make grid items draggable and resizable
    $('.gridItem').draggable({
      grid: [10, 10], // Snap to a 10x10 grid
      containment: '#gridContainer',
      scroll: false
    }).resizable({
      handles: 'se', // Resize handle on the bottom right corner
      grid: [10, 10], // Snap to a 10x10 grid
      minHeight: 100,
      minWidth: 100
    });
  
    // Update grid layout when items are dropped
    $('#gridContainer').sortable({
      update: function(event, ui) {
        $(this).find('.gridItem').each(function(index) {
          $(this).text(index + 1);
        });
      }
    });
  });
  