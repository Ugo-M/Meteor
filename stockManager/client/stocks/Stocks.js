import { Stocks } from  '../../collections/Stocks';
//import { Meteor } from "meteor/meteor";
import { Template} from "meteor/templating";

Template.NewStock.onCreated(function()  {
    this.subscribe('stocks');

});

console.log(Stocks.find().fetch());

Template.NewStock.helpers({
    testStock(){
        return Stocks
    }
});