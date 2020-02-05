import {Stocks} from "../../collections/Stocks";
import { ReactiveVar } from 'meteor/reactive-var'

Template.Stock.onCreated(function () {
    this.editMode = new ReactiveVar(false);
});

Template.Stock.helpers({
    updateStockId(){
        return this._id;
    },
    // Stocks collection
    stock(){
        return Stocks
    },
    editMode(){
        return Template.instance().editMode.get();
    },
});

Template.Stock.events({
    'click .fa-trash' : function () {
        Meteor.call('deleteStock', this._id);
    },
    // Enter / Exit edit mode
    'click .fa-pencil' : function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});