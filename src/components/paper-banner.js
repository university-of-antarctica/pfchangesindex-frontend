import React from 'react';
import PaperSheet from './papersheet';

const GET_RESTAURANTS = '{ restaurants_list { id name } }';

class PaperBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      comment: '',
    };
  }

  componentDidMount() {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query: GET_RESTAURANTS }),
    })
      .then(res => res.json())
      .then(res => console.log(res.data));
    //
    // fetch('https://1jzxrj179.lp.gql.zone/graphql', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ query: '{ posts { title } }' }),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res.data));
  }

  render() {
    return (
      <PaperSheet paperHeadline={this.state.headline} paperComment={this.state.comment}
      />
    );
  }
}

export default PaperBanner;

