import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const { posts } = props;

  const articleComponents = posts.map((post) => (
    <Article key={post.id} post={post} />
  ));

  return <main className="article-list">{articleComponents}</main>;
}

export default ArticleList;