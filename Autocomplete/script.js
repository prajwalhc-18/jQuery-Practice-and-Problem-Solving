$(document).ready(function() {
    // Function to fetch autocomplete suggestions from Datamuse API
    function fetchSuggestions(inputValue) {
        // Datamuse API endpoint for word suggestions
        var apiUrl = 'https://api.datamuse.com/words?sp=' + inputValue + '*&max=10';
        
        // Datamuse API key (replace 'YOUR_API_KEY' with your actual API key)
        var apiKey = 'YOUR_API_KEY';

        $.ajax({
            url: apiUrl,
            headers: {
                'X-RapidAPI-Key': apiKey
            },
            success: function(response) {
                var suggestions = response.map(function(item) {
                    return item.word;
                });
                displaySuggestions(suggestions);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching suggestions:', error);
            }
        });
    }

    // Function to update suggestions list based on user input
    function updateSuggestions(inputValue) {
        if (inputValue.length >= 1) {
            fetchSuggestions(inputValue);
        } else {
            $('#suggestionsList').empty();
        }
    }

    // Function to display suggestions in the list
    function displaySuggestions(suggestionsArray) {
        var suggestionsList = $('#suggestionsList');
        suggestionsList.empty();

        suggestionsArray.forEach(function(suggestion) {
            var listItem = $('<li>').text(suggestion);
            suggestionsList.append(listItem);
        });

        // Add click event listener to select a suggestion
        suggestionsList.on('click', 'li', function() {
            $('#searchInput').val($(this).text());
            suggestionsList.empty();
        });
    }

    // Event listener for input changes
    $('#searchInput').on('input', function() {
        var inputValue = $(this).val();
        updateSuggestions(inputValue);
    });

    // Event listener to handle ESC key press to clear suggestions
    $(document).on('keydown', function(event) {
        if (event.key === "Escape") {
            $('#suggestionsList').empty();
        }
    });

    // Event listener to handle clicking outside the input field to clear suggestions
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#searchInput').length) {
            $('#suggestionsList').empty();
        }
    });
});
