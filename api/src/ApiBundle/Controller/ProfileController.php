<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends Controller
{
    public function indexAction()
    {
        $weight = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getWeightHistLastWeek();

        $data = json_encode($weight);
        return new Response($data);
    }

    public function lastMonthAction()
    {
        $weight = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getWeightHistLastMonth();

        $data = json_encode($weight);
        return new Response($data);
    }

    public function lastYearAction()
    {
        $weight = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getWeightHistLastYear();

        $data = json_encode($weight);
        return new Response($data);
    }

    public function meanWeightYearsAction()
    {
        $weight = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getMeanWeightYears();

        $data = json_encode($weight);
        return new Response($data);
    }
}