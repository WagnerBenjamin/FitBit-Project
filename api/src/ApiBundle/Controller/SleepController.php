<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class SleepController extends Controller
{
    public function indexAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getsleepHistLastWeek();

        $data = json_encode($sleep);
        return new Response($data);
    }

    public function lastMonthAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getsleepHistLastMonth();

        $data = json_encode($sleep);
        return new Response($data);
    }

    public function lastYearAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getSleepHistLastYear();

        $data = json_encode($sleep);
        return new Response($data);
    }

    public function sleepMeanYearsAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getMeanSleepYears();
       
        $data = json_encode($sleep);
        return new Response($data);
    }
}