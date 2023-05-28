import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <small>{date}</small>
      </header>
      <p>{preview}</p>
    </article>
  );
}

export default Article;