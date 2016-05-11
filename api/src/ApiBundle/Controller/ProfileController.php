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
        $arrayBMI = array();
        foreach($bmi as $dataset){
            $tmp = $dataset["date"]->format("Y-m-d");
            $arrayBMI[] = ["date" => $tmp, "bmi" => $dataset["bmi"]];
        }

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

    public function lastMonthAction()
    {
        $weight = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getWeightHistLastMonth();

        $arrayWeight = array();
        foreach($weight as $dataset){
            $tmp = $dataset["date"]->format("Y-m-d");
            $arrayWeight[] = ["date" => $tmp, "weight" => $dataset["weight"]];
        }

        $data = $arrayWeight;
        $data = array(
            'weight_hist' => $data,
        );
        $data = json_encode($data);
        return new Response($data);
    }

    public function lastYearAction()
    {
        $weight = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getWeightHistLastYear();

        $arrayWeight = array();
        $arrayWeight2 = array();
        $arrayWeight3 = array();
        foreach($weight as $dataset){
            $tmp = $dataset["date"]->format("Y-m");
            if($tmp == "2016-01") $arrayWeight[] = ["date" => $tmp, "weight" => $dataset["weight"]];
            if($tmp == "2016-02") $arrayWeight2[] = ["date" => $tmp, "weight" => $dataset["weight"]];
            if($tmp == "2016-03") $arrayWeight3[] = ["date" => $tmp, "weight" => $dataset["weight"]];
        }

        $cumul=0;
        foreach($arrayWeight as $key=>$val)
        {
            $cumul += $val["weight"];
        }
        $weight_moy=$cumul/count($arrayWeight);
        $data = array(array("date" => "2016-01", "weight" => $weight_moy));

        $cumul=0;
        foreach($arrayWeight2 as $key=>$val)
        {
            $cumul += $val["weight"];
        }
        $weight_moy=$cumul/count($arrayWeight2);
        $data[] = array("date" => "2016-02", "weight" => $weight_moy);

        $cumul=0;
        foreach($arrayWeight3 as $key=>$val)
        {
            $cumul += $val["weight"];
        }
        $weight_moy=$cumul/count($arrayWeight3);
        $data[] = array("date" => "2016-03", "weight" => $weight_moy);

        $data = array(
            'lastyear' => $data,
        );

        /*
         * C'est WTF les valeurs
         *
        $arrweight[] = array();
        $index = 0;
        $tmpWeight = null;
        $nbrJour = 0;
        $tmp = null;
        foreach($weight as $dataset){
            if($tmpWeight  == null){
                $tmp = $dataset["date"]->format("Y-m");
                $tmpWeight = $dataset["weight"];
                //var_dump($tmpWeight);
                $nbrJour++;
            }elseif($tmp == $dataset["date"]->format("Y-m")){
                var_dump($tmpWeight + $dataset["weight"]);
                $tmpWeight = $tmpWeight + $dataset["weight"];
                $nbrJour++;
            }else{
                //var_dump($tmpWeight, $nbrJour);
                $tmpWeight /= $nbrJour;
                $arrweight[$index] = array("date" => $tmp, "weight" => $tmpWeight);
                $nbrJour = 0;
                $tmpWeight = 0;

                $tmp = $dataset["date"]->format("Y-m");
                $tmpWeight = $tmpWeight + $dataset["weight"];
                $index++;
                $nbrJour++;
            }
            $tmpWeight /= $nbrJour;
            $arrweight[$index] = array("date" => $tmp, "weight" => $tmpWeight);
        }
        var_dump($arrweight);*/

        $data = json_encode($data);
        //return new Response($this->render('ApiBundle:Test:index.html.twig', array('data' => $data)));
        return new Response($data);
    }
}