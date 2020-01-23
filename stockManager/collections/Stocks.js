const SimpleSchema = require("simpl-schema");
Stocks = new Mongo.Collection('stocks');

SimpleSchema.extendOptions(['autoform']);

Stocks.allow({
    insert: function (userId) {
        return !!userId;
    }
});

StockSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
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

Stocks.attachSchema( StockSchema );

