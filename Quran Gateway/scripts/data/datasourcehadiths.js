﻿/**
 * Base class for Kendo data source for chapters
 */
define([
    'api',
    'models/hadith'
], function (Api, Model) {

    //EXTEND KENDO DATA SOURCE
    var DataSource = kendo.data.DataSource.extend({

        init: function (element, options) {
            //BASE CALL TO WIDGET INITIALIZATION
            kendo.data.DataSource.fn.init.call(this, element, options);
        },

        options: {
            //THE NAME IS WHAT IT WILL APPEAR AS OFF THE KENDO NAMESPACE (i.e. kendo.ui.YouTube)
            //THE JQUERY PLUGIN WOULD BE jQuery.fn.kendoYouTube
            //http://www.kendoui.com/blogs/teamblog/posts/12-04-03/creating_custom_kendo_ui_plugins.aspx
            name: 'DataSourceHadiths',
            transport: {
                read: function (options) {
                    Api.getHadiths()
                        .done(function (data) {
                            options.success(data);
                        });
                }
            },
            schema: {
                model: Model
            },
            sort: {
                field: 'name',
                dir: 'asc'
            }
        }
    });

    kendo.ui.plugin(DataSource);

    return {}
});