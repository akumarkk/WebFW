###### Pattern
1. Server-Side Rendering (SSR)
How it works: The server generates the complete HTML of a page and sends it to the client's browser.
Pros:
Excellent SEO: Search engines can easily index server-rendered content.
Faster initial load times: The browser receives a fully formed HTML page.
Cons:
Higher server load: The server must process each request and generate HTML.
Less interactive: Initial page load is faster, but subsequent interactions might be slower as JavaScript takes over.
2. Client-Side Rendering (CSR)
How it works: The initial HTML is often a bare-bones structure. JavaScript fetches data and dynamically updates the DOM.
Pros:
Highly interactive: Smooth user experience with dynamic updates.
Reduced server load: The server only needs to serve static assets.
Cons:
Slower initial load times: The browser must download and execute JavaScript before rendering content.
SEO challenges: Search engines might struggle to index JavaScript-heavy websites.
3. Static Site Generation (SSG)
How it works: Pages are pre-rendered at build time and served as static HTML files.
Pros:
Extremely fast load times: Content is delivered directly from the CDN.
Excellent SEO: Search engines can easily index static HTML.
Low server costs: No server-side processing is required.
Cons:
Less dynamic: Content updates require a full re-build and deployment.
4. Incremental Static Regeneration (ISR)
How it works: Pages are pre-rendered at build time, but can be re-generated on demand or on a schedule.
Pros:
Combines the best of SSG and SSR: Fast load times, good SEO, and dynamic content updates.
Reduced build times: Only specific pages need to be re-generated.
Cons:
Increased complexity: Requires more sophisticated build processes.
5. Hybrid Rendering
How it works: A combination of SSR and CSR, where initial page load is server-rendered, and subsequent interactions are handled client-side.
Pros:
Best of both worlds: Fast initial load times and smooth user experience.
Improved SEO: Search engines can index server-rendered content.
Cons:
Increased complexity: Requires careful coordination between server-side and client-side rendering.
Hybrid rendering typically involves the following steps:

- `Initial Page Load`: The server renders the initial HTML, including the necessary JavaScript bundles.   
The browser receives the HTML and starts rendering the page.
- *Client-Side Hydration*: Once the JavaScript bundles are loaded, the client-side framework hydrates the DOM, taking over the rendering process.   
This allows for interactive features like routing, state management, and dynamic updates.

Popular Hybrid Rendering Frameworks
- Next.js
- Nuxt.js
- Gatsby
A React-based framework primarily focused on building static websites and web applications. Key Features:
- Static Site Generation (SSG)
- GraphQL data layer
- Plugin ecosystem
- Image optimization

Improved SEO: Search engines can easily index server-rendered content, leading to better search visibility.   
Faster Initial Load Times: Server-side rendering ensures that the initial page load is fast, as the browser receives a fully formed HTML document.   
Enhanced User Experience: Client-side rendering allows for smooth, interactive experiences without full page reloads.   
Better Performance: Hybrid rendering optimizes resource utilization and reduces load times.