define(['dojo/_base/declare',
    'dojo/_base/html',
    'dojo/query',
    'dojo/on',
    'dojo/_base/lang',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/utils',
    'jimu/BaseWidget'
],
    function (declare, html, query, on, lang, _WidgetsInTemplateMixin, jimuUtils, BaseWidget) {
        var clazz = declare([BaseWidget, _WidgetsInTemplateMixin], {
            baseClass: 'jimu-widget-landfillForm',

            postCreate: function () {
                this.inherited(arguments);
            },

            startup: function () {
                this.inherited(arguments);
            },

            onOpen: function () {
                this.isOpen = true;

            },

            _submitData: function () {
                if (localStorage.LandfillTotalWeight)
                    localStorage.LandfillTotalWeight = (Number(localStorage.LandfillTotalWeight) + Number($('#landfill_netWeight').val())).toLocaleString();
                else
                    localStorage.LandfillTotalWeight = (Number($('#landfill_netWeight').val())).toLocaleString();

                $('#lbl_landFillTotal').text(localStorage.LandfillTotalWeight);
            }

        });
        return clazz;
    });