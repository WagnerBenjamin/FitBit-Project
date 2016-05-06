<?php

namespace FB\ProfileBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PerfController extends Controller
{
    public function indexAction()
    {
        return $this->render('FBProfileBundle:Perf:index.html.twig');
    }
}
