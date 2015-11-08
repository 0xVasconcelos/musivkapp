$( "#searchButton" ).click(function() {
    var searchValue = $('#searchName').val();
    if(searchValue){
        $('#searchOverlay').show();
        var songNameEnc = encodeURIComponent(searchValue);
        $.getJSON( "http://107.170.7.193:2626/api/v1/searchSong/"+ songNameEnc +"/8c150f55b11b192cb9b5f1183c59811f97f0445937ebea15f2f1380c6722f8dff0a51cb756173a94bfc92", function( data ) {
            console.log(data);
            $('#searchArea').hide();
            $('#headerArea').hide();
        });
    }
    else{
        alert("Please fill the search form...");
    }


});
