const SimpleSchema = require("simpl-schema");
export const Stocks = new Mongo.Collection('stocks');

SimpleSchema.extendOptions(['autoform']);

Stocks.allow({
    insert: function (userId) {
        return !!userId;
    },
    update: function (userId) {
        return !!userId;
    },
    remove: function (userId) {
        return !!userId;
    }
});

const Item = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    },
});


const StockSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    Item: {
        type: Array
    },
    'Item.$': {
        type: Item
    },
    owner: {
        type: String,
        label: "Owner",
        autoValue: function () {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});


Meteor.methods({
    deleteStock: function (id) {
        Stocks.remove(id);
    }
});


Stocks.attachSchema( StockSchema );

