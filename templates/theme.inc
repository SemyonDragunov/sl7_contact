<?php

function template_preprocess_sl7_contact(&$variables) {
  $body = variable_get('sl7_contact_body');
  $variables['body'] = check_markup($body['value'], $body['format']);
  $map = variable_get('sl7_contact_map');
  $variables['map'] = array(
    '#theme' => 'geofield_ymap',
    '#map_type' => 'yandex#map',
    '#map_center' => $map['center'],
    '#map_zoom' => $map['zoom'],
    '#map_auto_centering' => TRUE,
    '#map_objects' => $map['objects'],
  );

  drupal_add_js(drupal_get_path('module', 'sl7_contact') . '/js/sl7_contact.js');
  drupal_add_css(drupal_get_path('module', 'sl7_contact') . '/css/sl7_contact.css');
}