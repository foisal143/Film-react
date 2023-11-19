import React, { useEffect, useState } from 'react';
import Films from '../Films/Films';
import Cart from '../Cart/Cart';

const Filmscontainer = () => {
  const [films, setFilms] = useState([]);
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  // handler for break time
  const handlerBreakTime = brTime => {
    const getLocalValue = JSON.parse(localStorage.getItem('breakTime'));
    if (getLocalValue) {
      const newValue = getLocalValue + brTime;
      localStorage.setItem('breakTime', newValue);
      setBreakTime(newValue);
    } else {
      localStorage.setItem('breakTime', brTime);
      setBreakTime(brTime);
    }
  };

  // handler for get watch time
  const handlerWatchTime = time => {
    const getLocalValue = JSON.parse(localStorage.getItem('wachtime'));
    if (getLocalValue) {
      const newValue = getLocalValue + time;
      localStorage.setItem('wachtime', newValue);
      setTime(newValue);
    } else {
      localStorage.setItem('wachtime', time);
      setTime(time);
    }
  };
  // effect for data load
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(films => setFilms(films));
  }, []);

  // useEffect for watch time
  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem('wachtime'));
    setTime(localValue);
  }, [time]);
  // useEffect for break time
  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem('breakTime'));
    setBreakTime(localValue);
  }, [breakTime]);
  return (
    <div className="container my-5 d-flex justify-content-between ">
      <div className="">
        <h2>All Films Here</h2>
        <div className="row w-100">
          {films &&
            films.map(film => (
              <Films film={film} handlerWatchTime={handlerWatchTime}></Films>
            ))}
        </div>
      </div>
      <div className="w-100 mt-3">
        {' '}
        <Cart
          breakTime={breakTime}
          time={time}
          handlerBreakTime={handlerBreakTime}
        ></Cart>
      </div>
    </div>
  );
};

export default Filmscontainer;
