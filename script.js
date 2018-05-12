// alert("connected");

$(function(){ /* on document load */
    $('#imgperu').click(function(){ /* click handler for images */
        if($(this).attr('src') === 'peru1.jpeg'){ /* check source */
            $(this).attr('src','peru2.jpeg'); /* change source */
        }
        else{
            $(this).attr('src','peru1.jpeg'); /* change source */
        }
    });
});

$(function(){
    $('.project').click(function(){ 
        if($(this).attr('src') === 'assign1.png'){  
            $(this).attr('src','assign2.png'); 
        }
        else if ($(this).attr('src') === 'assign2.png'){  
            $(this).attr('src','assign3.png'); 
        }
        else{
            $(this).attr('src','assign1.png');
        }
    });
});