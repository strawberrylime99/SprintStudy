<script lang="ts">
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  injectAnalytics();
  let { children } = $props();
</script>

<svelte:head>
  <title>SprintStudy | 8-Week Course Planner Kit</title>
  <meta
    name="description"
    content="SprintStudy helps accelerated-course students stay on track with a weekly planner, assignment tracker, and grade target calculator."
  />
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<header class="site-header">
  <a href="/" class="brand">SprintStudy</a>
  <nav>
    <a href="/templates/sprintstudy">Template</a>
    <a href="/blog">Blog</a>
  </nav>
</header>

{@render children()}

<footer class="site-footer">
  <p>Built for busy students in accelerated online courses.</p>
</footer>

<style>
  :global(body) {
    --ink: #132239;
    --paper: #fffaf2;
    --accent: #f96e2a;
    --accent-deep: #d04d16;
    --line: #e8d9c8;
    margin: 0;
    color: var(--ink);
    background:
      radial-gradient(circle at 90% 10%, #ffe2c9 0%, rgba(255, 226, 201, 0) 42%),
      radial-gradient(circle at 8% 92%, #d5ecff 0%, rgba(213, 236, 255, 0) 36%),
      var(--paper);
    font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  }

  .site-header {
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand {
    text-decoration: none;
    font-weight: 800;
    color: var(--ink);
    letter-spacing: 0.02em;
  }

  nav {
    display: flex;
    gap: 0.8rem;
  }

  nav a {
    text-decoration: none;
    color: var(--ink);
    padding: 0.35rem 0.65rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    font-size: 0.92rem;
  }

  .site-footer {
    max-width: 1024px;
    margin: 1rem auto 2rem;
    padding: 0 1rem;
    color: #4c5d76;
    font-size: 0.9rem;
  }
</style>
