# -*- coding: utf-8 -*-
{
    'name': "pos_journal_discount",

    'summary': """
        Module allows to give discount for a defined Payment method.
        """,

    'description': """
        Set the discount value in the payment method setting.
        In the POS payment screen, can able to apply the same discount by clicking the particular payment method.
    """,
    # 'price': 40.28,
    # 'currency': 'USD',

    'author': "Znoon",
    'website': "http://www.znoon.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Sales/Point of Sale',
    'version': '13.0.1.1.0',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
}
