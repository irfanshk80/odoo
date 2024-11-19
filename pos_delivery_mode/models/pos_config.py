from odoo import fields, models, api

class PosConfig(models.Model):
	_inherit = "pos.config"

	home_delivery = fields.Boolean('Home Delivery');