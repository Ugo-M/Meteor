import '../../collections/Stocks';

Meteor.subscribe('stocks');

console.log(Stocks.find().fetch());