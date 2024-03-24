$(document).ready(function() {
    var questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Mercury", "Venus", "Earth", "Jupiter"],
            correctAnswer: "Jupiter"
        }
    ];

    var currentQuestion = 0;
    var score = 0;

    // Function to display current question and options
    function displayQuestion() {
        $('#question').text(questions[currentQuestion].question);
        var optionsHtml = '';
        for (var i = 0; i < questions[currentQuestion].options.length; i++) {
            optionsHtml += '<div class="option" data-option="' + questions[currentQuestion].options[i] + '">' + questions[currentQuestion].options[i] + '</div>';
        }
        $('#options').html(optionsHtml);
    }

    // Function to check answer and provide feedback
    function checkAnswer(selectedOption) {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            $('#feedback').text('Correct!');
            score++;
        } else {
            $('#feedback').text('Incorrect! The correct answer is ' + questions[currentQuestion].correctAnswer);
        }
    }

    // Event listener for option selection
    $('#options').on('click', '.option', function() {
        var selectedOption = $(this).data('option');
        checkAnswer(selectedOption);
        $('.option').off('click'); // Disable further clicks on options
        $('#submit').hide();
        $('#next').show();
    });

    // Event listener for 'Next' button
    $('#next').click(function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
            $('#feedback').text('');
            $('.option').on('click'); // Re-enable click events on options
            $('#submit').show();
            $('#next').hide();
        } else {
            endQuiz();
        }
    });

    // Function to end the quiz and display score
    function endQuiz() {
        $('#question').text('Quiz completed!');
        $('#options').empty();
        $('#feedback').text('');
        $('#score').text('Your score: ' + score + ' out of ' + questions.length);
        $('#next').hide();
        $('#score').show();
        $('#restart').show();
    }

    // Event listener for 'Restart Quiz' button
    $('#restart').click(function() {
        currentQuestion = 0;
        score = 0;
        displayQuestion();
        $('#score').hide();
        $('#restart').hide();
        $('#next').hide();
        $('#submit').show();
    });

    // Initial display of first question
    displayQuestion();
});
