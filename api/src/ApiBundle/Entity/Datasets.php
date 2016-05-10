<?php

namespace ApiBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * Datasets
 *
 * @ORM\Table(name="datasets")
 * @ORM\Entity(repositoryClass="ApiBundle\Entity\DatasetsRepository")
 */
class Datasets implements JsonSerializable
{
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false)
     */
    private $date;

    /**
     * @var integer
     *
     * @ORM\Column(name="weight", type="smallint", nullable=false)
     */
    private $weight;

    /**
     * @var integer
     *
     * @ORM\Column(name="bmi", type="smallint", nullable=false)
     */
    private $bmi;

    /**
     * @var integer
     *
     * @ORM\Column(name="sleeping", type="integer", nullable=false)
     */
    private $sleeping;

    /**
     * @var integer
     *
     * @ORM\Column(name="awake", type="integer", nullable=false)
     */
    private $awake;

    /**
     * @var integer
     *
     * @ORM\Column(name="awakening", type="integer", nullable=false)
     */
    private $awakening;

    /**
     * @var integer
     *
     * @ORM\Column(name="in_bed", type="integer", nullable=false)
     */
    private $inBed;

    /**
     * @var integer
     *
     * @ORM\Column(name="calories", type="integer", nullable=false)
     */
    private $calories;

    /**
     * @var integer
     *
     * @ORM\Column(name="steps", type="integer", nullable=false)
     */
    private $steps;

    /**
     * @var integer
     *
     * @ORM\Column(name="distance", type="integer", nullable=false)
     */
    private $distance;

    /**
     * @var integer
     *
     * @ORM\Column(name="floors", type="smallint", nullable=false)
     */
    private $floors;

    /**
     * @var integer
     *
     * @ORM\Column(name="sedentary", type="integer", nullable=false)
     */
    private $sedentary;

    /**
     * @var integer
     *
     * @ORM\Column(name="mobile", type="integer", nullable=false)
     */
    private $mobile;

    /**
     * @var integer
     *
     * @ORM\Column(name="active", type="integer", nullable=false)
     */
    private $active;

    /**
     * @var integer
     *
     * @ORM\Column(name="very_active", type="integer", nullable=false)
     */
    private $veryActive;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;



    /**
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Datasets
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set weight
     *
     * @param integer $weight
     *
     * @return Datasets
     */
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * Get weight
     *
     * @return integer
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set bmi
     *
     * @param integer $bmi
     *
     * @return Datasets
     */
    public function setBmi($bmi)
    {
        $this->bmi = $bmi;

        return $this;
    }

    /**
     * Get bmi
     *
     * @return integer
     */
    public function getBmi()
    {
        return $this->bmi;
    }

    /**
     * Set sleeping
     *
     * @param integer $sleeping
     *
     * @return Datasets
     */
    public function setSleeping($sleeping)
    {
        $this->sleeping = $sleeping;

        return $this;
    }

    /**
     * Get sleeping
     *
     * @return integer
     */
    public function getSleeping()
    {
        return $this->sleeping;
    }

    /**
     * Set awake
     *
     * @param integer $awake
     *
     * @return Datasets
     */
    public function setAwake($awake)
    {
        $this->awake = $awake;

        return $this;
    }

    /**
     * Get awake
     *
     * @return integer
     */
    public function getAwake()
    {
        return $this->awake;
    }

    /**
     * Set awakening
     *
     * @param integer $awakening
     *
     * @return Datasets
     */
    public function setAwakening($awakening)
    {
        $this->awakening = $awakening;

        return $this;
    }

    /**
     * Get awakening
     *
     * @return integer
     */
    public function getAwakening()
    {
        return $this->awakening;
    }

    /**
     * Set inBed
     *
     * @param integer $inBed
     *
     * @return Datasets
     */
    public function setInBed($inBed)
    {
        $this->inBed = $inBed;

        return $this;
    }

    /**
     * Get inBed
     *
     * @return integer
     */
    public function getInBed()
    {
        return $this->inBed;
    }

    /**
     * Set calories
     *
     * @param integer $calories
     *
     * @return Datasets
     */
    public function setCalories($calories)
    {
        $this->calories = $calories;

        return $this;
    }

    /**
     * Get calories
     *
     * @return integer
     */
    public function getCalories()
    {
        return $this->calories;
    }

    /**
     * Set steps
     *
     * @param integer $steps
     *
     * @return Datasets
     */
    public function setSteps($steps)
    {
        $this->steps = $steps;

        return $this;
    }

    /**
     * Get steps
     *
     * @return integer
     */
    public function getSteps()
    {
        return $this->steps;
    }

    /**
     * Set distance
     *
     * @param integer $distance
     *
     * @return Datasets
     */
    public function setDistance($distance)
    {
        $this->distance = $distance;

        return $this;
    }

    /**
     * Get distance
     *
     * @return integer
     */
    public function getDistance()
    {
        return $this->distance;
    }

    /**
     * Set floors
     *
     * @param integer $floors
     *
     * @return Datasets
     */
    public function setFloors($floors)
    {
        $this->floors = $floors;

        return $this;
    }

    /**
     * Get floors
     *
     * @return integer
     */
    public function getFloors()
    {
        return $this->floors;
    }

    /**
     * Set sedentary
     *
     * @param integer $sedentary
     *
     * @return Datasets
     */
    public function setSedentary($sedentary)
    {
        $this->sedentary = $sedentary;

        return $this;
    }

    /**
     * Get sedentary
     *
     * @return integer
     */
    public function getSedentary()
    {
        return $this->sedentary;
    }

    /**
     * Set mobile
     *
     * @param integer $mobile
     *
     * @return Datasets
     */
    public function setMobile($mobile)
    {
        $this->mobile = $mobile;

        return $this;
    }

    /**
     * Get mobile
     *
     * @return integer
     */
    public function getMobile()
    {
        return $this->mobile;
    }

    /**
     * Set active
     *
     * @param integer $active
     *
     * @return Datasets
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * Get active
     *
     * @return integer
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Set veryActive
     *
     * @param integer $veryActive
     *
     * @return Datasets
     */
    public function setVeryActive($veryActive)
    {
        $this->veryActive = $veryActive;

        return $this;
    }

    /**
     * Get veryActive
     *
     * @return integer
     */
    public function getVeryActive()
    {
        return $this->veryActive;
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    function jsonSerialize()
    {
        return array(
            'date' => $this->date->format('Y-m-d'),
            'weight' => $this->weight,
            'bmi' => $this->bmi,
            'sleeping' => $this->sleeping,
            'awake' => $this->awake,
            'awakening' => $this->awakening,
            'in_bed' => $this->inBed,
            'calories' => $this->calories,
            'steps' => $this->steps,
            'distance' => $this->distance,
            'floors' => $this->floors,
            'sedentary' => $this->sedentary,
            'mobile' => $this->mobile,
            'active' => $this->active,
            'very_active' => $this->veryActive
        );
    }
}
