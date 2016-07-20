$('#menu > .sub').addClass('close');
$('#menu > h4').on('click', function() {
		if($('#menu > .sub').hasClass('close')) {
			$('#menu > .sub').removeClass('close').addClass('show');
			$('#menu').addClass('menu');
		}});
		$('#menu > .sub').on('mouseleave', function() {
			$(this).removeClass('show').addClass('close');
			$('#menu').removeClass('menu');
		});
