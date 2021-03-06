/*
 * This file is part of Report Portal.
 *
 * Report Portal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Report Portal is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Report Portal.  If not, see <http://www.gnu.org/licenses/>.
 */
define(function (require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var ModalView = require('modals/_modalView');
    var Backbone = require('backbone');
    var Epoxy = require('backbone-epoxy');
    var Util = require('util');


    var ModalForceUpdate = ModalView.extend({
        tpl: 'tpl-modal-force-update',
        className: 'modal-force-update',
        events: {
            'click [data-js-ok]': 'onConfirm'
        },

        bindings: {
            '[data-js-type]': 'text: account_type'
        },

        initialize: function(options) {
            this.msg = options.msg;
            this.render();
        },

        render: function() {
            this.$el.html(Util.templates(this.tpl, {msg: this.msg}));
        },

        onConfirm: function () {
            this.successClose();
        }
    });

    return ModalForceUpdate;
});
