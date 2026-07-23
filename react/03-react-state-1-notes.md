# React State 1

## 1. Main Concepts and Definitions

**What is state?**
State is data belonging to a component that changes over time — like a lamp that can be on or off, or the balance in a bank account. At any given moment a piece of state has a specific value, but that value can change, usually in response to user interaction (a click, typing, etc.).

**The `useState` hook**
`useState(initialValue)` is how React lets a component hold and manage state. Calling it returns an array with exactly two elements: the current value, and a setter function to change it. This is always destructured as a pair, following the naming convention `x` / `setX`:

```jsx
const [liked, setLiked] = useState(false);
```

A component can call `useState` as many times as it needs — there's no limit to how many separate pieces of state a component can hold, and state can be any data type: boolean, number, string, array, or object.

**State is per component instance**
If the same component is rendered multiple times (e.g. many `SocialMediaPost` components in a feed), each rendered instance keeps its own independent state. Changing one instance's state has no effect on the others.

**You cannot mutate state directly**
Reassigning a state variable directly (e.g. `liked = true`) does nothing visible — React has no way of knowing the value changed. The *only* way to update state is by calling the setter function returned by `useState` (e.g. `setLiked(true)`). Calling the setter does two things: it stores the new value, and it schedules a re-render.

**The render cycle**
When React renders a component, it runs the component function top-to-bottom and returns JSX, using whatever the state's value currently is at that moment. Calling a setter function doesn't instantly change anything on screen — it tells React "re-run this component again, this time with the new value." On that next render, the component function runs again from scratch, this time the state variable holds the new value, and the returned JSX reflects it.

**Closures and "stale" values inside event handlers**
Every time a component renders, any function defined inside it (like a click handler) is a *brand new* function, and it "closes over" (remembers) whatever the state's value was *during that specific render* — not some constantly-updated live reference. This explains a common surprise: if you call a setter and then immediately `console.log` the state variable on the very next line, you'll see the *old* value, not the new one. That's because the setter call only schedules a future re-render; it doesn't retroactively change the value already captured by the currently-running function. Only the *next* render creates a new function with the updated value baked in.

**Toggling booleans**
A boolean piece of state (like `isFavorite` or `isActive`) is commonly flipped using the NOT operator: `setIsFavorite(!isFavorite)` — read the current value, negate it, pass the negated value to the setter.

**Building up state incrementally**
State doesn't have to be replaced outright — a setter can be called with a value derived from the current one, such as appending to a string (`setCode(code + emoji)`) or incrementing a number (`setCount(count + 1)`). A full reset, by contrast, just needs a fixed value that doesn't depend on the current state at all (`setCode("")`).

## 2. Examples

**Basic toggle state (from the chapter doc)**
```jsx
import { useState } from "react";

function SocialMediaPost() {
  const [liked, setLiked] = useState(false);

  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <article>
      <p>Liked: {liked ? "Yes" : "No"}</p>
      <button type="button" onClick={toggleLiked}>
        {liked ? "Remove like" : "Add like"}
      </button>
    </article>
  );
}
```

**Multiple states in one component**
```jsx
const [liked, setLiked] = useState(false);
const [comments, setComments] = useState([]);
const [views, setViews] = useState(0);
```

**Box — replacing a plain variable with state (Box challenge)**
```jsx
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
```

**Why `console.log` right after a setter shows the old value**
```jsx
function handleClick() {
  setIsActive(!isActive);
  console.log(isActive); // still logs the OLD value —
  // this function closed over isActive from the render it was created in;
  // the update only appears once the component re-renders with a new handleClick.
}
```

**Counter — incrementing/decrementing based on current value (Counter challenge)**
```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
```

**Building a string with state + resetting (Emoji Passcode Checker challenge)**
```jsx
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji); // append to existing value
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleClick("🐡")}>🐡</button>
        <button type="button" onClick={() => handleClick("🐠")}>🐠</button>
        <button type="button" onClick={() => handleClick("🐋")}>🐋</button>
      </div>

      <button type="button" onClick={() => setCode("")}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
```

**Boolean toggle inside a real component (Journal App Favorite Button challenge)**
```jsx
import { useState } from "react";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => setIsFavorite(!isFavorite)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
```
