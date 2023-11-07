$(document).ready(function() {
    // Initialize Clipboard.js
    new ClipboardJS('.btn');

    $('#websiteCodeForm').submit(function(e) {
        e.preventDefault();

        // Get form values
        var websiteName = $('#websiteName').val();
        var websiteColors = $('#websiteColors').val();
        var hasHeader = $('#hasHeader').val();
        var hasFooter = $('#hasFooter').val();
        var aboutText = $('#aboutText').val();

        // Generate HTML code
        var htmlCode = '<!DOCTYPE html>\n';
        htmlCode += '<html lang="en">\n';
        htmlCode += '<head>\n';
        htmlCode += '    <meta charset="UTF-8">\n';
        htmlCode += '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
        htmlCode += '    <title>' + websiteName + '</title>\n';
        htmlCode += '    <style>\n';
        htmlCode += '        /* CSS code goes here */\n';
        htmlCode += '    </style>\n';
        htmlCode += '</head>\n';
        htmlCode += '<body>\n';
        if (hasHeader === 'yes') {
            htmlCode += '    <header>\n';
            htmlCode += '        <h1>' + websiteName + '</h1>\n';
            htmlCode += '    </header>\n';
        }
        htmlCode += '    <main>\n';
        htmlCode += '        <section>\n';
        htmlCode += '            <h2>About</h2>\n';
        htmlCode += '            <p>' + aboutText + '</p>\n';
        htmlCode += '        </section>\n';
        htmlCode += '    </main>\n';
        if (hasFooter === 'yes') {
            htmlCode += '    <footer>\n';
            htmlCode += '        <p>&copy; ' + websiteName + ' - ' + new Date().getFullYear() + '</p>\n';
            htmlCode += '    </footer>\n';
        }
        htmlCode += '</body>\n';
        htmlCode += '</html>';

        // Generate CSS code
        var cssCode = 'body {\n';
        cssCode += '    font-family: Arial, sans-serif;\n';
        cssCode += '    background-color: ' + websiteColors.split(',')[0] + ';\n';
        cssCode += '}\n';
        cssCode += 'header {\n';
        cssCode += '    background-color: ' + websiteColors.split(',')[1] + ';\n';
        cssCode += '    color: #ffffff;\n';
        cssCode += '    padding: 20px;\n';
        cssCode += '}\n';
        cssCode += 'main {\n';
        cssCode += '    padding: 40px;\n';
        cssCode += '}\n';
        cssCode += 'section {\n';
        cssCode += '    background-color: ' + websiteColors.split(',')[2] + ';\n';
        cssCode += '    color: #ffffff;\n';
        cssCode += '    padding: 20px;\n';
        cssCode += '}\n';
        cssCode += 'footer {\n';
        cssCode += '    background-color: ' + websiteColors.split(',')[1] + ';\n';
cssCode += '    color: #ffffff;\n';
        cssCode += '    padding: 20px;\n';
        cssCode += '    text-align: center;\n';
        cssCode += '}\n';

        // Generate JavaScript code
        var jsCode = '';

        // Update code snippets in the HTML
        $('#htmlCodeSnippet').text(htmlCode);
        $('#cssCodeSnippet').text(cssCode);
        $('#jsCodeSnippet').text(jsCode);

        // Show the generated code section
        $('#generatedCode').show();
    });
});
