<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ActivityController extends Controller
{
    public function indexAction()
    {
        $Actw = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActDefault();

        $data = array( "act_hist" => $Actw);
        $data = json_encode($data);
        return new Response($data);
    }

    public function lastMonthAction()
    {
        $Actm = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActThisMonth();

        $data = array( "act_hist" => $Actm);
        $data = json_encode($data);
        return new Response($data);
    }

    public function lastYearAction(){
        $Acty = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActLYear();

        $data = array( "lastyear" => $Acty);
        $data = json_encode($data);
        return new Response($data);
    }

    public function meanYearAction(){
        $Actally = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActAllYear();

        $data = array( "act_hist" => $Actally);
        $data = json_encode($data);
        return new Response($data);
    }
}