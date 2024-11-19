# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ResPartner(models.Model):
    _inherit = 'res.partner'
    _description = 'Partner with apply insurance rate field'

    insurance_value = fields.Float('Insurance Rate')

class PosPaymentMethod(models.Model):
    _inherit = 'pos.payment.method'
    _description = 'Add insurance_value boolean field'

    is_insurance = fields.Boolean('Insurance Apply')