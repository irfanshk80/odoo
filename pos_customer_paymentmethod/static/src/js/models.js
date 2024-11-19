odoo.define("pos_customer_paymentmethod.models", function(require){
	"use strict"

	var models = require("point_of_sale.models");
	
	console.log('will load models load_fields')
	models.load_fields('res.partner', ['insurance_value']);
	models.load_fields('pos.payment.method', ['is_insurance']);

	var _super_order = models.Order.prototype;
	var _super_paymentline = models.Paymentline.prototype;

	models.Order = models.Order.extend({
		add_paymentline: function (payment_method){
			this.assert_editable();
			var newPaymentline = new models.Paymentline({},{order: this, payment_method:payment_method, pos: this.pos});
			if(!payment_method.is_cash_count || this.pos.config.iface_precompute_cash){
			    newPaymentline.set_amount( this.get_due() );
			};
			if (payment_method.is_insurance) {
				newPaymentline.set_amount( this.get_total_with_tax() * (this.get_client().insurance_value / 100));
			}
			this.paymentlines.add(newPaymentline);
			this.select_paymentline(newPaymentline);
		}
	})
});