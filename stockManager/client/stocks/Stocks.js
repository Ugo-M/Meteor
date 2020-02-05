import { Stocks } from  '../../collections/Stocks';
import { Template} from "meteor/templating";

Template.NewStock.onCreated(function()  {
    const self = this;
    self.autorun(function () {
        self.subscribe('stocks')
    });
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
