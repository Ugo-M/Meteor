import { Stocks } from  '../../collections/Stocks';

// subscribe to a single stock
Template.SingleStock.onCreated(function()  {
    var self = this;
    self.autorun(function(){
        self.subscribe('singleStock', FlowRouter.getParam('id'));
    });
});

Template.SingleStock.helpers({
    stock(){
        return Stocks.findOne({_id: FlowRouter.getParam('id')})
    }
});

