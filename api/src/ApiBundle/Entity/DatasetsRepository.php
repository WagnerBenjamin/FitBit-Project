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
            ->select('SUBSTRING(d.date, 1, 10) as date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $qq = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.bmi')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE :end")
            ->setParameter('end', date($this->now))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $data = array(
            "weight_hist" => $qb,
            "bmi_actual" => $qq,
        );

        return $data;
    }
    public function getWeightHistLastMonth()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $data = array(
            "weight_hist" => $qb
        );
        return $data;
    }
    public function getWeightHistLastYear()
    {
        $m1 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m2 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 2, 'MONTH')+1 AND DATE_SUB(:end, 1, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m3 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, d.weight')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 3, 'MONTH')+1 AND DATE_SUB(:end, 2, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $arr[0] = $m3[0];
        $arr[1] = $m2[0];
        $arr[2] = $m1[0];

        $data = array('lastyear' => $arr);
        return $data;
    }
    public function getWeightYear($year){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 4) as date, avg(d.weight) as weight')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE '$year%'")
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }
    public function getMeanWeightYears()
    {
        $m1 = $this->getWeightYear("2010");
        $m2 = $this->getWeightYear("2011");
        $m3 = $this->getWeightYear("2012");
        $m4 = $this->getWeightYear("2013");
        $m5 = $this->getWeightYear("2014");
        $m6 = $this->getWeightYear("2015");
        $m7 = $this->getWeightYear("2016");

        $arr[0] = $m1[0];
        $arr[1] = $m2[0];
        $arr[2] = $m3[0];
        $arr[3] = $m4[0];
        $arr[4] = $m5[0];
        $arr[5] = $m6[0];
        $arr[6] = $m7[0];

        $data = array(
            'Mean_weight_years' => $arr
        );
        return $data;
    }

    public function getPerfDefault()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.steps, d.floors, d.distance, d.calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()
            ->getResult();

        $qq = $this->_em->createQueryBuilder()
            ->select('d.steps, d.floors, d.distance, d.calories')
            ->from($this->_entityName, 'd')
            ->where("d.date = :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()
            ->getResult();

        $data = array(
            "perf_hist" => $qb,
            "perf_lastday" => $qq,
        );
        return $data;
    }
    public function getPerfThisMonth()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.steps, d.floors, d.distance, d.calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $data = array(
            "perf_hist" => $qb,
        );
        return $data;
    }
    public function getPerfLYear()
    {
        $m1 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.steps) as steps, avg(d.floors) as floors, avg(d.distance) as distance, avg(d.calories) as calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m2 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.steps) as steps, avg(d.floors) as floors, avg(d.distance) as distance, avg(d.calories) as calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 2, 'MONTH')+1 AND DATE_SUB(:end, 1, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m3 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.steps) as steps, avg(d.floors) as floors, avg(d.distance) as distance, avg(d.calories) as calories')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 3, 'MONTH')+1 AND DATE_SUB(:end, 2, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $arr[0] = $m3[0];
        $arr[1] = $m2[0];
        $arr[2] = $m1[0];

        $data = array(
            'lastyear' => $arr
        );
        return $data;
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
        $m1 = $this->getPerfYear("2010");
        $m2 = $this->getPerfYear("2011");
        $m3 = $this->getPerfYear("2012");
        $m4 = $this->getPerfYear("2013");
        $m5 = $this->getPerfYear("2014");
        $m6 = $this->getPerfYear("2015");
        $m7 = $this->getPerfYear("2016");

        $arr[0] = $m1[0];
        $arr[1] = $m2[0];
        $arr[2] = $m3[0];
        $arr[3] = $m4[0];
        $arr[4] = $m5[0];
        $arr[5] = $m6[0];
        $arr[6] = $m7[0];

        $data = array(
            "mean_perf_year" => $arr,
        );
        return $data;
    }

    public function getActDefault()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.sedentary, d.mobile, d.active, d.veryActive')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()
            ->getResult();

        $qq = $this->_em->createQueryBuilder()
            ->select('d.sedentary, d.mobile, d.active, d.veryActive')
            ->from($this->_entityName, 'd')
            ->where("d.date = :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()
            ->getResult();

        $data = array(
            "activity_hist" => $qb,
            "activity_lastday" => $qq,
        );
        return $data;
    }
    public function getActThisMonth()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.sedentary, d.mobile, d.active, d.veryActive')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $data = array(
            "activity_hist" => $qb,
        );
        return $data;
    }
    public function getActLYear()
    {
        $m1 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sedentary) as sedentary, avg(d.mobile) as mobile, avg(d.active) as active, avg(d.veryActive) as very_active')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m2 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sedentary) as sedentary, avg(d.mobile) as mobile, avg(d.active) as active, avg(d.veryActive) as very_active')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 2, 'MONTH')+1 AND DATE_SUB(:end, 1, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m3 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sedentary) as sedentary, avg(d.mobile) as mobile, avg(d.active) as active, avg(d.veryActive) as very_active')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 3, 'MONTH')+1 AND DATE_SUB(:end, 2, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $arr[0] = $m3[0];
        $arr[1] = $m2[0];
        $arr[2] = $m1[0];

        $data = array(
            "lastyear" => $arr,
        );
        return $data;
    }
    public function getActYear($year){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 4) as date, avg(d.sedentary) as sedentary, avg(d.mobile) as mobile, avg(d.active) as active, avg(d.veryActive) as very_active')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE '$year%'")
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }
    public function getActAllYear()
    {
        $m1 = $this->getActYear("2016");
        $m2 = $this->getActYear("2015");
        $m3 = $this->getActYear("2014");
        $m4 = $this->getActYear("2013");
        $m5 = $this->getActYear("2012");
        $m6 = $this->getActYear("2011");
        $m7 = $this->getActYear("2010");
        $arr[0] = $m7[0];
        $arr[1] = $m6[0];
        $arr[2] = $m5[0];
        $arr[3] = $m4[0];
        $arr[4] = $m3[0];
        $arr[5] = $m2[0];
        $arr[6] = $m1[0];

        $data = array(
            "activity_hist" => $arr,
        );
        return $data;
    }

    public function getSleepHistLastWeek(){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.sleeping, d.awake, d.awakening, d.inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 6, 'day') AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()
            ->getResult();

        $qq = $this->_em->createQueryBuilder()
            ->select('d.sleeping, d.awake, d.awakening, d.inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date = :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()
            ->getResult();

        $data = array(
            "sleep_hist" => $qb,
            "sleep_lastday" => $qq,
        );
        return $data;
    }
    public function getSleepHistLastMonth(){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 10) as date, d.sleeping as sleep, d.awake, d.awakening, d.inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $data = array(
            "sleep_hist" => $qb,
        );
        return $data;
    }
    public function getSleepHistLastYear(){
        $m1 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sleeping) as mean_sleeping, avg(d.awake) as mean_awake, avg(d.awakening) as mean_awakening, avg(d.inBed) as mean_inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 1, 'MONTH')+1 AND :end")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m2 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sleeping) as mean_sleeping, avg(d.awake) as mean_awake, avg(d.awakening) as mean_awakening, avg(d.inBed) as mean_inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 2, 'MONTH')+1 AND DATE_SUB(:end, 1, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();
        $m3 = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 7) as date, avg(d.sleeping) as mean_sleeping, avg(d.awake) as mean_awake, avg(d.awakening) as mean_awakening, avg(d.inBed) as mean_inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date BETWEEN DATE_SUB(:end, 3, 'MONTH')+1 AND DATE_SUB(:end, 2, 'MONTH')")
            ->setParameter('end', date('2016-03-31'))
            ->orderBy('d.id')
            ->getQuery()->getResult();

        $arr[0] = $m3[0];
        $arr[1] = $m2[0];
        $arr[2] = $m1[0];
        $data = array(
            'lastyear' => $arr
        );
        return $data;
    }
    public function getSleepYear($year){
        $qb = $this->_em->createQueryBuilder()
            ->select('SUBSTRING(d.date, 1, 4) as date, avg(d.sleeping) as mean_sleeping, avg(d.awake) as mean_awake, avg(d.awakening) as mean_awakening, avg(d.inBed) as mean_inBed')
            ->from($this->_entityName, 'd')
            ->where("d.date LIKE '$year%'")
            ->orderBy('d.id');

        return $qb->getQuery()->getResult();
    }
    public function getMeanSleepYears(){
        $m1 = $this->getSleepYear("2016");
        $m2 = $this->getSleepYear("2015");
        $m3 = $this->getSleepYear("2014");
        $m4 = $this->getSleepYear("2013");
        $m5 = $this->getSleepYear("2012");
        $m6 = $this->getSleepYear("2011");
        $m7 = $this->getSleepYear("2010");
        $arr[0] = $m7[0];
        $arr[1] = $m6[0];
        $arr[2] = $m5[0];
        $arr[3] = $m4[0];
        $arr[4] = $m3[0];
        $arr[5] = $m2[0];
        $arr[6] = $m1[0];

        $data = array(
            'sleep_mean_years' => $arr
        );
        return $data;
    }


}