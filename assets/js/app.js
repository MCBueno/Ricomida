const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){
    

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $("#ingredientes").on("dblclick", function(){
        $(this).css({"color":"red"})
    });
    $("#preparacion").on("dblclick", function(){
        $(this).css({"color":"red"})
    });

    $(".card-title").click(function(){
        $(".card-text").toggle();
    });


    $( function() {
        $( document ).tooltip();
    } );
});