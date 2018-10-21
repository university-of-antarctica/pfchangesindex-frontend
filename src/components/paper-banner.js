import React from 'react';
import PaperSheet from './papersheet';

const GET_RESTAURANTS = '{ restaurant { name, rating } }';

class PaperBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      comment: '',
      data: null,
    };
  }

  componentDidMount() {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query: GET_RESTAURANTS }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.data });
        console.log(res.data);
      });
  }

  render() {
    return (
      <PaperSheet paperHeadline={this.state.headline} paperComment={this.state.comment}
      />
    );
  }
}

export default PaperBanner;

