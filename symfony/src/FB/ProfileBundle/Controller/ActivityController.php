<?php

namespace FB\ProfileBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ActivityController extends Controller
{
    public function indexAction()
    {
        return $this->render('FBProfileBundle:Activity:index.html.twig');
    }
}
