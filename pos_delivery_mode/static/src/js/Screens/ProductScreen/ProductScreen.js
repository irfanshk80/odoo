odoo.define('pos_delivery_mode.ProductScreen', function(require){
	"use strict";

	const Registries = require('point_of_sale.Registries');
	const ProductScreen = require('point_of_sale.ProductScreen');

	const DeliveryProductScreen = (ProductScreen) =>
		class extends ProductScreen {
			async _onClickCustomer(){
				await super._onClickCustomer();
				const currentClient = this.currentOrder.get_client();
				if(currentClient && currentClient.home_delivery){
					this.currentOrder.set_deliverylist({name:'Home Delivery'});
				} else {
					this.currentOrder.set_deliverylist({name:'Delivery Mode'});
				}
			}
		}

	Registries.Component.extend(ProductScreen, DeliveryProductScreen);

	return DeliveryProductScreen;
})