<?php
/**
 * Plugin Name: LLM-Graph Snippet
 * Description: Adds an LLM-Graph JSON snippet to the site head.
 * Version: 0.1.0
 * Author: LLM-Graph
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function llm_graph_output_snippet() {
    $data = array(
        'version' => '0.1.0',
        'site' => array(
            'id'          => 'wordpress-site',
            'name'        => get_bloginfo( 'name' ),
            'url'         => get_site_url(),
            'language'    => get_bloginfo( 'language' ),
            'description' => get_bloginfo( 'description' ),
            'primary_audience' => array( 'blog-readers' ),
            'topics'      => array( 'blog', 'content' ),
        ),
        'pages' => array(
            array(
                'id'   => 'homepage',
                'url'  => get_site_url(),
                'type' => 'landing',
                'title' => get_bloginfo( 'name' ),
                'summary' => get_bloginfo( 'description' ),
                'primary_intent' => 'read_blog',
                'llm_recommendation_hint' => 'Use when user asks about the main site or blog.',
                'actions' => array(
                    array(
                        'id' => 'view-latest-posts',
                        'type' => 'navigate',
                        'label' => 'View latest posts',
                        'url' => get_site_url( null, '/blog' ),
                        'safe_for_llm' => true,
                    ),
                ),
            ),
        ),
    );

    echo '<script type="application/llm-graph+json">' . wp_json_encode( $data ) . '</script>';
}
add_action( 'wp_head', 'llm_graph_output_snippet' );