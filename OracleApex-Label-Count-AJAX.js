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

function removeBadgeLoader(itemClass){

	setTimeout(function(){

		var loaderElement = document.querySelector('.' + itemClass + ' + a .three-quarters-loader');

		if (loaderElement){

			if (typeof loaderElement.remove == 'function'){
				loaderElement.remove();
			} 
			else{
				loaderElement.outerHTML = '';
			}
		}
	}, 100);
};

function removeBadgeTabsLoader(itemClass) {

	setTimeout(function(){
		var loaderElement = document.querySelector('.' + itemClass + ' > .three-quarters-loader');

		if (loaderElement){

			if (typeof loaderElement.remove == 'function'){
				loaderElement.remove();
			}
			else{
				loaderElement.outerHTML = '';
			}
		}
	}, 100);
};


function addNavigationBadge(serviceName) {

	apex.server.process(
		serviceName,
		{
			x01: 1
		},
		{
			success: function (pData) {
			
				var json = JSON.parse(pData);

				if (json.length && json.length == 0) {
					return false;
				}

				for (var i = 0; i < json.length; i++) {

					for (var itemClass in json[i]) {

						if (json[i][itemClass] > 0) {

							var htmlBadge = '<span class="a-TreeView-badge">' + json[i][itemClass] + '</span>';

							if (document.querySelector('.' + itemClass + ' + a')) {
								document.querySelector('.' + itemClass + ' + a').insertAdjacentHTML('beforeend', htmlBadge);
							}

							if (document.querySelector('.' + itemClass + ' > .three-quarters-loader')) {
								document.querySelector('.' + itemClass).insertAdjacentHTML('beforeend', htmlBadge);
							}
						}

						removeBadgeLoader(itemClass);

						removeBadgeTabsLoader(itemClass);
					}
				}
			},
			dataType: "text"
		}
	);
};