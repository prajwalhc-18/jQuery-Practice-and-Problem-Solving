$(document).ready(function() {
    // Define variables
    var $draggableItems = $('.draggable');
    var $dropZone = $('#dropZone');
    var $dropMessage = $('#dropMessage');
    
    // Initialize draggable elements
    $draggableItems.draggable({
        revert: true,
        revertDuration: 200,
        zIndex: 1000,
        start: function(event, ui) {
            // Add class when dragging starts
            $(this).addClass('dragging');
        },
        stop: function(event, ui) {
            // Remove class when dragging stops
            $(this).removeClass('dragging');
        }
    });
    
    // Initialize drop zone
    $dropZone.droppable({
        accept: '.draggable',
        tolerance: 'pointer',
        drop: function(event, ui) {
            var droppedItem = ui.draggable;
            var droppedItemText = droppedItem.text();
            
            // Show drop message
            $dropMessage.text('You dropped ' + droppedItemText + ' into the drop zone!');
            $dropMessage.fadeIn();
            
            // Hide drop message after 3 seconds
            setTimeout(function() {
                $dropMessage.fadeOut();
            }, 3000);
        },
        over: function(event, ui) {
            // Add class when item is dragged over drop zone
            $dropZone.addClass('hover');
        },
        out: function(event, ui) {
            // Remove class when item is dragged out of drop zone
            $dropZone.removeClass('hover');
        }
    });
});
