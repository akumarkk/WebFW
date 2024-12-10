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