import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const allPosts = import.meta.glob('../*.md', { eager: true });

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;
  const posts = Object.entries(allPosts).map(([path, post]) => {
    const parsedSlug = path.split('/').pop()?.replace('.md', '') ?? '';
    const typed = post as any;
    return {
      slug: parsedSlug,
      title: typed.metadata?.title,
      description: typed.metadata?.description,
      date: typed.metadata?.date,
      component: typed.default
    };
  });

  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentPost = sortedPosts.find((post) => post.slug === slug);

  if (!currentPost) {
    throw error(404, 'Post not found');
  }

  const relatedPosts = sortedPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 2)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date
    }));

  return {
    post: currentPost,
    relatedPosts
  };
};