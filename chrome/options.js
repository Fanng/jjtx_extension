//chrome.cookies.onChanged.addListener(function(info) {
//  console.log("onChanged" + JSON.stringify(info));
//});

function initPage(){
    $.post('http://dev.xpttk.com/ajax.php', {action: 'login_check'}, function(response){
        // user already logs in
        if(response.ok === '1'){
            $('.userImage').attr('src', response.user.image_small);
            $('.userName').html(response.user.name);
            
            $('.notLoggedIn').hide();
            $('.loggedIn').show();
            
            // reminder options radio button
            if(response.user.reminder === 'digit'){
                $('input:radio[value=digit]').attr('checked', true);
            }else{
                $('input:radio[value=popup]').attr('checked', true);
            }
        }
        // user not logged in
        else{
            $('.notLoggedIn').show();
            $('.loggedIn').hide();
        }
        return false;
    }, 'json');
}

function toggleReminderOptions(option){
    $.post('http://dev.xpttk.com/ajax.php', {action: 'change_reminder', option: option}, function(response){
        console.log(response);
        // user already logs in
        if(response.ok === '1'){
        }
        // user not logged in
        else{
        }
        return false;
    }, 'json');
}

$(document).ready(function(){
    initPage();
    
    $('input:radio').change(function(){
        var option = $('input:radio:checked').val();
        toggleReminderOptions(option);
    });
});
