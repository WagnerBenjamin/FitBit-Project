<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Component\HttpFoundation\Response;

class ActivityController
{
    public function indexAction()
    {
        return new Response("Controlleur de l'activite");
    }
}