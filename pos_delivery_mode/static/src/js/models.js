odoo.define('pos_delivery_mode.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');
    var posorder_super = models.Order.prototype;

    models.load_fields('res.partner', ['home_delivery']);

    models.Order = models.Order.extend({
        export_as_JSON: function () {
            var json = posorder_super.export_as_JSON.apply(this, arguments);
            json.deliverymode = this.deliverymode ? this.deliverymode.name : undefined;
            return json;
        },
        init_from_JSON: function (json) {
            posorder_super.init_from_JSON.apply(this, arguments);
            this.deliverymode = this.options.find(opt => opt.name === json.deliverymode) || false;
        },
        set_deliverylist: function (deliverymode) {
            this.deliverymode = deliverymode;
            // this.save_to_db();
            this.trigger('change');
        },
        get options(){
            return [{id:1,name:'Pickup'}, {id:2,name:'Home Delivery'}]
        },
        export_for_printing: function () {
            var json = posorder_super.export_for_printing.apply(this, arguments);
            json.deliverymode = this.deliverymode ? this.deliverymode.name : undefined;
            return json;
        }
    });
});
