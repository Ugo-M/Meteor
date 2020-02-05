import { Stocks } from  '../../collections/Stocks';
//import { Meteor } from "meteor/meteor";
import { Template} from "meteor/templating";

Template.NewStock.onCreated(function()  {
    var self = this;
    self.autorun(function () {
        self.subscribe('stocks')
    });
    //this.subscribe('stocks');
});

Template.NewStock.helpers({
    stock(){
        return Stocks
    }
});

Template.Stocks.helpers({
    stocks(){
        return Stocks.find({})
    }
});
