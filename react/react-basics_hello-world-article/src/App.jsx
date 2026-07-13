import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is a H1 header</h1>
      <p>And this is a paragraph with lots of random and unnecesary text.</p>
    </article>
  );
}

/* import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Lady Gaga</h2>
      <label htmlFor="input-field">Label</label>
      <input id="input-field" />
      href="https://de.wikipedia.org/wiki/Lady_Gaga" className="article__link"
      <a>Reference</a>
    </article>
  );
}
 */
