odoo.define("pos_payment_discount.models", function(require){
	"use strict"

	var models = require("point_of_sale.models");
	var utils = require("web.utils");
	var round_pr = utils.round_precision;

	models.load_fields('pos.payment.method', ['fixed_discount','discount']);

	var posorder_super = models.Order.prototype;

	models.Order = models.Order.extend({
		add_paymentline: function(payment_method) {
			// console.log('add_paymentline');
			var newPaymentline = posorder_super.add_paymentline.apply(this, arguments);
			if(newPaymentline.payment_method.fixed_discount) {
				this.orderlines.each(function(line){
					line.set_discount(payment_method.discount);
				});
			}
			// console.log(newPaymentline.amount);
			// newPaymentline.set_amount(this.get_due()/10);
	        // this.assert_editable();
	        // var newPaymentline = new exports.Paymentline({},{order: this, payment_method:payment_method, pos: this.pos});
	        // newPaymentline.set_amount(this.get_due());
	        // this.paymentlines.add(newPaymentline);
	        // this.select_paymentline(newPaymentline);
	        // if(this.pos.config.cash_rounding){
	        //   this.selected_paymentline.set_amount(0);
	        //   this.selected_paymentline.set_amount(this.get_due());
	        // }
	        return newPaymentline;
    	},
    	// get_due: function(paymentline) {
    	// 	console.log(paymentline);
    	// 	var due = posorder_super.get_due.apply(this, arguments);
    	// 	var percent_due = due-(due/100*10)
    	// 	console.log(percent_due);
   		// 	return percent_due;
     //   	}
     // 	get_total_with_tax: function() {
     // 		var total_with_tax = posorder_super.get_total_with_tax.apply(this, arguments);
     // 		return total_with_tax/10;
     //    	// return this.get_total_without_tax() + this.get_total_tax();
    	// },
	})

});