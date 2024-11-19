# -*- coding: utf-8 -*-
{
    'name': "pos_delivery_mode",

    'summary': """
        Delivery mode options, customer based delivery mode""",

    'description': """
        1. Delivery mode options.
        2. Customer based delivery option.
        3. Print delivery option in the receipt.
        3. Enabling the 'Customer Credit' Journal with selection of Customer or Delivery mode option.
    """,

    'price': 36.28,
    'currency': 'USD',

    'author': "Znoon",
    # 'website': "http://www.yourcompany.com",  
    'support': 'znoontech@gmail.com',

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Sales/Point of Sale',
    'version': '14.0.1.1.0  ',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale', 'pos_restaurant'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/pos_order_view.xml',
        'views/res_partner.xml',
        'views/pos_config.xml',
        'views/templates.xml',
        'data/demo.xml'
    ],
    'qweb': [
        'static/src/xml/Screens/ProductScreen/ControlButtons/DeliveryButton.xml',
        'static/src/xml/Screens/ReceiptScreen/OrderReceipt.xml',
        'static/src/xml/Screens/PaymentScreen/PaymentMethodButton.xml'
    ],
    'images': ['images/main_screenshot.png'],
    # only loaded in demonstration mode
    'demo': [
        # 'demo/demo.xml',
    ],
}
