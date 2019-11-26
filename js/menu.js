var x = false;
$('.hamburger').click(()=>{
	if (x == false) {
		$('.nav__menu--mobile').css('display', 'flex');
		x = true;
	}
	else {
		$('.nav__menu--mobile').css('display', 'none');
		x = false;
	}
});