# React with Arrays

## 1. Main Concepts and Definitions

**Rendering lists with `.map()`**
To render a list of elements from an array, React uses the array method `.map()`. `.map()` runs a callback once per array item and produces a new array of transformed results — in this context, transforming each raw data item into a piece of JSX. Since `{ }` in JSX can hold any JavaScript expression, and `.map()` returns an array of JSX elements, you can place a `.map()` call directly inside your JSX to render the whole list at once.

**The `key` prop**
When rendering a list, every top-level element produced inside `.map()` needs a unique `key` prop. Without it, React logs a warning: *"Each child in a list should have a unique key prop."* React uses `key` internally to track which rendered element corresponds to which data item across re-renders — important for correctly handling reordering, insertions, and deletions later. Because of this, `key` is not a normal prop: you cannot read it inside the component it's attached to (`props.key` is always `undefined`). If a component needs that identifying value for its own logic, it must be passed again under a different name (e.g. both `key={id}` and `id={id}`).

The array being rendered should therefore always contain a genuinely unique identifier per item — typically achieved by using an array of objects, each with a stable `id`. In cases where no `id` exists but another field is guaranteed unique (like a role name, or a habitat name), that value can be used as the key instead.

**Keyed Fragments**
If a single item in a list needs to render more than one sibling element (not wrapped in one single tag), the short fragment syntax `<>...</>` cannot be used, because it cannot accept a `key` prop. In that case, use the explicit `<Fragment key={...}>...</Fragment>` form, imported from `"react"`.

**Filtering with `.filter()`**
`.filter()` is a companion method to `.map()`: it also runs a callback once per array item, but instead of transforming each item, the callback returns `true` or `false`. Items where the callback returns `true` are kept in a new array; everything else is dropped. This is the standard way to build filtered views — e.g. "only show animals whose habitat matches the currently selected habitat."

**Combining state with `.map()` and `.filter()`**
A common pattern: state tracks a user's current selection (e.g. a selected category, set via button clicks), `.filter()` derives a subset of the full data array based on that state, and `.map()` renders that filtered subset. Because the filtered variable is *derived* from state on every render (not stored as its own state), it automatically updates whenever the underlying state changes — no extra state or effect needed.

**Conditional styling per list item**
When rendering multiple items where one might be visually distinct (e.g. a "selected" button, or an "admin" tag), the same ternary techniques from earlier chapters apply per item — either building a conditional `className` string, or a conditional `style` object, comparing the current item to some piece of state or a fixed condition.

## 2. Examples

**Basic list rendering (from the chapter doc)**
```jsx
function Drinks() {
  const drinks = ["water", "lemonade", "coffee", "tee"];

  return (
    <ul>
      {drinks.map((drink) => (
        <li>{drink}</li>
      ))}
    </ul>
  );
}
```

**With a proper unique `key`, using an array of objects**
```jsx
function Drinks() {
  const drinks = [
    { id: 0, name: "water" },
    { id: 1, name: "lemonade" },
    { id: 2, name: "coffee" },
    { id: 3, name: "tea" },
  ];

  return (
    <ul>
      {drinks.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
```

**`key` is not accessible as a regular prop**
```jsx
function Drink({ name, key }) {
  console.log(key); // → undefined, always
  return <li>{name}</li>;
}

function Drinks() {
  const drinks = [
    { id: 0, name: "water" },
    { id: 1, name: "lemonade" },
  ];

  return (
    <ul>
      {drinks.map(({ id, name }) => (
        // need it inside the component? pass it again under another name:
        <Drink key={id} id={id} name={name} />
      ))}
    </ul>
  );
}
```

**Keyed Fragments for multi-element list items**
```jsx
import { Fragment } from "react";

function Drinks() {
  const drinks = [
    { id: 0, name: "water", description: "very wet" },
    { id: 1, name: "lemonade", description: "quite sweet" },
  ];

  return (
    <dl>
      {drinks.map(({ id, name, description }) => (
        <Fragment key={id}>
          <dt>{name}</dt>
          <dd>{description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
```

**Rendering a component per array item, with a color prop (Fruits challenge)**
```jsx
const fruits = [
  { id: 1, name: "🍌 Banana", color: "yellow" },
  { id: 2, name: "🍎 Apple", color: "red" },
];

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}

// Card.jsx
export default function Card({ name, color }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {name}
    </p>
  );
}
```

**Nested `.map()` calls + conditional className (Users challenge)**
```jsx
// App.jsx — one Card per user
{USERS.map((user) => (
  <Card key={user.id} user={user} />
))}

// Card.jsx — one Tag per role, nested inside each Card
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
      </ul>
      <p>{user.about}</p>
    </article>
  );
}

// Tag.jsx — conditional className based on comparing the item to a fixed value
export default function Tag({ tag }) {
  return (
    <li className={`tag ${tag === "admin" ? "tag--highlight" : ""}`}>
      {tag}
    </li>
  );
}
```

**`.map()` with index for conditional siblings, using a keyed Fragment (Journal App Entries Array challenge)**
```jsx
import { Fragment } from "react";

{entries.map((entry, index) => {
  return (
    <Fragment key={entry.id}>
      {index === 0 ? null : <Divider />}
      <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
    </Fragment>
  );
})}
```

**State + `.map()` (buttons) + `.filter()` (data) + `.map()` (results) together (Animal Habitat Filter challenge)**
```jsx
export default function App() {
  const [habitat, setHabitat] = useState("");

  const filteredAnimals = animals.filter(
    (animal) => animal.habitat === habitat
  );

  return (
    <>
      <div>
        {habitats.map((habitatOption) => (
          <button
            key={habitatOption}
            className="button"
            style={{
              backgroundColor:
                habitatOption === habitat ? "lightblue" : "",
            }}
            onClick={() => setHabitat(habitatOption)}
          >
            {habitatOption}
          </button>
        ))}
      </div>

      <ul className="ul">
        {filteredAnimals.map((animal) => (
          <li key={animal.id} className="li">
            {`${animal.name} ${animal.emoji}`}
          </li>
        ))}
      </ul>
    </>
  );
}
```
