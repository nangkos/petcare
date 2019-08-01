$(function () {


	setTimeout(function () {
		//   just remove
		$("#maskFx").remove();
	}, 500);

	$(".userbox").on("click", function () {
		var _this = $(this);

		if (_this.hasClass("open")) {
			_this.removeClass("open");
		} else {
			_this.addClass("open");
		}
	}).on("mouseleave", function () {
		$(this).removeClass("open");
	});


	(function () {
		var url = location.pathname;

		var tempUrl1 = url.split('.do')[0];
		var tempUrl2 = tempUrl1.split('/');
		var checkMainUrl = '/' + tempUrl2[1] + '/' + tempUrl2[2];
		var checkSubUrl = checkMainUrl + '/' + tempUrl2[3];

		var mainMenu = $('#gnbMenu').find('a[href^="' + checkMainUrl + '"]').text();
		var subMenu = $('#lnbMenu').find('a[href^="' + checkSubUrl + '"]').text();

		$('#titleMenu').text(subMenu);
		$('#navMainMenu').text(mainMenu);
		$('#navSubMenu').text(subMenu);
	})();

});