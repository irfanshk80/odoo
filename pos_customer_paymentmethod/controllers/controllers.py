# -*- coding: utf-8 -*-
# from odoo import http


# class Custom\posCustomerPaymentmethod(http.Controller):
#     @http.route('/custom\pos_customer_paymentmethod/custom\pos_customer_paymentmethod/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/custom\pos_customer_paymentmethod/custom\pos_customer_paymentmethod/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('custom\pos_customer_paymentmethod.listing', {
#             'root': '/custom\pos_customer_paymentmethod/custom\pos_customer_paymentmethod',
#             'objects': http.request.env['custom\pos_customer_paymentmethod.custom\pos_customer_paymentmethod'].search([]),
#         })

#     @http.route('/custom\pos_customer_paymentmethod/custom\pos_customer_paymentmethod/objects/<model("custom\pos_customer_paymentmethod.custom\pos_customer_paymentmethod"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('custom\pos_customer_paymentmethod.object', {
#             'object': obj
#         })
