Meteor.publish('stocks', function () {
    return Stocks.find({owner: this.userId})
});