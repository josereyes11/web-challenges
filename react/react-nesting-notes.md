# React Nesting

## 1. Main Concepts and Definitions

**What JSX actually is**
JSX (`<div>...</div>`-looking syntax inside `.jsx` files) is not HTML, and it's not valid JavaScript on its own either. It's a syntax extension that a build tool (Vite, in your setup) compiles into regular JavaScript *before* the code ever runs. Every JSX tag compiles into a function call, roughly:

```jsx
<span className="icon">⭐</span>
```
becomes something like:
```js
jsx("span", { className: "icon", children: "⭐" })
```

That function call runs and returns a plain JavaScript object (a "React element") describing what should eventually appear on screen — something like `{ type: "span", props: { className: "icon", children: "⭐" } }`. It is *not* an actual DOM node yet; React reads this object later and decides what real HTML to create or update.

**JSX is just objects**
Because a JSX expression compiles down to a plain object, it can be passed around like any other value — assigned to a variable, or passed as a prop, exactly like a string or a number would be. `<UserCard avatar={<Avatar />} />` is not special syntax; `avatar` is just a prop whose value happens to be a JSX element (i.e. one of these "call this component later" objects). Nothing about `<Avatar />` "runs" the moment it's written — `UserCard` decides where (or whether) to actually place that object inside its own returned JSX, and only then does React resolve it into real output.

**The `children` prop**
When you nest a component inside another using an opening and closing tag — `<UserCard><Avatar /></UserCard>` — instead of a self-closing tag, React automatically collects whatever is placed between those tags and passes it to `UserCard` as a special, implicit prop called `children`. You never write `children={...}` explicitly; its value comes from what you put inside the tags. The nested content can be a single element, multiple elements, or even just a string or number.

This is what makes components "nestable" or "wrappable," the same way built-in elements like `<div>` can wrap other tags.

**Fragments**
A component function can only return a single top-level element. If you want to return multiple sibling elements without introducing an actual wrapping DOM element (like an unwanted `<div>`), you use a Fragment: `<>...</>` (shorthand) or `<Fragment>...</Fragment>` (explicit, imported from `"react"`).

Fragments matter beyond just "avoiding clutter" — an extra wrapper element can silently break CSS rules that depend on parent/child relationships. A common example is flexbox: flex layout rules only apply to an element's **direct children**. If a component nests its returned elements inside a `<div>`, that `<div>` becomes the single direct child of the flex container, and the elements inside it are no longer direct children themselves — so they lose the flex behavior entirely. Swapping the `<div>` for a fragment removes that extra layer, so the elements become direct children again.

The explicit `<Fragment></Fragment>` syntax is only needed when you must pass a `key` prop to the fragment (relevant later, when rendering lists). `<React.Fragment>` is the same thing, just written with the `React.` namespace prefix.

**Composition**
Composition is the practice of building complex components out of smaller, simpler ones — rather than writing one large component that does everything. Deciding which components you need, and how they should combine, is called application design. `children` and passing-JSX-as-props are the two main mechanical tools that make composition possible in React: they let a "container" component (like `Header`, or `Image`) stay generic and reusable, while the specific content it wraps is decided by whoever uses it.

## 2. Examples

**Passing JSX as a prop**
```jsx
function UserCard({ avatar }) {
  return <div className="card">{avatar}</div>;
}

function App() {
  return <UserCard avatar={<Avatar />} />;
}
```

**Using `children` to make a component wrap arbitrary content**
```jsx
function UserCard({ children }) {
  return <div className="card">{children}</div>;
}

// usage
<UserCard>
  <Avatar />
</UserCard>
```

**`children` with a flexible button (Buttons and Children challenge)**
```jsx
function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

// usage — same component, different content each time
<Button>Click here!</Button>
<Button>Click over here too!</Button>
```

**Fragment shorthand vs explicit `Fragment`**
```jsx
// shorthand — generally preferred
function UserList() {
  return (
    <>
      <UserCard><Avatar /></UserCard>
      <UserCard><Avatar /></UserCard>
    </>
  );
}

// equivalent, explicit form
import { Fragment } from "react";

function UserList() {
  return (
    <Fragment>
      <UserCard><Avatar /></UserCard>
      <UserCard><Avatar /></UserCard>
    </Fragment>
  );
}
```

**Fragment fixing a flexbox layout bug (Fragments challenge)**
```jsx
// BEFORE — breaks the flex layout: the <div> becomes the direct
// child of .flex-container, not the three Box elements
function Boxes() {
  return (
    <div>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </div>
  );
}

// AFTER — fragment adds no real DOM element, so the boxes
// themselves stay direct children of the flex container
function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}
```

**Full composition example — Navigation challenge**

A whole navigation bar broken down into small, composed components: `Header` and `Navigation` are plain `children` wrappers, `Link` combines a normal prop (`href`) with `children`, `Image` is a reusable, props-only leaf component with no `children`, and `Logo`/`Avatar` each compose `Image` inside their own wrapping tag.

```jsx
// Header.jsx — children wrapper
export default function Header({ children }) {
  return <header className="header">{children}</header>;
}

// Navigation.jsx — children wrapper, no className needed
export default function Navigation({ children }) {
  return <nav>{children}</nav>;
}

// Link.jsx — regular prop (href) + children together
export default function Link({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}

// Image.jsx — reusable leaf component, no children needed
export default function Image({ src, alt }) {
  return <img className="round-image" src={src} alt={alt} />;
}

// Logo.jsx — composes Image
import Image from "./Image";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}

// Avatar.jsx — also composes Image, avoiding a duplicated <img> tag
import Image from "./Image";
import avatar from "../img/avatar.jpg";

export default function Avatar() {
  return (
    <button type="button" aria-label="toggle profile">
      <Image src={avatar} alt="avatar" />
    </button>
  );
}

// App.jsx — everything composed together
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Link from "./components/Link";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
```
