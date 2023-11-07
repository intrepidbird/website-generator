$(document).ready(function() {
    $('#questionForm').submit(function(e) {
        e.preventDefault();
        
        // Get user inputs
        var websiteName = $('#websiteName').val();
        var websiteColor = $('#websiteColor').val();
        var websiteFont = $('#websiteFont').val();

        // Generate website
        generateWebsite(websiteName, websiteColor, websiteFont);
    });

    function generateWebsite(name, color, font) {
        // Set website title and description
        $('#websiteTitle').text(name);
        $('#websiteDescription').text('This is a website generated using the Website Generator.');

        // Apply website styles
        $('body').css('background-color', color);
        $('body').css('font-family', font);

        // Show generated website section
        $('#generatedWebsite').show();
    }
});
