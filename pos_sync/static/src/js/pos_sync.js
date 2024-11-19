odoo.define("pos_sync.pos_sync", function(require){
	"use strict"

	var models = require('point_of_sale.models');
	var rpc = require('web.rpc');

	var super_posmodel = models.PosModel;

	models.PosModel = models.PosModel.extend({
		initialize: function () {
			super_posmodel.prototype.initialize.apply(this, arguments);
			var self = this;
			this.ready.then(function () {
				self.bus.add_channel_callback(
					"sync_partner",
					self.on_add_partner,
					self
				)
			});
		},
		on_add_partner: function (data) {
			console.log(data);
			if ( data.message === "update_partner" &&
				 data.partner_ids.length
				) {
				this.load_new_partners_force_update(data.partner_ids)
			}
		},
		load_new_partners_force_update: function (ids) {
			var def = new $.Deferred();
			if(!ids) {
				return def.reject();
			}
			var self = this;
			ids = Array.isArray(ids) ? ids : [ids];

			rpc.query(
				{
					model: 'res.partner',
					method: 'read',
					args: [ids],
				},
				{
					shadow: true,
				}
			).then(
				function(partners){
					console.log(partners);
					if(self.db.add_partners(partners)){
						def.resolve();
					} else {
						def.reject();
					}
				},
				function (err, event) {
					if(err){
						console.log(err.stack)
					}
					event.preventDefault();
					def.reject();
				}
			);
			return def;
		}

	});
});