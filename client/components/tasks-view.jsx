import React from 'react';
import Header from './header';

export default class Tasks extends React.Component {

  render() {
    return (
      <div className='d-flex justify-content-center'>
        <Header pageName='Tasks' />
      </div>
    );
  }
}
