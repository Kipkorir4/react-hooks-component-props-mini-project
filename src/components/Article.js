import React from "react";

function Article({ title, date, preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  const coffeeCupEmoji = "☕️";
  const bentoBoxEmoji = "🍱";

  const readTime =
    minutes <= 30
      ? `${coffeeCupEmoji.repeat(coffeeCups)} ${minutes} min read`
      : `${bentoBoxEmoji.repeat(bentoBoxes)} ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{readTime}</small>
    </article>
  );
}

export default Article;
