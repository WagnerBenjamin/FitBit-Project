<?php
// src/ApiBundle/Entity/DatasetsRepository.php
namespace ApiBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Symfony\Component\Validator\Constraints\Date;

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
    public function getWeightHistLastWeek(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getBMIActual(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.bmi')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfDefault(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.steps, d.floors, d.distance, d.calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfLMonth(){
        $qb = $this->_em->createQueryBuilder()
            ->select('avg(d.steps), avg(d.floors), avg(d.distance), avg(d.calories)')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfLYear(){
        $qb = $this->_em->createQueryBuilder()
            ->select('avg(d.steps), avg(d.floors), avg(d.distance), avg(d.calories)')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 12, 'MONTH') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfAllYear(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, avg(d.steps), avg(d.floors), avg(d.distance), avg(d.calories)')
            ->from($this->_entityName, 'd')
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }
}