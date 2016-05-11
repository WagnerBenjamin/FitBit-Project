<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class PerfController extends Controller
{
    public function indexAction()
    {
        $perfw = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getPerfDefault();

        $data = json_encode($perfw);
        return new Response($data);
    }

    public function lastMonthAction()
    {
        $perfm = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getPerfThisMonth();

        $data = array( "perf_hist" => $perfm);
        $data = json_encode($data);
        return new Response($data);
    }

    public function lastYearAction(){
        $perfy = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getPerfLYear();

        $data = json_encode($perfy);
        return new Response($data);
    }

    public function perfMeanYearAction(){
        $perfally = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getPerfAllYear();

        $data = array( "mean_perf_year" => $perfally);
        $data = json_encode($data);
        return new Response($data);
    }
}