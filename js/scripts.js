
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var item1Input = $("input#item1").val();
    var item2Input = $("input#item2").val();
    var listItems = [item1Input, item2Input]
    listItems.sort();
    console.log(listItems);

    listItems.forEach(function(listItem){
      $("#list-item1").append("<li>" + listItem + "</li>");      
    })
     $(".list").show();
    event.preventDefault();
  });
});
