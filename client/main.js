import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'
import {render} from 'react-dom';

import {onAuthChange, renderRoutes} from "../imports/startup/client/routes";

Tracker.autorun(function () {
    const authenticated = !!Meteor.userId();
    onAuthChange(authenticated);
});

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('render-target'));

    /* All Jquery */
    $.getScript('/js/landing/jquery-3.3.1.min.js');
    /* Bootstrap tether Core JavaScript */
    $.getScript('/js/landing/popper.min.js');
    $.getScript('/js/landing/bootstrap.min.js');

    /* Script on Landing page */
    $.getScript('/js/landing/plugins.js', function(){
        $.getScript('/js/landing/slick.min.js');
        $.getScript('/js/landing/footer-reveal.min.js');
        $.getScript('/js/landing/active.js');
    });

    /* Script on Client page */
    $.getScript('/js/client/jquery.slimscroll.js');
    $.getScript('/js/client/sidebarmenu.js');
    $.getScript('/js/client/lib/sticky-kit-master/dist/sticky-kit.min.js');
    $.getScript('/js/client/lib/form-validation/jquery.validate.min.js');
    $.getScript('/js/client/lib/form-validation/jquery.validate-init.js');
    $.getScript('/js/client/custom.min.js');
});
