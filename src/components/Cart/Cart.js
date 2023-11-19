import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Cart = ({ time, handlerBreakTime, breakTime }) => {
  const compliteTime = time - breakTime;
  const notify = () => toast(`Complited time: ${compliteTime}`);
  return (
    <div className="card w-100 mt-5 position-sticky top-0 p-2">
      <h4>Total Watchtime</h4>
      <input className="form-control" type="text" value={time} />
      <div className="my-3 ">
        <h5>Break Time</h5>
        <div className="my-3 d-flex jsutify-content-center align-items-center ">
          <button
            onClick={() => handlerBreakTime(15)}
            className="btn btn-warning"
          >
            15
          </button>
          <button
            onClick={() => handlerBreakTime(20)}
            className="btn btn-danger mx-3"
          >
            20
          </button>
          <button
            onClick={() => handlerBreakTime(25)}
            className="btn btn-success"
          >
            25
          </button>
        </div>
        <input className="form-control" type="text" value={breakTime} />
        <button onClick={notify} className="btn w-50 my-3 mx-auto btn-success">
          Complite
        </button>
      </div>
    </div>
  );
};

export default Cart;
