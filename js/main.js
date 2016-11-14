$(document).ready(function(){

	$('.flores').mouseenter(function(){/*es el evento de las tres imagenes de flores*/
		$(this).css('opacity', '1');
		});

	$('.flores').mouseleave(function(){
		$(this).css('opacity', '0.2');
		});

	$('#mitexto').mouseenter(function(){/*es el evento del video*/

		$('#elvideo').slideDown('slow')
		$('#elvideo').css('background-color', 'orange');
		});
	$('#mitexto').mouseleave(function(){

		$('#elvideo').slideUp("slow");
		});


	$('#elimput').focus(function(){
		$(this).css('background-color', 'orange');
		$(this).css('color', 'black');
		});

	$('#elimput').blur(function(){
		$(this).css('background-color', 'white');
	});

	$('#cajaImput').mouseenter(function(){
    	
    	$(this).css('background-color', '#403E3E');

    
	}); 
	$('#cajaImput').mouseleave(function(){
    	
    	$(this).css('background-color', 'black');

	}); 
});
