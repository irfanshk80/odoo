from odoo import models, fields, api

class PosDelivery(models.Model):

	delivery_mode = fields.Selection()