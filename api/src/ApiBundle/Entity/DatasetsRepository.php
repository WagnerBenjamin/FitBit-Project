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

    public function getWeightHistLastWeek()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getBMIActual()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.bmi')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getWeightHistLastMonth()
    {
        $parsed_date = date_parse($this->now);
        $year = $parsed_date["year"];
        $month = $parsed_date["month"];
        if ($month < 10) $month = '0' . $month;

        $qb = $this->_em->createQueryBuilder()
            ->select('d.date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :month")
            ->setParameter('month', $year . '-' . $month . '-%')
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getWeightHistLastYear()
    {
        $parsed_date = date_parse($this->now);
        $year = $parsed_date["year"];
        $qb = $this->_em->createQueryBuilder()
            ->select("d.date, d.weight")
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :year")
            ->setParameter('year', $year . '-%');

        return $qb->getQuery()->getResult();
    }

    public function getMeanWeightYears(){
        return $this->getEntityManager()
            ->createQuery(
                'SELECT d.date, d.weight FROM ApiBundle:Datasets d ORDER BY d.id ASC'
            )
            ->getResult();
    }

    public function getPerfDefault()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 9) as date, d.steps, d.floors, d.distance, d.calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfThisMonth()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.steps) as steps, avg(d.floors) as floors, avg(d.distance) as distance, avg(d.calories) as calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfMonth($monthBehind = 2)
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.steps) as steps, avg(d.floors) as floors, avg(d.distance) as distance, avg(d.calories) as calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, $monthBehind, 'MONTH')+1 AND DATE_SUB(:end, '$monthBehind-1', 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfLYear()
    {
        $arr = array(
            $this->getPerfThisMonth(),
            $this->getPerfMonth(2),
            $this->getPerfMonth(3),
        );

        return $arr;
    }

    public function getPerfYear($year){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 4) as date, avg(d.steps) as steps, avg(d.floors) as floors, avg(d.distance) as distance, avg(d.calories) as calories')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE '$year%'")
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getPerfAllYear()
    {
        $arr = array(
            $this->getPerfYear("2016"),
            $this->getPerfYear("2015"),
            $this->getPerfYear("2014")
        );

        return $arr;
    }

    public function getActDefault()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 9) as date, d.sedentary, d.mobile, d.active, d.veryActive')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getActThisMonth()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 9) as date, d.sedentary, d.mobile, d.active, d.veryActive')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getActMonth($monthBehind = 2)
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sedentary) as sedentary, avg(d.mobile) as mobile, avg(d.active) as active, avg(d.veryActive) as very_active')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, $monthBehind, 'MONTH')+1 AND DATE_SUB(:end, '$monthBehind-1', 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getActLYear()
    {
        $arr = array(
            $this->getActThisMonth(),
            $this->getActMonth(2),
            $this->getActMonth(3),
        );

        return $arr;
    }

    public function getActYear($year){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sedentary) as sedentary, avg(d.mobile) as mobile, avg(d.active) as active, avg(d.veryActive) as very_active')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE '$year%'")
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }

    public function getActAllYear()
    {
        $arr = array(
            $this->getActYear("2016"),
            $this->getActYear("2015"),
            $this->getActYear("2014")
        );

        return $arr;
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