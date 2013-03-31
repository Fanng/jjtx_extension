//chrome.cookies.onChanged.addListener(function(info) {
//  console.log("onChanged" + JSON.stringify(info));
//});

function initPage(){
    $.post('http://dev.xpttk.com/ajax.php', {action: "login_check"}, function(response){
        console.log(response);
        return false;
    }, 'json');
}

$(document).ready(function(){
    initPage();
});
