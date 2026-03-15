import { Clock4 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
    
  // countdown
  const calculateTimeLeft = (targetDate: Date) => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    // Set the target date to exactly one week from now
    const oneWeekFromNow = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    return calculateTimeLeft(oneWeekFromNow);
  });

  useEffect(() => {
    const targetDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); // One week from now

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  return (
    <div className="flex items-center justify-start">
        <div className="text-center">
            <div className="flex space-x-6 text-orange-800">
                <Clock4 />
                <div className='flex space-x-1'>
                    <div className="text-center">
                        <p className="text-xl font-semibold">{timeLeft.days} :</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-semibold">{timeLeft.hours} :</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-semibold">{timeLeft.minutes} :</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-semibold">{timeLeft.seconds}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountDownTimer