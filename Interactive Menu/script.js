$(document).ready(function() {
    // Hide all descriptions initially
    $('.description').hide();

    // Event listener for clicking on menu items
    $('.item').click(function() {
        // Hide all descriptions
        $('.description').hide();
        
        // Remove active class from all items
        $('.item').removeClass('active');
        
        // Add active class to the clicked item
        $(this).addClass('active');
        
        // Show the description of the clicked item
        $(this).find('.description').show();
        
        // Smooth scroll to the clicked item
        $('html, body').animate({
            scrollTop: $(this).offset().top - 100
        }, 500);
    });
    
    // Event listener for hovering over menu items
    $('.item').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
});
