/* ------------------------- 
Page.js
Copyright: Steffen Lindner
www.ne4y-dev.de
----------------------------- */
$(document).ready(function () {
    var sLink = window.location.hash;
    var goLink = sLink.substring(sLink.indexOf("=") + 1);

    if (goLink != undefined) {
        $('nav ul li').removeClass('active');
    }

    if (sLink.length > 0 && goLink.length > 0) {
        $('nav ul li a[href="?s=' + goLink + '"]').parent().addClass('active');
        $('section.container').empty();
        $('section.container').html('<div id="loading"><img src="img/loader.gif" alt="laden" id="loader" /></div>');
        $('img#loader').show();
        $.ajax({
            url: 'request.php?s=' + goLink,
            success: function (result) {
                $('img#loader').hide();
                $('section.container').html(result);
            }
        });
    } else {
        //$('nav ul li:first-child').addClass("active");
    }

    $('a').click(function () {		
        var href = $(this).attr('href');
        var rLink = href.substring(href.indexOf("=") + 1);
        $('section.container').empty();
        $('section.container').html('<div id="loading"><img src="img/loader.gif" alt="laden" id="loader" /></div>');
        $('img#loader').show();
        $.ajax({
            url: 'request.php?s=' + rLink,
            success: function (result) {
                $('img#loader').hide();
                $('section.container').html(result);
                window.location.hash = "s=" + rLink;				
            }			
        });
		
		return false;
    });
	
	
});

$(document).delegate("form", "submit", function () {
    var href = $(this).attr('action');
    var rLink = href.substring(href.indexOf("=") + 1);
    var information = $('form').serialize();
    $('section.container').html('<div id="loading"><img src="img/loader.gif" alt="laden" id="loader" /></div>');
    $.ajax({
        url: 'request.php?s=' + rLink,
        type: 'POST',
        data: information,
        success: function (result) {
            $('img#loader').hide();
            $('section.container').html(result);
            window.location.hash = "s=" + rLink;
        }
    });
    
    return false;
});