function addNavigationBadgeLoader(){

	setTimeout(function(){

		var navTabs = document.querySelector('.apex-rds-container');

		if (navTabs) {
			
			var navTabsList = navTabs.querySelectorAll('ul > li .js-three-quarters-loader');

			for (var i = 0; i < navTabsList.length; i++) {
				navTabsList[i].insertAdjacentHTML('beforeend', '<span class="three-quarters-loader"></span>');
			}
		}

		var navList = document.querySelectorAll('.js-three-quarters-loader + a');

		for (var i = 0; i < navList.length; i++) {
			navList[i].insertAdjacentHTML('beforeend', '<span class="three-quarters-loader"></span>');
		}

	}, 100);
};
