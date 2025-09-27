<?php 
function ds_style(){
    wp_enqueue_style('digitalschool-style', get_stylesheet_uri());

}

add_action('wp_enqueue_scripts', 'ds_style');
?>