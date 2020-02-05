Template.SingleStock.onCreated(function()  {
    var self = this;
    self.autorun(function(){
        self.subscribe('singleStock', FlowRouter.getParam('id'));
    });
});

Template.SingleStock.helpers({
    stock(){
        return Stocks.findOne({_id: FlowRouter.getParam('id')})
    },
    updateStockId: function(){
        return this._id;
    }
});

