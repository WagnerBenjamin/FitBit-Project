<?php

// src/ApiBundle/Controller/TestController.php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class TestController extends Controller
{
    public function indexAction()
    {
        $data = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->find2();
        /*$data = array(
            'success' => true,
            'results' => array(
                'entity' => 'people',
                'count' => 3,
                'depth' => 5
            )
        );*/
        $data = json_encode($data);
        //return new Response($this->render('ApiBundle:Test:index.html.twig', array('data' => $data)));
        return new Response($data);
    }
}