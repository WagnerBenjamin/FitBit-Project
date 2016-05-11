<?php

// src/ApiBundle/Controller/ProfileController.php

namespace ApiBundle\Controller;

use Symfony\Component\HttpFoundation\Response;

class PerfController
{
    public function indexAction()
    {
        return new Response("Controlleur des perfs");
    }
}