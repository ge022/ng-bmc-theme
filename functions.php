<?php

  /*
   * Load after_setup_theme action hook
   */
  require get_template_directory() . '/inc/functions/after_theme_setup.php';

  /*
   * Document head styles and tags
   */
  require get_template_directory() . '/inc/functions/ng_head.php';
  
  /*
   * Theme footer styles and scripts
   */
  require get_template_directory() . '/inc/functions/ng_footer.php';
