<?php
// src/ApiBundle/Entity/DatasetsRepository.php
namespace ApiBundle\Entity;

use Doctrine\ORM\EntityRepository;

class DatasetsRepository extends EntityRepository
{
    public function findAllOrderedByName()
    {
        return $this->getEntityManager()
        ->createQuery(
        'SELECT d FROM ApiBundle:Datasets d ORDER BY d.id ASC'
        )
        ->getResult();
    }
    public function find2()
    {
        return $this->getEntityManager()
            ->createQuery(
                'SELECT d FROM ApiBundle:Datasets d WHERE d.id = 2'
            )
            ->getResult();
    }
}