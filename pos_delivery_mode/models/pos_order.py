from odoo import models, fields, api

class PosOrder(models.Model):
	_inherit = "pos.order"

	deliverymode = fields.Char('Delivery Mode')

	def _order_fields(self, ui_order):
		print (ui_order.get('deliverymode'))
		order_fields = super(PosOrder, self)._order_fields(ui_order)
		order_fields['deliverymode'] = ui_order.get('deliverymode')
		return order_fields

	def _get_fields_for_draft_order(self):
		res = super(PosOrder, self)._get_fields_for_draft_order()
		res.append('deliverymode')
		return res

	def _export_for_ui(self, order):
		result = super(PosOrder, self)._export_for_ui(order)
		result.update({
			'deliverymode': order.deliverymode
		})
		return result