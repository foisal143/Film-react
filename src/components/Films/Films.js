import React from 'react';

const Films = ({ film, handlerWatchTime }) => {
  console.log(film);
  const { watchTime, poster, movieName, imdbRating, description, category } =
    film;
  return (
    <div className="card p-2 col-md-5 m-3">
      <img
        style={{ height: '200px' }}
        className="w-50  fluid mx-auto"
        src={poster ? poster : 'https://picsum.photos/200'}
        alt=""
      />
      <div className="mt-2">
        <h5>{movieName}</h5>
        <p>{description}</p>
        <div className="d-flex justify-content-evenly align-items-center">
          <p>Watchtime: {watchTime}</p>
          <p>Ratings: {imdbRating}</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => handlerWatchTime(watchTime)}
            className="btn  btn-info"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Films;
