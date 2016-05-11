<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Component\HttpFoundation\Response;

class SleepController
{
    public function indexAction()
    {
        return new Response("Controlleur du sommeil");
    }
}