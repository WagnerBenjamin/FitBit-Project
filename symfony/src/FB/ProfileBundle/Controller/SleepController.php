<?php

namespace FB\ProfileBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class SleepController extends Controller
{
    public function indexAction()
    {
        return $this->render('FBProfileBundle:Sleep:index.html.twig');
    }
}
