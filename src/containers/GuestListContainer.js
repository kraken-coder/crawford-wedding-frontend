import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuestList from '../components/guests/GuestList';
import { fetchGuestList } from '../actions/guestListActions';

class GuestListContainer extends Component {

  componentDidMount() {
    this.props.fetchGuestList();
  }

  render() {
    return (
      <div className="guestList">
        <h1>Attendees</h1>
        <GuestList
          guestList={ this.props.guestList }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { guestList: state.guestList.guests }
}

export default connect(mapStateToProps, { fetchGuestList })(GuestListContainer)
