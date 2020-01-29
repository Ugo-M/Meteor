import {Stocks} from '../collections/Stocks';

Meteor.publish('stocks', function () {
    return Stocks.find();//{owner: this.userId})
});