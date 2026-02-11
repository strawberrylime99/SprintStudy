export const posts = Object.entries(import.meta.glob('./*.md', { eager: true })).map(([path, post]: any) => {
  const slug = path.split('/').pop()?.replace('.md', '');
  return {
    ...post.metadata,
    slug
  };
});