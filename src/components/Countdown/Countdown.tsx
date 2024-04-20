import React, { useEffect, useState } from 'react';

interface CountDownProps {
    date?: string | Date;
}

export const CountDown: React.FC<CountDownProps> = ({ date }) => {
  const [timeRemaining, setTimeRemaining] = useState<{ [key: string]: number } | null>(null);

  const getPaddedZero = (value: number): string => {
    return value < 10 ? `0${value.toString()}` : value.toString()
  }

  useEffect(() => {
    if (date) {
      const endDate = new Date(date).getTime();

      const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const timeDifference = endDate - now;

        if (timeDifference > 0) {
          const oneSecond = 1000;
          const oneMinute = oneSecond * 60;
          const oneHour = oneMinute * 60;
          const oneDay = oneHour * 24;
          const oneWeek = oneDay * 7;
          const oneMonth = oneDay * 30; // Approximate, not accounting for varying month lengths
          const oneYear = oneDay * 365; // Approximate, not accounting for leap years

          const years = Math.floor(timeDifference / oneYear);
          const months = Math.floor((timeDifference % oneYear) / oneMonth);
          const weeks = Math.floor((timeDifference % oneMonth) / oneWeek);
          const days = Math.floor((timeDifference % oneWeek) / oneDay);
          const hours = Math.floor((timeDifference % oneDay) / oneHour);
          const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
          const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

          setTimeRemaining({ years, months, weeks, days, hours, minutes, seconds });
        } else {
          // The date has passed
          setTimeRemaining(null);
        }
      };

      // Initial calculation
      calculateTimeRemaining();

      // Update every second
      const intervalId = setInterval(calculateTimeRemaining, 1000);

      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    } else {
      setTimeRemaining(null);
    }
  }, [date]);

  if (!date) {
    return (
      <div>
        <span className="bg-orange-600 px-2 rounded-2xl text-white">
                    TBC
        </span>
      </div>
    );
  }

  if (!timeRemaining) {
    return (
      <div>
        <span className="bg-red-600 px-2 rounded-2xl text-white">
                    Passed
        </span>
      </div>
    );
  }



  return (
    <div>
      <div className="flex flex-row">
        {timeRemaining.years > 0 && <div className="mr-2 text-xl">{timeRemaining.years}Y</div>}
        {timeRemaining.months > 0 && <div className="mr-2 text-xl">{timeRemaining.months}M</div>}
        {timeRemaining.weeks > 0 && <div className="mr-2 text-xl">{timeRemaining.weeks}W</div>}
        {timeRemaining.days > 0 && <div className="mr-2 text-xl">{timeRemaining.days}D</div>}
        <div className="mr-2 text-xl">{getPaddedZero(timeRemaining.hours)}:{getPaddedZero(timeRemaining.minutes)}:{getPaddedZero(timeRemaining.seconds)}</div>
      </div>
    </div>
  );
};

export default CountDown;
