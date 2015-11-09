$("#searchButton").click(function () {
    var searchValue = $('#searchName').val();
    if (searchValue) {
        $('#searchOverlay').show();
        var songNameEnc = encodeURIComponent(searchValue);
        $.ajax({
            url: 'http://music.cpux.me:2626/api/v1/searchSong/' + songNameEnc +'/8c150f55b11b192cb9b5f1183c59811f97f0445937ebea15f2f1380c6722f8dff0a51cb756173a94bfc92',
            success: function (data) {
                $('#searchArea').hide();
                $('#headerArea').hide();
                for (var i in data) {
                    $('#tableArea').append('<tr> <td><button id="previewButton" onclick="playPreview(\'' + data[i].url + '\')"><i class="fa fa-play"></i></button></td><td>' + data[i].title + '</td><td>' + data[i].artist + '</td><td>' + secToDur(data[i].duration) + '</td><td><button>Download</button></td></tr>');

                }
                $('#songsFound').append(data.length);
                $('#songArea').show();

            },
            error: function () {
                //something went wrong, handle the error and display a message
            }
        });
    } else {
        alert("Please fill the search form...");
    }


});

var audioPreview;

function playPreview(url) {
    if (audioPreview) {
        audioPreview.pause();
    }
    audioPreview = new Audio(url);
    audioPreview.play();

}

function secToDur(s) {
			var sec_num = parseInt(s, 10);
			var hours   = Math.floor(sec_num / 3600);
			var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
			var seconds = sec_num - (hours * 3600) - (minutes * 60);

			if (hours   < 10) {hours   = "0"+hours;}
			if (minutes < 10) {minutes = "0"+minutes;}
			if (seconds < 10) {seconds = "0"+seconds;}
			var time    = (hours=='00' ? '' : hours+':')+minutes+':'+seconds;
			return time;
		}
