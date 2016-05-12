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

        $data = json_encode($Actw);
        return new Response($data);
    }

    public function lastMonthAction()
    {
        $Actm = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActThisMonth();


        $data = json_encode($Actm);
        return new Response($data);
    }

    public function lastYearAction(){
        $Acty = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActLYear();

        $data = json_encode($Acty);
        return new Response($data);
    }

    public function meanYearAction(){
        $Actally = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getActAllYear();

        $data = json_encode($Actally);
        return new Response($data);
    }
}