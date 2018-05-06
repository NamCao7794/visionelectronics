import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import {renderRoutes} from "../imports/startup/client/routes";

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

    render(renderRoutes(), document.getElementById('render-target'));
});
