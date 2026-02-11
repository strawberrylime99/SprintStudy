<script lang="ts">
  import { posts } from './_posts';

  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const blogStructuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'SprintStudy Blog',
    url: 'https://sprintstudy.co/blog',
    description: 'Practical strategies for surviving accelerated online courses.'
  });
</script>

<svelte:head>
  <title>SprintStudy Blog | Accelerated Course Survival Guides</title>
  <meta
    name="description"
    content="Short, practical guides for students taking accelerated online classes while balancing work and life."
  />
  <link rel="canonical" href="https://sprintstudy.co/blog" />
  <meta name="robots" content="index, follow" />
  <script type="application/ld+json">{blogStructuredData}</script>
</svelte:head>

<main class="blog-page">
  <header>
    <p class="eyebrow">Study Systems</p>
    <h1>SprintStudy Blog</h1>
    <p>Fast, actionable playbooks for compressed terms.</p>
  </header>

  <ul>
    {#each sortedPosts as post}
      <li>
        <a href={`/blog/${post.slug}`}>
          <span>{post.title}</span>
          <small>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</small>
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  .blog-page {
    max-width: 860px;
    margin: 0 auto;
    padding: 0.4rem 1rem 2.5rem;
  }

  header {
    background: #fff;
    border: 1px solid #e9d7c5;
    border-radius: 16px;
    padding: 1rem;
  }

  .eyebrow {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.75rem;
    font-weight: 800;
    color: #b64a1a;
  }

  h1 {
    margin: 0.35rem 0 0.45rem;
  }

  header p {
    margin: 0;
    color: #425570;
  }

  ul {
    list-style: none;
    margin: 0.9rem 0 0;
    padding: 0;
    display: grid;
    gap: 0.55rem;
  }

  li a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    align-items: baseline;
    background: #fff;
    border: 1px solid #e9d7c5;
    border-radius: 12px;
    padding: 0.72rem 0.85rem;
    color: #132239;
    font-weight: 700;
  }

  small {
    white-space: nowrap;
    color: #5f6f86;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    li a {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>