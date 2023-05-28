import React from 'react';
import Header from './Header';
import About from './About';
import blogData from '../data/blog';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <main>
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;