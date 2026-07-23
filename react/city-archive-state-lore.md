# The City Archive — a mental model for `useState` in Recap-4

A metaphor for understanding state, setters, and the three color-theme missions (Add, Delete, Edit) in `App.jsx`.

## Origin & the three missions

| Element | Represents |
|---|---|
| **— Origin —** | |
| `useState(initialColors)` | Activating the Central Archive for the first time |
| `initialColors` | The founding population, seeded before any mission ever runs |
| `themeColors` | The CCTV feed — live broadcast to every monitor in the city |
| `setThemeColors` | City Hall — the only authority allowed to officially update the census |
| **— Mission 1: Add Color (Recruitment) —** | |
| `themeColor` (param) | The unregistered stranger at the gate, no papers |
| `nanoid()` | The city's forger, burning a badge that's never existed |
| `newColor` | Stranger + badge — a fully processed citizen |
| `setThemeColors(...)` | Reporting to City Hall |
| `(prevColors) => [newColor, ...prevColors]` | The order: new recruit to the front, everyone else copied untouched |
| **— Mission 2: Delete Color (Purge) —** | |
| `id` (param) | The kill order — one target badge, no new intel |
| `setThemeColors(...)` | Reporting to City Hall |
| `(prevColors) => prevColors.filter(...)` | The checkpoint recipe — not a patrol, a single gate |
| `(color) => color.id !== id` | The guard's test at the gate |
| Matching citizen | Never clears the checkpoint — erased from the new census |
| Non-matching citizens | Pass through unchanged |
| **— Mission 3: Edit Color (Deep Cover Update) —** | |
| `id` (param) | Target badge number |
| `newColorData` (param) | The rewrite order — new intel to overwrite the file |
| `setThemeColors(...)` | Reporting to City Hall |
| `(prevColors) => prevColors.map(...)` | The full patrol — every citizen inspected, none skipped |
| `color` (per-item param) | The citizen currently being inspected |
| `color.id === id ? ... : ...` | The badge check |
| `{ ...color, ...newColorData }` | Match — file overwritten, citizen returns changed |
| `color` (else branch) | No match — photocopied, returns unchanged |
| Result of `.map()` | The finished new census, handed back to City Hall |

## Key rules of the universe

- **Nobody touches a citizen's file directly.** No mission reaches through the CCTV screen and mutates a record in place — every mission builds a *brand new* census and hands the *whole thing* to City Hall through `setThemeColors`.
- **`=>`** marks the hinge of a recipe: "given this input (left side), here's what I'll do with it (right side)." Recipes aren't run immediately — they're handed to whoever will execute them later, with live/current data.
- **Insert vs. checkpoint vs. patrol** — the three array methods aren't interchangeable: `[new, ...prev]` inserts without inspecting anyone, `.filter()` runs a single yes/no checkpoint that can drop citizens, `.map()` forces a full patrol that inspects everyone and always returns the same headcount.

## Ideas for extending the lore

- **`return` in mission functions vs. component functions** — inside `.filter()`/`.map()`, small returned expressions are a field agent radioing back a verdict on one citizen. `return (...)` in `App`, `Color`, `ColorForm` is different — it materializes something physical into the city (a building, a kiosk) that citizens can actually see.
- **Other files as districts/facilities** — `Color.jsx` as each citizen's private residence (local secrets like `isConfirming`/`isEditing`, filed nowhere else). `ColorForm.jsx` as a dual-purpose processing office — intake for new recruits or reissue for existing citizens, depending on which authority it's currently taking orders from. `ColorInput.jsx` as a dual-readout scanner keeping two displays of the same evidence in sync.
- **`export default function App`** — `App` as Central Command, the top authority everything answers to; `export default` as the declaration that makes this agent the one every other district is allowed to recognize.
- **JSX as the physical city** — every JSX element a literal structure citizens can see: `<h1>` a sign over the gate, `.map()` over cards a construction crew stamping out kiosks, the empty-state ternary a Welcome Center that gets built only when the population hits zero.
