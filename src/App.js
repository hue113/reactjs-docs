import React, { Component } from 'react';
import './App.css';
import Blog from './components/Blog';

class App extends Component {
    render() {
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];

        return (
        <div className='app'>
            <Blog posts={posts}/>
        </div>
        );
    }
}

export default App;

