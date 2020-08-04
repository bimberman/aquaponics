import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Header = props => {
  const history = useHistory();

  return (
    <div className='row w-100 m-0'>
      <div className="d-flex d-lg-none align-items-center col-12 mt-3 px-0">
        <Button
          outline
          color="primary"
          className="bg-transparent border-0 col-2 p-0"
          onClick={() => history.goBack()}
          type="button">
          <i className="fa fa-chevron-left fa-2x"></i>
        </Button>
        <h2 className="col-8 p-0 m-0 d-flex justify-content-center align-items-center">
          {props.pageName}
        </h2>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Header;
