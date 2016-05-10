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

        $bmi = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getBMIActual();

        $arrayWeight = array();
        foreach($weight as $dataset){
            $tmp = $dataset["date"]->format("Y-m-d");
            $arrayWeight[] = ["date" => $tmp, "weight" => $dataset["weight"]];
        }
        foreach($bmi as $dataset){
            $tmp = $dataset["date"]->format("Y-m-d");
            $arrayBMI[] = ["date" => $tmp, "bmi" => $dataset["bmi"]];
        }
        //var_dump($data[1]["date"]->format('Y-m-d'));
        $data = $arrayWeight;
        $bmi = $arrayBMI;
        $data = array(
            'weight_hist' => $data,
            'bmi_actual' => $bmi
        );
        $data = json_encode($data);
        //return new Response($this->render('ApiBundle:Test:index.html.twig', array('data' => $data)));
        return new Response($data);
    }
}