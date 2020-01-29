const SimpleSchema = require("simpl-schema");
Stocks = new Mongo.Collection('stocks');

SimpleSchema.extendOptions(['autoform']);

Stocks.allow({
    insert: function (userId) {
        return !!userId;
    }/*,
    update: function (userId) {
        return !!userId;
    },
    delete: function (userId) {
        return !!userId;
    }*/
});

Ressource = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    },
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
    ressources: {
        type: Array
    },
    'ressources.$': {
        type: Ressource
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

