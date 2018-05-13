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
    // Landing page
    $.getScript('/js/landing/jquery-3.3.1.min.js', function(){});
    $.getScript('/js/landing/popper.min.js', function(){});
    $.getScript('/js/landing/bootstrap.min.js', function(){});
    $.getScript('/js/landing/plugins.js', function(){
        $.getScript('/js/landing/slick.min.js', function(){});
        $.getScript('/js/landing/footer-reveal.min.js', function(){});
        $.getScript('/js/landing/active.js', function(){});
    });

    // Client
    $.getScript('/js/client/jquery.slimscroll.js', function(){});
    $.getScript('/js/client/sidebarmenu.js', function(){});
    $.getScript('/js/client/lib/sticky-kit-master/dist/sticky-kit.min.js', function(){});
    $.getScript('/js/client/custom.min.js', function(){});

    render(renderRoutes(), document.getElementById('render-target'));
});
