$(document).ready(function() {
  
  $('#term').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
     {
       results();
       return false;  
     }
   });   


    $("#search").on("click", results); //end onclick
  }); //end docready

  var results=function getResults(){
    var term = $("#term").val();
    console.log("term"+term.length);
    if(term.trim()==""||term==null){
      alert("Please enter a search term");
      $( ".wrapper" ).empty();
      return;
    }
    // console.log(term);
    // console.log("hello");
    //request
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&search="+term + "&callback=?";
    $.getJSON(url, function(json) {
        
        $("#results").html("");
        $("#results").append("<span id='search-result'>" + json[1].length + " Search results for \"" + term + "\"</span>");
        for (var i = 0; i < json[1].length; i++) {
          // $("#results").append("<li><h3><a href='" + json[3][i] + "'>" + json[1][i] + "</a></h3><p>" + json[2][i] + "</p></li>");
          $('#results').append("<div class=\"section\"><a href=\'"+json[3][i]+"' target='_blank'><h2>"+json[1][i]+"</h2><p>"+json[2][i]+"</p></a>");
        }
      }); //end getJSON
  }