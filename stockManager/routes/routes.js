// Redirections on log in and log out
if (Meteor.isClient){
    Accounts.onLogin(function () {
        FlowRouter.go('stocks')
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home')
    });
}


// Automatically redirect a logged out user to the home page.
FlowRouter.triggers.enter([function (context, redirect) {
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

// home route redirects to /stocks if the user is logged in
FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('stocks')
        }
        BlazeLayout.render('HomeLayout')
    }
});

// Renders the Stocks template
FlowRouter.route('/stocks', {
    name: 'stocks',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Stocks'
        })
    }
});

// Renders the SingleStock template
FlowRouter.route('/stock/:id', {
    name: 'stock',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'SingleStock'
        })
    }
});