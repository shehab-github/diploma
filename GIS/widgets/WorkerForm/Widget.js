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
            baseClass: 'jimu-widget-workerForm',

            postCreate: function () {
                this.inherited(arguments);
            },

            startup: function () {
                this.inherited(arguments);
            },

            onOpen: function () {
                this.isOpen = true;

            },

            _submitWorkerForm: function () {

                //localStorage.workShift = $("input[name='workShift']:checked").val();
                //localStorage.driverName = $('#driverName').val();
                //localStorage.driverAge = $('#driverAge').val();
                //localStorage.assistantName = $("#assistantName").val();
                //localStorage.assistantAge = $('#assistantAge').val();
                //localStorage.driverEduLev = $('#driverEduLev').val();
                //localStorage.assistantEduLev = $('#assistantEduLev').val();
                //localStorage.driverSickness = $('#driverSickness').val();
                //localStorage.assistantSickness = $('#assistantSickness').val();
                //localStorage.carType = $('#carType').val();
                //localStorage.carModel = $('#carModel').val();
                //localStorage.fuelType = $("input[name='fuelType']:checked").val();
                //localStorage.carPlateNumber = $('#carPlateNumber').val();
                //localStorage.carEmptyWeight = $('#carEmptyWeight').val();
                //localStorage.carLoadedWieght = $('#carLoadedWieght').val();
                //localStorage.classified = $("input[name='classified']:checked").val();
                //localStorage.plasticWeight = $('#plasticWeight').val();
                //localStorage.papersWeight = $('#papersWeight').val();
                //localStorage.foodWeight = $('#foodWeight').val();
                //localStorage.glassWeight = $('#glassWeight').val();
                //localStorage.gardensWeight = $('#gardensWeight').val();
                //localStorage.steelWeight = $('#steelWeight').val();
                //localStorage.othersWeight = $('#othersWeight').val();
                //localStorage.garageLeaveTime = $('#garageLeaveTime').val();
                //localStorage.benhaLeaveTime = $('#benhaLeaveTime').val();
                //localStorage.landFillArriveTime = $('#landFillArriveTime').val();

                if (localStorage.WorkersTotalWeight)
                    localStorage.WorkersTotalWeight = (Number(localStorage.WorkersTotalWeight) + Number($('#worker_carLoadedWieght').val())).toLocaleString();
                else
                    localStorage.WorkersTotalWeight = (Number($('#worker_carLoadedWieght').val())).toLocaleString();

                $('#lbl_workersTotal').text(localStorage.WorkersTotalWeight);
            },

        });
        return clazz;
    });