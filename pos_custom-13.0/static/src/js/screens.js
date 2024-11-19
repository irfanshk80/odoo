odoo.define("pos_journal_discount.DiscountPaymentScreen", function(require){
	"use strict"

	const PaymentScreen = require("point_of_sale.screens");

	screens.PaymentScreenWidget.include({
		currentOrder: function() {
        	return this.pos.get_order();
    	}
		click_paymentmethods: function(id) {
			console.log('add new payment');
			if (paymentMethod.fixed_discount) {
				var self = this;
				this.gui.show_popup('number', {
					'title': _t('Enter the Discount Value');
					'confirm': function (value) {
						console.log('New discoun t will sete ', newDiscount);
						this.currentOrder().orderlines.each(function (line) {
							line.set_discount(newDiscount);
						});
					}
				})
			}
			this._super(id);
		}
	});

})