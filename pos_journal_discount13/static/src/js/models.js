odoo.define("pos_journal_discount13.models", function(require){
	"use strict"

	var models = require("point_of_sale.models");

	models.load_fields('pos.payment.method', ['fixed_discount']);

});