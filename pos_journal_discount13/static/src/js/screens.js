odoo.define("pos_journal_discount13.DiscountPaymentScreen", function(require){
	"use strict"

	var screens = require("point_of_sale.screens");
	var gui = require('point_of_sale.gui');
	var core = require('web.core');
	var _t = core._t;

	screens.PaymentScreenWidget.include({
		currentOrder: function() {
        	return this.pos.get_order();
    	},
		click_paymentmethods: function(id) {
			var self = this;
			console.log('add new payment');
			var paymentMethod = this.pos.payment_methods_by_id[id];
			if (paymentMethod.fixed_discount) {
				var total_withtax = this.currentOrder().get_total_with_tax();
				this.gui.show_popup('number', {
					'title': _t('Enter the Discount Value'),
					'confirm': function (value) {
						console.log('total_withtax ', total_withtax);
						var discount_to_apply = (parseInt(value) / total_withtax) * 100;
						console.log('discount_to_apply ', discount_to_apply);
						self.currentOrder().orderlines.each(function (line) {
							line.set_discount(discount_to_apply.toFixed(2));
						});
						self.currentOrder().add_paymentline(paymentMethod);
            			self.reset_input();
            			self.render_paymentlines();
					}
				})
			} else {
				this._super(id);
			 }
		}
	});

})