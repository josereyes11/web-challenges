import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Lady Gaga</h2>
      <label htmlFor="input-field">Label</label>
      <input id="input-field" type="text" />
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Lady_Gaga"
      >
        Reference
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
