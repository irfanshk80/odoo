odoo.define('pos_delivery_mode.DeliveryButton', function(require){
	"use strict";

	const PosComponent = require('point_of_sale.PosComponent');
	const ProductScreen = require('point_of_sale.ProductScreen');
	const { useListener } = require('web.custom_hooks');
	const Registries = require('point_of_sale.Registries');

	class DeliveryButton extends PosComponent{
		constructor() {
			super(...arguments);
			useListener('click', this.onClick);
		}
		get currentOrder() {
            return this.env.pos.get_order();
        }
		get currentDeliveryName() {
            const order = this.currentOrder;
            return order && order.deliverymode
                ? order.deliverymode.name
                : this.env._t('Delivery Mode');
        }
		async onClick() {
            const selectionList = this.currentOrder.options.map(option => ({
            	id: option.id,
                label: option.name,
                isSelected: option.id === 2,
                item: option,
            }));

            const { confirmed, payload: selectedOption } = await this.showPopup(
                'SelectionPopup',
                {
                    title: this.env._t('Select the Delivery Mode'),
                    list: selectionList,
                }
            );
            if(confirmed){
            	this.currentOrder.set_deliverylist(selectedOption)
            }
            console.log(confirmed);
            console.log(selectedOption);
        }
	}
	DeliveryButton.template = 'DeliveryButton';

	ProductScreen.addControlButton({
		component: DeliveryButton,
		condition: function() {
            return this.env.pos.config.home_delivery;
        },
	});

	Registries.Component.add(DeliveryButton);

	return DeliveryButton;
});