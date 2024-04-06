$(document).ready(function() {
    $('#password').on('input', function() {
        var password = $(this).val();
        var strength = 0;

        // Regular expressions to check password strength
        var regex = {
            lower: /[a-z]/,
            upper: /[A-Z]/,
            numeric: /[0-9]/,
            special: /[!@#$%^&*()\-_=+{};:,<.>]/,
            length: /.{8,}/
        };

        // Check each regular expression and increase strength accordingly
        if (regex.lower.test(password)) strength++;
        if (regex.upper.test(password)) strength++;
        if (regex.numeric.test(password)) strength++;
        if (regex.special.test(password)) strength++;
        if (regex.length.test(password)) strength++;

        // Change progress bar color based on strength
        var progressBar = $('.progress');
        progressBar.removeClass('weak medium strong very-strong');

        if (strength <= 1) {
            progressBar.addClass('weak').css('width', '25%');
            $('#strength').text('Weak').removeClass().addClass('weak');
        } else if (strength === 2) {
            progressBar.addClass('medium').css('width', '50%');
            $('#strength').text('Medium').removeClass().addClass('medium');
        } else if (strength === 3) {
            progressBar.addClass('strong').css('width', '75%');
            $('#strength').text('Strong').removeClass().addClass('strong');
        } else {
            progressBar.addClass('very-strong').css('width', '100%');
            $('#strength').text('Very Strong').removeClass().addClass('very-strong');
        }
    });
});
