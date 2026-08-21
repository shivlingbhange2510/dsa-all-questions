# React.js 1-Month Learning Plan (Basics to Advanced + Interview Prep)

Prerequisite: Comfortable with HTML, CSS, and JavaScript basics.

Check off each day's box as you complete it.

---

## Week 1 — Fundamentals
**Goal:** Understand React's core concepts and get comfortable with JSX.

- [ ] **Day 1:** What is React, Virtual DOM vs real DOM, SPA concept, why React exists
  - Install Node.js, create project with Vite (`npm create vite@latest`)
  - Explore project folder structure (`src`, `public`, `main.jsx`, `App.jsx`)
  - 🔧 **Hands-on:** "Hello React" app — display your name and a static profile card (image, name, bio)
- [ ] **Day 2:** JSX syntax, embedding expressions `{}`, rendering elements
  - JSX rules (single root, className, camelCase attributes)
  - Fragments (`<>...</>`)
  - 🔧 **Hands-on:** Personal Info Card using JSX expressions (name, age, skills array via `.join()`)
- [ ] **Day 3:** Components — function components, props basics
  - Passing props, destructuring props
  - Reusable component examples (Button, Card)
  - 🔧 **Hands-on:** Reusable `<UserCard name role />` component, render 3-4 different users
- [ ] **Day 4:** Component composition, `children` prop, `PropTypes`/default props
  - 🔧 **Hands-on:** `<Card>` wrapper component that accepts `children`; use it for an image card and a text card
- [ ] **Day 5:** State with `useState`, event handling (`onClick`, `onChange`)
  - Updating state correctly (functional updates)
  - 🔧 **Hands-on:** Counter app (increment/decrement/reset) + a toggle Like button
- [ ] **Day 6:** Conditional rendering (`&&`, ternary), lists & `key` prop
  - 🔧 **Hands-on:** Student List app rendering students with a pass/fail badge based on marks
- [ ] **Day 7:** Forms — controlled components, `useEffect` basics (side effects, dependency array, cleanup)
  - 🔧 **Hands-on:** Feedback Form (name/email/message) that logs data on submit + logs a mount message via `useEffect`
- [ ] **Day 8:** **Project:** Build a Todo App
  - Add/delete/edit/toggle tasks
  - Filter (all/active/completed)
  - Persist tasks to `localStorage`

---

## Week 2 — Intermediate Concepts
**Goal:** Component architecture, hooks in depth, and data flow.

- [ ] **Day 9:** `useRef` — accessing DOM nodes, storing mutable values without re-render
  - 🔧 **Hands-on:** "Focus Input" app (button focuses an input) + a stopwatch using `useRef` to store the interval id
- [ ] **Day 10:** Lifting state up, the prop drilling problem
  - 🔧 **Hands-on:** Temperature converter (Celsius ⇄ Fahrenheit) with state lifted to a shared parent
- [ ] **Day 11:** Context API (`useContext`) for global state (e.g., theme, auth)
  - 🔧 **Hands-on:** Dark/light theme toggle app applied across multiple nested components via Context
- [ ] **Day 12:** `useReducer` for complex state logic (compare with `useState`)
  - 🔧 **Hands-on:** Rebuild the Day 5 Counter using `useReducer`, add actions (increment by 5, reset)
- [ ] **Day 13:** Custom hooks — extracting reusable logic (e.g., `useFetch`, `useLocalStorage`)
  - 🔧 **Hands-on:** Build `useLocalStorage` and `useFetch` custom hooks and use them in a small app
- [ ] **Day 14:** React Router basics — `BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`
  - 🔧 **Hands-on:** 3-page app (Home/About/Contact) with a navbar using React Router
- [ ] **Day 15:** React Router advanced — nested routes, dynamic params (`useParams`), protected routes
  - 🔧 **Hands-on:** "Product List → Product Detail" app using dynamic route params (`/product/:id`)
- [ ] **Day 16:** **Project:** Multi-page blog app
  - Routing between Home/Post/About pages
  - Context for theme toggle (light/dark)

---

## Week 3 — Advanced React
**Goal:** Performance, API integration, and real-world patterns.

- [ ] **Day 17:** Fetching data with `fetch`/`axios`, loading & error states, `useEffect` cleanup for requests
  - 🔧 **Hands-on:** "GitHub User Search" app that fetches profile data from the GitHub API
- [ ] **Day 18:** Performance optimization — `useMemo`, `useCallback`, `React.memo`
  - 🔧 **Hands-on:** List-filtering app with an expensive computation; optimize with `memo`/`useMemo`/`useCallback` and verify in React DevTools Profiler
- [ ] **Day 19:** Error boundaries, `Suspense`, lazy loading (`React.lazy`)
  - 🔧 **Hands-on:** App with an `ErrorBoundary` wrapping a component that intentionally throws, plus a `React.lazy` + `Suspense` loaded component
- [ ] **Day 20:** Forms at scale — React Hook Form + Yup/Zod validation
  - 🔧 **Hands-on:** Signup form (email format, password match, required fields) using React Hook Form + Yup
- [ ] **Day 21:** State management — Redux Toolkit basics (store, slice, actions, reducers)
  - 🔧 **Hands-on:** Rebuild the Day 8 Todo App using Redux Toolkit instead of `useState`
- [ ] **Day 22:** Redux Toolkit — async thunks, connecting to an API (or explore Zustand as a lighter alternative)
  - 🔧 **Hands-on:** "Posts Viewer" app fetching posts via `createAsyncThunk` with loading/error/success states
- [ ] **Day 23:** Styling approaches — CSS Modules, Tailwind CSS, styled-components
  - 🔧 **Hands-on:** Restyle any earlier project using Tailwind CSS or styled-components
- [ ] **Day 24:** **Project:** E-commerce/dashboard app — Part 1
  - Project setup, routing, product listing via API
- [ ] **Day 25:** **Project:** E-commerce/dashboard app — Part 2
  - Cart state with Redux/Zustand, checkout form, styling polish

---

## Week 4 — Production-Ready + Interview Prep
**Goal:** Testing, deployment, and cracking interviews.

- [ ] **Day 26:** Testing basics — Jest + React Testing Library (unit/component tests)
  - 🔧 **Hands-on:** Write unit tests for the Counter and Todo App components
- [ ] **Day 27:** TypeScript with React basics — typing props, state, and hooks
  - 🔧 **Hands-on:** Convert the Todo App to TypeScript (type props, state, and event handlers)
- [ ] **Day 28:** Authentication patterns — JWT flow, protected routes, storing tokens securely
  - 🔧 **Hands-on:** Mock login app with a protected route that redirects to login if not authenticated, token stored in `localStorage`
- [ ] **Day 29:** Build & deploy — Vercel/Netlify, environment variables, production build optimizations
  - 🔧 **Hands-on:** Deploy two of your previous projects to Vercel/Netlify
- [ ] **Day 30:** **Capstone project** — combine everything (auth + routing + API + state mgmt + tests)

### Interview Prep Checklist

- [ ] Core concepts: Virtual DOM vs real DOM, reconciliation, keys, controlled vs uncontrolled components, rules of hooks
- [ ] Common questions: `useEffect` vs `useLayoutEffect`, memoization, Context vs Redux, React Fiber (high-level)
- [ ] Coding rounds: build small components live (counter, debounce search, infinite scroll, modal)
- [ ] System design lite: component design for a feature (e.g., design a Twitter feed)
- [ ] Behavioral: past project walkthroughs, trade-off discussions
- [ ] Practice: LeetCode-style JS questions + React-specific mock interviews (Pramp, Frontend Mentor)

---

## Tips

- Build projects daily even if small — muscle memory matters more than tutorials.
- Read the official docs at [react.dev](https://react.dev) — best updated resource, especially "Thinking in React".
- Keep a notes file of gotchas/interview answers as you go.

---

## Progress Tracker

| Week | Focus                          | Days   | Status |
|------|---------------------------------|--------|--------|
| 1    | Fundamentals                    | 1-8    | ☐ Not started |
| 2    | Intermediate Concepts           | 9-16   | ☐ Not started |
| 3    | Advanced React                  | 17-25  | ☐ Not started |
| 4    | Production-Ready + Interview    | 26-30  | ☐ Not started |
