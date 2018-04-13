<?php
  /*
   * Sets up theme defaults and registers support for various WordPress features.
   */
  
  if ( !function_exists( 'ng_bmc_setup' ) ) :
   
    function ng_bmc_setup()
    {
      // Add theme support for document title tag
      add_theme_support( 'title-tag' );
    }

  endif;
  add_action( 'after_setup_theme', 'ng_bmc_setup' );