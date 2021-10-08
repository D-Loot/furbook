# Client

This uses [Snowpack](https://www.snowpack.dev/tutorials/react). But, you don't care. Just `npm i` and `npm start`.

## Suggestions

- Take your mockups and dissect them into components. Decide if there are [shared components](client/src/components).
- Consider keeping components that are only good for one page 📃 inside of [`pages`](client/src/pages).
- For further consideration, review [Thinking in
  React](https://reactjs.org/docs/thinking-in-react.html#start-with-a-mock)
- If you think 🤔 something should be its own component, it probably should be!
- Depending on your application details, you might want additional directories. For additional info ℹ️ review
  [this](https://www.taniarascia.com/react-architecture-directory-structure/#directory-structure).
- Get the mock data from the server-side folks. This could just be `.js` files that you import.
- Your **providers** will probably need to wrap your whole app (e.g. `BrowserRouter`). If you're NS 😕, this is probably
  fine. However, don't over-provide **context** if you don't have to.
- [Tailwind](https://tailwindcss.com/docs) with [Tailwind Form](https://github.com/tailwindlabs/tailwindcss-forms) is
  included.
- Consider [Headless UI](https://headlessui.dev/) if it makes sense for your application.
- Or, if you really want something robust and there is a good need, consider [Chakra UI](https://chakra-ui.com/). It
  plays nicely with Tailwind [as per the creator](https://github.com/chakra-ui/chakra-ui/issues/634#issuecomment-619626792).

Use `useEffect` to set your `title` for each page:

```javascript
import React from "react";

function HomePage() {
  React.useEffect(() => {
    document.title = "🏠 Home Page 📃";
  }, []);

  return <h1 className="text-4xl font-bold text-center">🏠 Home Page</h1>;
}

export default HomePage;
```
