import React from 'react';

export default class ItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      items: []
    };
  }

  componentDidMount() {
    this.setState({ title: this.props.title, items: this.props.items });
  }

  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className='my-3 d-flex justify-content-center align-items-center flex-wrap col-11'>
          <h4></h4>
        </div>
      </div>
    );
  }
}
