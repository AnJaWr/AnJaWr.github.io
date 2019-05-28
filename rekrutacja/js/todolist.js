$(document).ready(function () {
    $('#toDoList').html(localStorage.getItem('listItems'));

    $("#add").click(function () {
        let newListItem = $("#addtoList").val();
        let counter = $('li.item').length;
        if (newListItem.length > 0) {
            counter++;
            $("#toDoList").append("<li class='item'>" + "Task number " + counter + ": " + newListItem + "</li>");
            localStorage.setItem('listItems', $('#toDoList').html());
            $("#addtoList").val('');
        }

    });


    $("#remove").click(function () {
        $("#toDoList li:last-child").remove();
        localStorage.setItem('listItems', $('#toDoList').html());
    });


    $("#clear").click(function () {
        $("#toDoList li").remove();
        localStorage.setItem('listItems', $('#toDoList').html());
    });

});