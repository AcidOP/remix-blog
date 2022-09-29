---
title: Example Post
description: I care deeply for nature. Oh, you're gonna be in a coma, all right. He'll want to use your yacht, and I don't want this thing smelling like fish. Get me a vodka rocks. And a piece of toast. No! I was ashamed to be SEEN with you. I like being with you.
date: July 16 2005 
---

<Image
  alt={`Bridge`}
  src={`/images/bridge.jpg`}
  width={1440}
  height={960}
  priority
/>

## Heading H2

This is an example blog post with React components. This page is using the `Image` component from Next.js.

```jsx:example-post.mdx
<Image
  alt={`Bridge`}
  src={`/images/bridge.jpg`}
  width={1440}
  height={960}
  priority
/>
```

### Code Blocks

This starter also comes with fancy code blocks with code titles.

```jsx:example.jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Go back [Home](/).