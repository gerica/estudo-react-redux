import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions/actions';
import ContactForm from './components/concact-form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  submit = values => {
    const { getData } = this.props;
    getData(values);
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <ContactForm onSubmit={this.submit} />
        </header>
      </div>
    );
  }
}

// App.propTypes = {
//   getData: React.PropTypes.func,
// };

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    state: state,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getData: value => {
      console.log(value);
      dispatch(Actions.getData(value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
