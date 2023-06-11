import $ from "jquery";

// Menu



$( document ).ready(function() {
    $(".icon-menu div").click(() => {
        $(".icon-menu").toggleClass("active")
        $(".menu-content").toggleClass("active")
    })
});