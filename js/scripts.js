
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var item1Input = $("input#item1").val();
    $("#item1").val('');    
    var item2Input = $("input#item2").val();
    $("#item2").val('');
    var listItems = [item1Input, item2Input]
    listItems.sort();


    $("#list-item1").html('');

    listItems.forEach(function(listItem){
      //var x = listItem.toUpperCase();
      $("#list-item1").append("<li>" + listItem.toUpperCase() + "</li>");
    });
     $(".list").show();
    event.preventDefault();
  });
});
