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

        /*$actual = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getSleepHistLastDay();

        $arraysleep = array();
        foreach($sleep as $dataset){
            $tmp = $dataset["date"]->format("Y-m-d");
            $arraysleep[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
        }

        $data = $arraysleep;
        $data = array(
            'sleep_hist' => $data,
            'sleep_lastday' => $actual
        );*/
        $data = json_encode($sleep);
        return new Response($data);
    }

    public function lastMonthAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getsleepHistLastMonth();

        /*$arraysleep = array();
        foreach($sleep as $dataset){
            $tmp = $dataset["date"]->format("Y-m-d");
            $arraysleep[] = ["date" => $tmp, "sleep" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
        }

        $data = $arraysleep;
        $data = array(
            'sleep_hist' => $data,
        );*/
        $data = json_encode($sleep);
        return new Response($data);
    }

    public function lastYearAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getSleepHistLastYear();

        /*$arraysleep = array();
        $arraysleep2 = array();
        $arraysleep3 = array();
        foreach($sleep as $dataset){
            $tmp = $dataset["date"]->format("Y-m");
            if($tmp == "2016-01") $arraysleep[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2016-02") $arraysleep2[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2016-03") $arraysleep3[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
        }

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep);
        $awake_moy=$cumul2/count($arraysleep);
        $awakening_moy=$cumul3/count($arraysleep);
        $in_bed_moy=$cumul4/count($arraysleep);
        $data = array(array("date" => "2016-01", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy,  "mean_awakening" => $awakening_moy,  "mean_in_bed" => $in_bed_moy));

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep2 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep2);
        $awake_moy=$cumul2/count($arraysleep2);
        $awakening_moy=$cumul3/count($arraysleep2);
        $in_bed_moy=$cumul4/count($arraysleep2);
        $data[] = array("date" => "2016-02", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy,  "mean_awakening" => $awakening_moy,  "mean_in_bed" => $in_bed_moy);

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep3 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep3);
        $awake_moy=$cumul2/count($arraysleep3);
        $awakening_moy=$cumul3/count($arraysleep3);
        $in_bed_moy=$cumul4/count($arraysleep3);
        $data[] = array("date" => "2016-03", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy,  "mean_awakening" => $awakening_moy,  "mean_in_bed" => $in_bed_moy);

        $data = array(
            'lastyear' => $data,
        );*/
        $data = json_encode($sleep);
        return new Response($data);
    }

    public function sleepMeanYearsAction()
    {
        $sleep = $this->getDoctrine()
            ->getManager()
            ->getRepository('ApiBundle:Datasets')
            ->getMeanSleepYears();
        /*$arraySleep = array();
        $arraySleep2 = array();
        $arraySleep3 = array();
        $arraySleep4 = array();
        $arraySleep5 = array();
        $arraysleep6 = array();
        $arraysleep7 = array();
        foreach($sleep as $dataset){
            $tmp = $dataset["date"]->format("Y");
            if($tmp == "2010") $arraysleep[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2011") $arraysleep2[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2012") $arraysleep3[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2013") $arraysleep4[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2014") $arraysleep5[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2015") $arraysleep6[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
            if($tmp == "2016") $arraysleep7[] = ["date" => $tmp, "sleeping" => $dataset["sleeping"], "awake" => $dataset["awake"], "awakening" => $dataset["awakening"], "inBed" => $dataset["inBed"]];
        }

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep);
        $awake_moy=$cumul2/count($arraysleep);
        $awakening_moy=$cumul3/count($arraysleep);
        $in_bed_moy=$cumul4/count($arraysleep);
        $data = array(array("date" => "2010", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy));

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep2 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep2);
        $awake_moy=$cumul2/count($arraysleep2);
        $awakening_moy=$cumul3/count($arraysleep2);
        $in_bed_moy=$cumul4/count($arraysleep2);
        $data[] = array("date" => "2011", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy);

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep3 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep3);
        $awake_moy=$cumul2/count($arraysleep3);
        $awakening_moy=$cumul3/count($arraysleep3);
        $in_bed_moy=$cumul4/count($arraysleep3);
        $data[] = array("date" => "2012", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy);

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep4 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep4);
        $awake_moy=$cumul2/count($arraysleep4);
        $awakening_moy=$cumul3/count($arraysleep4);
        $in_bed_moy=$cumul4/count($arraysleep4);
        $data[] = array("date" => "2013", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy);

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep5 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep5);
        $awake_moy=$cumul2/count($arraysleep5);
        $awakening_moy=$cumul3/count($arraysleep5);
        $in_bed_moy=$cumul4/count($arraysleep5);
        $data[] = array("date" => "2014", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy);

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep6 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep6);
        $awake_moy=$cumul2/count($arraysleep6);
        $awakening_moy=$cumul3/count($arraysleep6);
        $in_bed_moy=$cumul4/count($arraysleep6);
        $data[] = array("date" => "2015", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy);

        $cumul=0;
        $cumul2=0;
        $cumul3=0;
        $cumul4=0;
        foreach($arraysleep7 as $key=>$val)
        {
            $cumul += $val["sleeping"];
            $cumul2 += $val["awake"];
            $cumul3 += $val["awakening"];
            $cumul4 += $val["inBed"];
        }
        $sleeping_moy=$cumul/count($arraysleep7);
        $awake_moy=$cumul2/count($arraysleep7);
        $awakening_moy=$cumul3/count($arraysleep7);
        $in_bed_moy=$cumul4/count($arraysleep7);
        $data[] = array("date" => "2016", "mean_sleeping" => $sleeping_moy, "mean_awake" => $awake_moy, "mean_awakening" => $awakening_moy, "mean_in_bed" => $in_bed_moy);

        $data = array(
            'sleep_mean_years' => $data
        );*/
        $data = json_encode($sleep);
        return new Response($data);
    }
}