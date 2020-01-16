Meteor.publish('stocks', function () {
    return Stocks.find({creator: this.userId})
});