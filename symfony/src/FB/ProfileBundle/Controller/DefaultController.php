<?php

namespace FB\ProfileBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction() {
        $response = new Response(json_encode(array(
            array('id' => 1, 'value' => 'test'),
            array("id" => 2, 'value' => 'yolo')
        )));
    return $response;
}
}
