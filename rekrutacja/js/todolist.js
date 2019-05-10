$(document).ready(function() {

    $("#add").click(function() {
        let newListItem = $("#addtoList").val();
        let counter = $('li.item').length;
        if (newListItem.length > 0) {
            counter++;
            $("#toDoList").append("<li class='item'>" + "Task number " + counter + ": " + newListItem + "</li>");
            $("#addtoList").val('');
        }
    });

    $("#remove").click(function() {
        $("#toDoList li:last-child").remove();
    });


    $("#clear").click(function() {
        $("#toDoList li").remove();
    });

});