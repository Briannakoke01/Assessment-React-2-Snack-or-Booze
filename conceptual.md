### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? With React Router, you can render different components based on the URL, giving the feel of a multi-page app while staying on a single page. It handles route changes without reloading the page, enabling faster navigation and a smoother user experience.

- What is a single page application? a web application that loads a single HTML page and dynamically updates content without reloading the page. SPAs provide faster interactions, as only specific content is re-rendered in response to user interactions, which is often handled using JavaScript frameworks like React.

- What are some differences between client side and server side routing? 
Client-Side Routing: Routing is handled by JavaScript on the client, and only specific parts of the page update as users navigate. Client-side routing allows for SPAs, with faster navigation and less page reloads but can require more JavaScript.

Server-Side Routing: Each request to a new page or URL is handled by the server, sending a fresh HTML page to the client. While this method is traditional and compatible across all browsers, it involves more frequent page reloads and slower response times compared to SPAs.


- What are two ways of handling redirects with React Router? When would you use each?
Using <Navigate />: <Navigate to="/new-path" /> allows you to redirect programmatically within components, often used when a user completes an action like form submission, and needs to be redirected.

Using <Redirect /> in Routes Configuration: This is part of route configuration for conditional redirects, for instance, if you want to redirect unauthorized users to a login page.

- What are two different ways to handle page-not-found user experiences using React Router? 
Define a Catch-All Route: By using a * path in the route configuration (<Route path="*" element={<NotFound />} />), you can catch any unmatched routes and display a custom 404 page.

Conditional Rendering in Route Structure: Manually check if a route matches the URL, and if none match, render a 404 component, which allows more control over displaying a custom page or component in certain areas of the app.

- How do you grab URL parameters from within a component using React Router? In React Router v6, you can use the useParams() hook to access dynamic parameters from the URL. For example, if you have a route like /user/:id, calling const { id } = useParams(); inside the component allows you to access the id parameter.

- What is context in React? When would you use it? Context in React is a feature that allows you to pass data across components without having to explicitly pass props down through each level of the component tree. You would use it to share data (like user information, themes, or app settings) that needs to be accessible by many components, especially in cases where prop drilling (passing data through multiple levels) would otherwise occur.

- Describe some differences between class-based components and function components in React. 

Syntax: Class components are ES6 classes, while function components are simple JavaScript functions.
State and Lifecycle: Class components use this.state and lifecycle methods (componentDidMount, componentDidUpdate, etc.) for state and effects. Function components use hooks like useState and useEffect for managing state and lifecycle logic.
Hooks: Function components allow the use of React Hooks, while class components do not support hooks directly.

- What are some of the problems that hooks were designed to solve? Stateful ogic in FUnction Components, Reusing Stateful Logic, Imporved Component Lifecycle Management, Cleaner code