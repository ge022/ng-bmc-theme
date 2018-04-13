<?php
  /*
  * Theme footer styles and scripts
  */

  function get_ng_footer_tags() {
    $tags = apply_filters( 'ng_footer_tags', array() );
    $scripts = apply_filters( 'ng_footer_scripts', array() );
    
    if ( is_user_logged_in() ) {
      // WP admin bar      
      $scripts = array_merge(
        $scripts,
        array(
          '<script type="text/javascript" src="/wp-includes/js/admin-bar.min.js?ver=4.8.5"></script>',
          wp_admin_bar_render(),
        )
      );
    }
    
    return implode("\n  ", array_merge( $tags, $scripts ) );
  }

  function ng_footer() {
    echo get_ng_footer_tags();
  }