<?php
// src/ApiBundle/Entity/DatasetsRepository.php
namespace ApiBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Symfony\Component\Validator\Constraints\Date;

class DatasetsRepository extends EntityRepository
{
    private $now = '2016-03-31';
    public function findAllOrderedById()
    {
        return $this->getEntityManager()
        ->createQuery(
        'SELECT d FROM ApiBundle:Datasets d ORDER BY d.id ASC'
        )
        ->getResult();
    }
    public function getWeightHistLastWeek(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getBMIActual(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.bmi')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getWeightHistLastMonth(){
        $parsed_date = date_parse($this->now);
        $year = $parsed_date["year"];
        $month = $parsed_date["month"];
        if($month < 10) $month = '0'.$month;

        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :month")
            ->setParameter('month', $year.'-'.$month.'-%')
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getWeightHistLastYear(){
        $parsed_date = date_parse($this->now);
        $year = $parsed_date["year"];
        $qb = $this->_em->createQueryBuilder()
            ->select("d.date, d.weight")
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :year")
            ->setParameter('year', $year.'-%');

        return $qb->getQuery()->getResult();
    }

    public function getMeanWeightYears(){
        return $this->getEntityManager()
            ->createQuery(
                'SELECT d.date, d.weight FROM ApiBundle:Datasets d ORDER BY d.id ASC'
            )
            ->getResult();
    }

    public function getSleepHistLastWeek(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.sleeping, d.awake, d.awakening, d.inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getSleepHistLastDay(){
        $qb = $this->_em->createQueryBuilder()
            ->select('d.sleeping, d.awake, d.awakening, d.inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :now")
            ->setParameter('now', date($this->now))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getSleepHistLastMonth(){
        $parsed_date = date_parse($this->now);
        $year = $parsed_date["year"];
        $month = $parsed_date["month"];
        if($month < 10) $month = '0'.$month;

        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.sleeping, d.awake, d.awakening, d.inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :month")
            ->setParameter('month', $year.'-'.$month.'-%')
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getSleepHistLastYear(){
        $parsed_date = date_parse($this->now);
        $year = $parsed_date["year"];
        $qb = $this->_em->createQueryBuilder()
            ->select("d.date, d.sleeping, d.awake, d.awakening, d.inBed")
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :year")
            ->setParameter('year', $year.'-%');

        return $qb->getQuery()->getResult();
    }

    public function getMeanSleepYears(){
        return $this->getEntityManager()
            ->createQuery(
                'SELECT d.date, d.sleeping, d.awake, d.awakening, d.inBed FROM ApiBundle:Datasets d ORDER BY d.id ASC'
            )
            ->getResult();
    }
}