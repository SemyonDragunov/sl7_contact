(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.sl7_contact = {
    attach: function (context, settings) {

      $('.geofield-ymap', context).once().bind('yandexMapInit', function (event, map) {

        // Resize map at form.
        var $sl7Contact = $('#sl7-contact'),
            formHeight = $sl7Contact.find('.wrapper > .form').outerHeight();
        $sl7Contact.find('.geofield-ymap').height(formHeight);
        $sl7Contact.find('.geofield-ymap > ymaps').height(formHeight);

        // Map balloons.
        var objects = map.geoObjects;

        objects.each(function(i) {
          ymaps.geocode(i.geometry.getCoordinates()).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);

              i.properties.set({
                balloonContentBody: firstGeoObject.properties.get('text')
              });

          });
        });

        Drupal.geofieldYmap.autoCentering(map);
        Drupal.geofieldYmap.autoZooming(map);
      });

    }
  };
})(jQuery, Drupal, this, this.document);