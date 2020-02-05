import {Stocks} from '../collections/Stocks';
import {check} from 'meteor/check';

// returns all od the user's stocks
Meteor.publish('stocks', function () {
    return Stocks.find({owner: this.userId})
});

// returns a single stock from its id
Meteor.publish('singleStock', function (id) {
    check(id, String);
    return Stocks.find({_id: id})
});