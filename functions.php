<?php 
function ds_style(){
    wp_enqueue_style('digitalschool-style', get_stylesheet_uri());

}

add_action('wp_enqueue_scripts', 'ds_style');

function ds_menu(){
register_nav_menu( array(
    'primary' => 'Primary Menu'
));
}

add_action('after_theme_setup', 'ds_menu');
?>