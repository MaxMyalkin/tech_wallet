$(document).ready(function() {
   $(".btn-primary").click(function() {
        window.location.href = "podtverzhdenie.html";
        return false;
    }) ;

    $(".btn-ok").click(function() {
        window.location.href = "status.html";
        return false;
    }) ;

    $(".button-back").click(function() {
        window.history.back();
        return false;
    }) ;

    $(".button-add").click(function() {
        window.location.href = "wallet-add.html";
        return false;
    }) ;

    $(".button-add-confirm").click(function() {
        window.location.href = "wallet-info.html";
        return false;
    }) ;
});
