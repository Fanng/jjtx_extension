$(document).ready(function() {
    $('#b1').click(function() {
        alert('Pull Data API performed');

        $.get('http://devlendlease.sprookimanager.com/pc/api_pull.php', function(data) {
            $('#result').html(data);
            console.log(data);
        });
    });

    $('#b2').click(function() {
        alert('Push Data API performed');

        $.get('http://devlendlease.sprookimanager.com/pc/api_push.php', function(data) {
            $('#result').html(data);
            console.log(data);
        });
    });
});