'use client'

import { Clock4 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const COUNTDOWN_KEY = 'greenbasket-countdown-end'

const CountDownTimer = () => {

  const calculateTimeLeft = (targetDate: number) => {
    const difference = targetDate - Date.now()

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const getTargetDate = () => {
    const savedDate = localStorage.getItem(COUNTDOWN_KEY)

    if (savedDate) {
      const parsed = Number(savedDate)

      if (parsed > Date.now()) {
        return parsed
      }
    }

    // create new 7-day countdown
    const newTarget = Date.now() + 7 * 24 * 60 * 60 * 1000
    localStorage.setItem(COUNTDOWN_KEY, newTarget.toString())

    return newTarget
  }

  const [targetDate, setTargetDate] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = getTargetDate()
    setTargetDate(target)

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft(target)

      setTimeLeft(remaining)

      // reset when countdown finishes
      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        const newTarget = Date.now() + 7 * 24 * 60 * 60 * 1000
        localStorage.setItem(COUNTDOWN_KEY, newTarget.toString())
        setTargetDate(newTarget)
      }

    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!targetDate) return null

  return (
    <div className="flex items-center justify-start">
      <div className="text-center">
        <div className="flex space-x-6 text-orange-800">
          <Clock4 />
          <div className='flex space-x-1'>
            <p className="text-xl font-semibold">{timeLeft.days} :</p>
            <p className="text-xl font-semibold">{timeLeft.hours} :</p>
            <p className="text-xl font-semibold">{timeLeft.minutes} :</p>
            <p className="text-xl font-semibold">{timeLeft.seconds}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountDownTimer