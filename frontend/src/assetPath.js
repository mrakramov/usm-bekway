// Builds a URL for a file in /public/images that respects Vite's `base`
// setting, so the site works both at a domain root and under a sub-path.
export const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;
