if (Meteor.isClient){
    Accounts.onLogin(function () {
        FlowRouter.go('stocks')
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home')
    });
}

FlowRouter.triggers.enter([function (context, redirect) {
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('stocks')
        }
        BlazeLayout.render('HomeLayout')
    }
});

FlowRouter.route('/stocks', {
    name: 'stocks',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'Stocks'
        })
    }
});

FlowRouter.route('/stock/:id', {
    name: 'stock',
    action() {
        BlazeLayout.render('MainLayout', {
            main: 'SingleStock'
        })
    }
});