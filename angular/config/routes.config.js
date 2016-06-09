export function RoutesConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	let getView = (viewName) => {
		return `./views/app/pages/${viewName}/${viewName}.page.html`;
	};

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('app', {
			abstract: true,
            data: {},//{auth: true} would require JWT auth
			views: {
				header: {
					templateUrl: getView('header')
				},
				footer: {
					templateUrl: getView('footer')
				},
				main: {}
			}
		})
		.state('app.landing', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.login', {
			url: '/login',
			views: {
				'main@': {
					templateUrl: getView('login')
				}
			}
		})
         .state('app.logout', {
            url: '/logout',
            views: {
                'main@': {
                    templateUrl: getView('landing')
                }
            }
        })
        .state('app.register', {
            url: '/register',
            views: {
                'main@': {
                    templateUrl: getView('register')
                }
            }
        })
        .state('app.forgot_password', {
            url: '/forgot-password',
            views: {
                'main@': {
                    templateUrl: getView('forgot-password')
                }
            }
        })
        .state('app.reset_password', {
            url: '/reset-password/:email/:token',
            views: {
                'main@': {
                    templateUrl: getView('reset-password')
                }
            }
        })
        .state('app.create-post', {
        url: '/create-post',
        data:{auth:true},
        views: {
          'main@': {
            templateUrl: getView('create_post')
          }
        }
      })
        .state('app.show-post', {
        url: '/show-post',
        views: {
          'main@': {
            templateUrl: getView('show_post')
          }
        }
      })
        .state('app.secret', {
            url: '/secret',
            views: {
                'main@': {
                    templateUrl: getView('secret')
                }
            }
        });
}
