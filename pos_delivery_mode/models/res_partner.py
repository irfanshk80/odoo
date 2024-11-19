from odoo import api, fields, models

class ResPartner(models.Model):
	_inherit = "res.partner"

	home_delivery = fields.Boolean('Home Delivery')