import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  async componentDidMount() {
    await getUrls()
    .then(url => this.setState({ urls: url.urls }))
    .catch(error => this.setState({ error: 'Whoops! Something blew up!'}))
  }

  addNewUrl = async (longUrl, title) => {
    postUrl(longUrl, title)
    .then(newUrl => this.setState({ urls: [...this.state.urls, newUrl]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
