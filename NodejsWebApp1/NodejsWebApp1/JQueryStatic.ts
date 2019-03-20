import * as JQuery from 'jquery';

interface JQueryStatic {
    (): JQuery;
    (html: string): JQuery;
    ajax(settings: JQueryAjaxSettings): JQueryXHR;
    /* ... */
}