//const SimpleSchema = require("simpl-schema");
//Stocks = new Mongo.Collection('stocks');
Stocks = new Meteor.Collection('stocks');

StockSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    creator: {
        type: String,
        label: "Creator",
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

Stocks.attachSchema( StockSchema );

