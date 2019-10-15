if (location.href.indexOf('ichangtou.com') > -1) {
	(function (para) {
		var p = para.sdk_url,
			n = para.name,
			w = window,
			d = document,
			s = 'script',
			x = null,
			y = null;
		w['sensorsDataAnalytic201505'] = n;
		w[n] =
			w[n] ||
			function (a) {
				return function () {
					(w[n]._q = w[n]._q || []).push([a, arguments]);
				};
			};
		var ifs = [
			'track',
			'quick',
			'register',
			'registerPage',
			'registerOnce',
			'trackSignup',
			'trackAbtest',
			'setProfile',
			'setOnceProfile',
			'appendProfile',
			'incrementProfile',
			'deleteProfile',
			'unsetProfile',
			'identify',
			'login',
			'logout',
			'trackLink',
			'clearAllRegister',
			'getAppStatus'
		];
		for (var i = 0; i < ifs.length; i++) {
			w[n][ifs[i]] = w[n].call(null, ifs[i]);
		}
		if (!w[n]._t) {
			(x = d.createElement(s)), (y = d.getElementsByTagName(s)[0]);
			x.async = 1;
			x.src = p;
			x.setAttribute('charset', 'UTF-8');
			y.parentNode.insertBefore(x, y);
			w[n].para = para;
		}
	})({
		sdk_url: 'https://source.ichangtou.com/file/sa/sensorsdata.min.js',
		heatmap_url: 'https://source.ichangtou.com/file/sa/heatmap.min.js',
		name: 'sensorsdata',
		web_url: 'https://sensorsdata-web.ichangtou.com/?project=production',
		server_url: 'https://sensorsdata-api.ichangtou.com/sa?project=production',
		debug_mode_url: 'https://sensorsdata-api.ichangtou.com/sa?project=production',
		heatmap: {
			// 关闭 $WebStay (Web 视区停留) 事件
			scroll_notice_map: 'not_collect',
			// 关闭 $WebClick（Web 元素点击）事件
			clickmap: 'not_collect'
		},
		debug_mode_upload: false,
		debug_mode: false,
		show_log: false
	});
} else {
	(function (para) {
		var p = para.sdk_url,
			n = para.name,
			w = window,
			d = document,
			s = 'script',
			x = null,
			y = null;
		w['sensorsDataAnalytic201505'] = n;
		w[n] =
			w[n] ||
			function (a) {
				return function () {
					(w[n]._q = w[n]._q || []).push([a, arguments]);
				};
			};
		var ifs = [
			'track',
			'quick',
			'register',
			'registerPage',
			'registerOnce',
			'trackSignup',
			'trackAbtest',
			'setProfile',
			'setOnceProfile',
			'appendProfile',
			'incrementProfile',
			'deleteProfile',
			'unsetProfile',
			'identify',
			'login',
			'logout',
			'trackLink',
			'clearAllRegister',
			'getAppStatus'
		];
		for (var i = 0; i < ifs.length; i++) {
			w[n][ifs[i]] = w[n].call(null, ifs[i]);
		}
		if (!w[n]._t) {
			(x = d.createElement(s)), (y = d.getElementsByTagName(s)[0]);
			x.async = 1;
			x.src = p;
			x.setAttribute('charset', 'UTF-8');
			y.parentNode.insertBefore(x, y);
			w[n].para = para;
		}
	})({
		sdk_url: 'https://source.ichangtou.com/file/sa/sensorsdata.min.js',
		heatmap_url: 'https://source.ichangtou.com/file/sa/heatmap.min.js',
		name: 'sensorsdata',
		web_url: 'https://sensorsdata-web.ichangtou.com/?project=default',
		server_url: 'https://sensorsdata-api.ichangtou.com/sa?project=default',
		debug_mode_url: 'https://sensorsdata-api.ichangtou.com/sa?project=default',
		heatmap: {
			// 关闭 $WebStay (Web 视区停留) 事件
			scroll_notice_map: 'not_collect',
			// 关闭 $WebClick（Web 元素点击）事件
			clickmap: 'not_collect'
		},
		debug_mode_upload: false,
		debug_mode: false,
		show_log: true
		// show_log: false
	});
}
