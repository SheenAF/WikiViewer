 $(document).ready(function() {
   $("#search").keyup(function() {
     //get search term from search box
     var srch = $('#search').val();
     
     //make request to wiki api
     $.ajax({
       url: 'http://en.wikipedia.org/w/api.php',
       data: {
         //specify search paramenters, get JSON
         action: 'query',
         list: 'search',
         srsearch: srch,
         format: 'json'
       },
       dataType: 'jsonp',
       success: function(data) {
         //clear prev results
         $('#matches').empty();
        
         $.each(data.query.search, function(i, item) {
           //build & append result items
           $('#matches').append('<li><a href="http://en.wikipedia.org/wiki/' + encodeURIComponent(item.title) + '"><h5>' + item.title + '</h5></a><p>'+ item.snippet + '...</p></li>');
         });
       }
     });
   });
 });