import {Stocks} from '../collections/Stocks';
import {check} from 'meteor/check';

Meteor.publish('stocks', function () {
    return Stocks.find({owner: this.userId})
});

Meteor.publish('singleStock', function (id) {
    check(id, String);
    return Stocks.find({_id: id})
});