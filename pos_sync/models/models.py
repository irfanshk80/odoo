# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ResPartner(models.Model):
    _inherit = 'res.partner'
    # _description = 'Sync POSes'

    @api.model
    def create(self, vals):
    	partner = super(ResPartner, self).create(vals)
    	self.send_updates([partner.id])
    	return partner

    def write(self, vals):
    	result = super(ResPartner, self).write(vals)
    	self.send_updates(self.ids)
    	return result

    @api.model
    def send_updates(self, partner_ids, action=""):
    	print('sending updates to all poses')
    	channel_name = "sync_partner"
    	data = {
    		"message": 'update_partner',
    		"action": action,
    		"partner_ids": partner_ids
    	}
    	self.env['pos.config'].send_to_all_poses(channel_name, data)


#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
