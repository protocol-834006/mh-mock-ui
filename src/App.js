import React from 'react';
import './App.css';
import Layout from '../src/hoc/Layout/Layout';
import AppHome from '../src/containers/Home/Home';


class App extends React.Component {
  render() {
    return (
      <Layout>
        <AppHome />
      </Layout>

    );
  }
}

export default App;
