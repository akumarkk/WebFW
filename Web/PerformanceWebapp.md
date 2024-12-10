###### Performance
- User satisfaction
- User Engagement
- Conversion rate
- Brand image
- SEO and ranking

Web vitals
- FCP - web performance metric that measures the time it takes for a browser to render the first piece of DOM content on a page. This includes text, images, or non-white canvas elements. A faster FCP generally leads to a better user experience, as it gives users a visual indication that the page is loading.
    - tools : Lighthouse, WebPageTest

- RBE - render-blocking elements are resources, primarily CSS and JavaScript files, that delay the initial rendering of a webpage. The browser must fully download and process these resources before it can start displaying the page's content.
    - Delayed Rendering: Users have to wait longer to see content, leading to a poor user experience.
    - Increased Load Times: This can significantly impact page load times, especially on slower connections.
    - Negative SEO Impact: Search engines may penalize slow-loading websites, penalize their ranking.

    - Prioritize Critical CSS:
    - Defer Non-Critical JavaScript:
    - Optimize Resource Loading: Minify and Compress, Leverage Browser Caching, Use a Content Delivery Network (CDN)
    - Optimize Image Loading:

    - Prioritize Above-the-Fold Content: Optimize the resources needed to render the visible portion of the page first.
    - Minimize HTTP Requests: Combine and minify files to reduce the number of requests.
    - Reduce Server Response Time: Optimize server configuration and database queries.
    - Test and Monitor Performance: Regularly test your website's performance and make necessary adjustments.

    - HTML Parsing: The browser starts by parsing the HTML document. This involves breaking down the HTML code into a tree-like structure called the DOM (Document Object Model).   
    - CSS Loading and Parsing: If there are external stylesheets linked in the HTML, the browser fetches and parses them. This CSS is then applied to the DOM to style the page elements.   
    - JavaScript Execution: Once the HTML is parsed and the CSS is applied, the browser encounters JavaScript scripts. By default, these scripts are blocking, meaning the browser pauses the rendering process until they are executed.

        - Deferred JavaScript:
        - Minimize Critical JavaScript
        - Optimize JavaScript - tree shaking

    - Speed Index - Speed Index is a web performance metric that measures how quickly the content of a page is visually displayed during page load.

        - User Experience: A lower Speed Index means a faster perceived load time, leading to a better user experience.
        - SEO: Search engines like Google consider page speed as a ranking factor. A faster website can improve your search engine rankings.
        - Business Impact: Faster loading times can lead to increased conversions, reduced bounce rates, and higher customer satisfaction.



