import {Stocks} from "../../collections/Stocks";

Template.Stock.helpers({
    updateStockId: function(){
        return this._id;
    },
    stock(){
        return Stocks
    }
});

Template.Stock.events({
    'click .fa-trash' : function () {
        Meteor.call('deleteStock', this._id)
    },
    'click .fa-pencil' : function () {
        Session.set('editMode', !Session.get('editMode'))
    }
});