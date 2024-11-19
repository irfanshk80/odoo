# -*- coding: utf-8 -*-
# from odoo import http


# class PosSync(http.Controller):
#     @http.route('/pos_sync/pos_sync/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pos_sync/pos_sync/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('pos_sync.listing', {
#             'root': '/pos_sync/pos_sync',
#             'objects': http.request.env['pos_sync.pos_sync'].search([]),
#         })

#     @http.route('/pos_sync/pos_sync/objects/<model("pos_sync.pos_sync"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pos_sync.object', {
#             'object': obj
#         })
