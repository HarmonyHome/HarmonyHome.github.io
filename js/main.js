---
---

$(document).ready(function() {

  var harmony = new Harmony();
  harmony.init();

});

function Harmony() {

  function init() {

    // INITIALIZE FLEXSLIDER
    $('.flexslider').flexslider();

    // SET ACTIVE NAV

    var nav = {
      all: $('ul.primary-menu a'),
      home: $('ul.primary-menu #nav-btn-1'),
      profile: $('ul.primary-menu #nav-btn-2'),
      services: $('ul.primary-menu #nav-btn-3'),
      writing: $('ul.primary-menu #nav-btn-4'),
      press: $('ul.primary-menu #nav-btn-5'),
      contact: $('ul.primary-menu #nav-btn-6')
    }

    var path = $.url().attr('path');
    var site = $.url().attr('host');
    var dir = $.url().attr('directory').substring(1);
    var rawDir = dir.substring(12);

    rawDir = rawDir.substring(0, dir.indexOf('/'));

    if (rawDir == 'harmonyhome') {
      var curDir = dir.substring(dir.indexOf('/')).replace(/\//g,'');
    } else if (rawDir == 'zh') {
      var curDir = dir.substring(3).replace(/\//g,'');
    } else {
      var curDir = rawDir.replace(/\//g,'');
      var curDir = curDir.replace('zh','')
    }

    console.log(path);
    console.log(site);
    console.log(rawDir);
    console.log(curDir);

    switch (curDir)

    {
      case '':
        nav.all.removeClass('active-nav');
        nav.home.addClass('active-nav');
        break;

      case 'profile':
        nav.all.removeClass('active-nav');
        nav.profile.addClass('active-nav');
        break;

      case 'services':
        nav.all.removeClass('active-nav');
        nav.services.addClass('active-nav');
        break;

      case 'writing':
        nav.all.removeClass('active-nav');
        nav.writing.addClass('active-nav');
        break;

      case 'press':
        nav.all.removeClass('active-nav');
        nav.press.addClass('active-nav');
        break;

      case 'contact':
        initializeGmap();
        nav.all.removeClass('active-nav');
        nav.contact.addClass('active-nav');
        break;
    }

    // Language switching button

    var langBtn = $('.lang');

    langBtn.click(function(e) {
      e.preventDefault();

      if (rawDir == 'zh') {
        // strip /zh from domain
        path = path.substring(3).slice(0,-1);
      } else {
        // ADD /zh AFTER 'dir'
        // for local.hh
          // path = "/zh" + path;
        // for github pages
          path = "{{ site.baseurl }}/zh" + path.substring(12);
      }

      window.location = "http://" + site + path;

    })


  };

  // RETURN
  return {
    init: init
  }

};

// INITIALIZE GOOGLE MAPS
function initializeGmap() {
    var mapCanvas = document.getElementById('map-canvas');

    var mapOptions = {
      	center: new google.maps.LatLng(22.28191,114.155213),
        zoom: 19,
		    mapTypeControl: false,
		    streetViewControl: false,
      	zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
          position: google.maps.ControlPosition.TOP_RIGHT
        },
      	scrollwheel: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var harmonyPos = new google.maps.LatLng(22.281723,114.155744);

    var harmonyMarker = new google.maps.MarkerImage('{{ site.baseurl }}/assets/map-marker.png');

    var marker = new google.maps.Marker({
          position: harmonyPos,
          map: map,
          // icon: harmonyMarker,
          title:"We’re right next to Tsui Wah Restaurant!"
        });

}