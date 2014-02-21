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
      all: $('#nav a'),
      home: $('#nav a').eq(0),
      profile: $('#nav a').eq(1),
      services: $('#nav a').eq(2),
      writing: $('#nav a').eq(3),
      press: $('#nav a').eq(4),
      contact: $('#nav a').eq(5)
    }

    var site = $.url().attr('host');
    var path = $.url().attr('path');

    if ($.url().segment(2) == 'zh') {
      var lang = 'zh';
      var curDir = $.url().segment(3);
    } else {
      var lang = 'en';
      var curDir = $.url().segment(2);
    }

    console.log("site: " + site);
    console.log("path: " + path);
    console.log("lang: " + lang);
    console.log("purl segment 1: " + $.url().segment(1));
    console.log("purl segment 2: " + $.url().segment(2));
    console.log("purl segment 3: " + $.url().segment(3));
    console.log("curDir: " + curDir);

    switch (curDir)

    {
      default:
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

      if (lang == 'zh') {
        // ZH to EN
        // path = "/HarmonyHome" + path.substring(15).slice(0,-1); // with baseurl="/HarmonyHome"
        path = path.slice(0,-1);
      } else {
        // EN to ZH
        // path = "/HarmonyHome/zh" + path.substring(12); // with baseurl="/HarmonyHome"
        path = "/zh" + path;
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

    var harmonyPos = new google.maps.LatLng(22.281817,114.155744);

    var harmonyMarker = new google.maps.MarkerImage('{{ site.baseurl }}/assets/map-marker.png');

    var marker = new google.maps.Marker({
          position: harmonyPos,
          map: map,
          icon: harmonyMarker,
          title:"We’re right next to Tsui Wah Restaurant!"
        });

}