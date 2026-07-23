# React Props

## 1. Main Concepts and Definitions

**What are props?**
Props ("properties") are how a parent component passes data down to a child component. A component receives its props as a single object, passed as the first function parameter. Props can be of any type: string, number, boolean, array, object, or function.

**Receiving props**
A component can read `props.someValue` directly, but it's much more common to destructure the props object right in the function parameter, so you can refer to `someValue` directly instead of `props.someValue`.

**Props are read-only**
A child component must treat props as immutable. It should never reassign or mutate a prop it received. If something needs to change over time, that change must happen in the parent's state, and the parent passes the new value down again.

**Passing props in JSX**
Props are passed to a component as JSX attributes.

- Plain strings can be passed with double quotes: `name="Alex"`.
- Every other type of value (numbers, booleans, arrays, objects, functions) must be passed inside curly braces, because curly braces tell JSX "evaluate this as a JavaScript expression": `age={25}`, `isFavorite={true}`, `favoriteFoods={["Pasta", "Salad"]}`, `onContact={() => {}}`.
- Passing an object (e.g. inline styles) needs double curly braces: `style={{ color: "red" }}`. The outer `{ }` says "this is a JS expression"; the inner `{ }` is the object literal itself.
- Boolean props have a shorthand: writing the attribute with no value at all, e.g. `<UserCard isFavorite />`, is equivalent to `isFavorite={true}`.
- If a prop is not passed at all, its value inside the component is `undefined`. This does not crash the app, but it can silently leak into the UI (e.g. rendering the literal text "Hello, undefined").

**Naming conventions**
- Boolean props are usually prefixed with `is`, `has`, or `should` — e.g. `isDisabled`, `hasError`, `shouldShow`.
- Props that carry a function are usually prefixed with `on` — e.g. `onClick`, `onSubmit`, `onRoll`.
- React's built-in DOM event props are camelCase: `onClick`, not `onclick`.

**Conditional rendering**
JSX only allows expressions inside `{ }`, not statements — so an `if` statement cannot be written directly inside JSX. There are two valid patterns instead:

1. A ternary expression directly inside JSX, since a ternary is an expression: `{isHappy ? "😀" : "☹️"}`.
2. A real `if`/`else` statement placed *outside* the `return`, computing a variable that is then rendered inside the JSX.

`null`, `false`, and `undefined` all render nothing in JSX — that's the standard way to conditionally render "nothing."

**Passing functions as props (events)**
The pattern for handling events (like clicks) is: define a handler function, then pass the function *reference* — not the result of calling it — to the event prop.

- `onClick={handleClick}` is correct: React stores the function and calls it later, when the button is actually clicked.
- `onClick={handleClick()}` is wrong: this calls the function immediately during render, not on click.

A very common pattern is "lifting the handler up": the parent component defines the handler function (especially if it needs to update state), passes it down to the child as a prop (conventionally named `onSomething`), and the child simply forwards that prop to the native DOM element's event, e.g. `<button onClick={onClick}>`.

## 2. Examples

**Basic component with a prop**
```jsx
function UserCard(props) {
  return <div>{props.name}</div>;
}
```

**Same component, with destructuring (preferred style)**
```jsx
function UserCard({ name }) {
  return <div>{name}</div>;
}
```

**Passing different prop types**
```jsx
<UserCard
  name="Alex"
  age={25}
  onContact={() => console.log("let's chat!")}
  isFavorite={true}
  favoriteFoods={["Pasta", "Salad"]}
/>
```

**Boolean shorthand**
```jsx
<UserCard isFavorite />
// same as
<UserCard isFavorite={true} />
```

**Conditional rendering — ternary inside JSX**
```jsx
function Smiley({ isHappy }) {
  return <span>{isHappy ? "😀" : "☹️"}</span>;
}
```

**Conditional rendering — if/else outside JSX**
```jsx
function UserCard({ name, isFavorite }) {
  let favoriteStar = null;
  if (isFavorite) {
    favoriteStar = <span>🌟</span>;
  }

  return (
    <div>
      {name}
      {favoriteStar}
    </div>
  );
}
```

**Prop used together with derived logic (Greeting challenge)**
```jsx
function Greeting({ name }) {
  const greetingName = coaches.includes(name) ? "Coach" : name;
  return <h1>{`Hello, ${greetingName}`}</h1>;
}
```

**Two props used in a calculation (Sum challenge)**
```jsx
function Sum({ valueA, valueB }) {
  return <p>{`${valueA} + ${valueB} = ${valueA + valueB}`}</p>;
}
```

**Multiple prop types on one element, including inline style (Button challenge)**
```jsx
function Button({ color, disabled, text }) {
  return (
    <button disabled={disabled} style={{ color: color }}>
      {text}
    </button>
  );
}
```

**Passing a function as a prop — the full "lift the handler up" pattern**
```jsx
// Parent: owns the handler
function App() {
  function handleClick() {
    console.log("You clicked me!");
  }

  return (
    <Button
      color="#000000"
      disabled={false}
      text="This is a button"
      onClick={handleClick}
    />
  );
}

// Child: receives the handler as a prop, forwards it to the native element
function Button({ color, disabled, text, onClick }) {
  return (
    <button disabled={disabled} style={{ color: color }} onClick={onClick}>
      {text}
    </button>
  );
}
```
