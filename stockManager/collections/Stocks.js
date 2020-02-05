const SimpleSchema = require("simpl-schema");
export const Stocks = new Mongo.Collection('stocks');

SimpleSchema.extendOptions(['autoform']);

Stocks.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    },
    remove: function (userId) {
        return !!userId;
    }
});

const stockItem = new SimpleSchema({
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
    stockItem: {
        type: Array
    },
    'stockItem.$': {
        type: stockItem
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

