<?php
  /*
   * Document head styles and tags
   */
  
  function get_wp_head_tags() {
    ob_start();

    _wp_render_title_tag();
    echo '<meta name="description" content="' . get_bloginfo() . '">';
    rel_canonical();
    wp_site_icon();

    ob_end_flush();
  }

  function get_ng_head_tags() {
    
    $tags = array_merge(
      array( get_wp_head_tags() ),
      apply_filters( 'ng_head_tags', array() )
    );
  
    $styles = apply_filters( 'ng_head_styles', array() );

    if ( is_user_logged_in() ) {
      // WP admin bar
      $styles = array_merge(
        $styles,
        array (
          '<link rel="stylesheet" id="dashicons-css" href="/wp-includes/css/dashicons.min.css?ver=4.8.5" type="text/css" media="all">',
          '<link rel="stylesheet" id="admin-bar-css" href="/wp-includes/css/admin-bar.min.css?ver=4.8.5" type="text/css" media="all">',
          '<style>* html body,html{margin-top:32px!important}@media screen and (max-width:782px){* html body,html{margin-top:46px!important}}</style>',
        )
      );
    };

    return implode( "\n  ", array_merge( $tags, $styles ) );
  }

  function ng_head() {
     echo get_ng_head_tags();
  }