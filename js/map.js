$(function() {

  ymaps.ready(init);
  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 14
    });

    myPlacemark = new ymaps.Placemark([55.76, 37.64], {
      content:         'ТРК «Континент» на Звездной',
      balloonContent:  'ТРК «Континент» на Звездной',
    }, {
      iconImageHref:   '/img/placemark.png',
      iconImageSize:   [21, 30]
//      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
  }

});