import React from 'react';
import { Link } from 'react-router-dom';

const MainView = props => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='mt-5'>Main Menu</h1>
      <div className='my-3 d-flex justify-content-center align-items-center flex-wrap'>
        <Link
          className="py-2 my-3 btn btn-primary col-9"
          to="/controls">
          <p className="p-0 m-0">System Status</p>
        </Link>
        <Link
          className="py-2 my-3 btn btn-primary col-9"
          to="/inventory">
          <p className="p-0 m-0">Fish Inventory</p>
        </Link>
        <Link
          className="py-2 my-3 btn btn-primary col-9"
          to="/graphs-and-stats">
          <p className="p-0 m-0">Graphs & Stats</p>
        </Link>
        <Link
          className="py-2 my-3 btn btn-primary col-9"
          to="/tasks">
          <p className="p-0 m-0">Tasks</p>
        </Link>
      </div>
    </div>
  );
};

export default MainView;
