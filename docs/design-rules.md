# Design rules

- Use Tailwind CSS classes
- Do NOT use Tailwind classes that use arbitrary value syntax, similar to `p-[50px]`
- Use `<Link>`, not `<Link><a>`, as specified by Next.js version 14 and above
- Use fewer `<div>` HTML elements for styling

## Images

- Save images used when designing the app into `public/temp` folder
- Move optimized and compressed images from `public/temp` to `public/images`
- Remove any temporary images from `public/temp` before publishing the app
