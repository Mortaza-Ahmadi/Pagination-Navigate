import { useState, useEffect } from 'react';

export function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer); // پاک‌سازی تایمر
      console.log('تایمر پاک شد');
    };
  }, []);

  return (
    <div>
      <p>شمارش: {count}</p>
    </div>
  );
}
