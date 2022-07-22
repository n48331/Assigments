// 1.	Create  a search bar and display a list below using jQuery filters. 
// User should be able to search from the list while entering data in the input box.
// Style it.

$(document).ready(function(){
    $("#search_input").keyup( function() {
      var value = $('#search_input').val().toLowerCase();
      $(".list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  