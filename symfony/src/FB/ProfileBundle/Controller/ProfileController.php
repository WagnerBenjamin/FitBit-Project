<?php

namespace FB\ProfileBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ProfileController extends Controller
{
    public function indexAction()
    {
        return $this->render('FBProfileBundle:Profile:index.html.twig', array(
            'pseudo' => 'benjamin'
        ));
    }
}
