<script lang="ts">
  export let data;

  const formattedDate = new Date(data.post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const articleUrl = `https://sprintstudy.co/blog/${data.post.slug}`;
  const articleStructuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.post.title,
    description: data.post.description ?? 'SprintStudy blog post',
    datePublished: data.post.date,
    mainEntityOfPage: articleUrl,
    author: {
      '@type': 'Organization',
      name: 'SprintStudy'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SprintStudy'
    }
  });
</script>

<svelte:head>
  <title>{data.post.title} | SprintStudy</title>
  <meta name="description" content={data.post.description ?? 'SprintStudy blog post'} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={articleUrl} />
  <script type="application/ld+json">{articleStructuredData}</script>
</svelte:head>

<article class="post-wrap">
  <a href="/blog" class="back-link">Back to blog</a>
  <h1>{data.post.title}</h1>
  <p class="published">{formattedDate}</p>

  <div class="content">
    <svelte:component this={data.post.component} />
  </div>

  <section class="cta">
    <h2>Need a weekly system you can actually stick to?</h2>
    <p>See the SprintStudy bundle and set up your next 8-week term in one sitting.</p>
    <a href="/templates/sprintstudy">View the template bundle</a>
  </section>

  {#if data.relatedPosts?.length > 0}
    <section class="related">
      <h2>Related guides</h2>
      <ul>
        {#each data.relatedPosts as post}
          <li>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        {/each}
      </ul>
    </section>
  {/if}
</article>

<style>
  .post-wrap {
    max-width: 860px;
    margin: 0 auto 2.5rem;
    padding: 0.5rem 1rem 0;
  }

  .back-link {
    text-decoration: none;
    font-weight: 700;
    color: #1f4067;
  }

  h1 {
    margin: 0.5rem 0 0.4rem;
    color: #132239;
  }

  .published {
    margin: 0;
    color: #60718a;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .content,
  .cta,
  .related {
    margin-top: 0.9rem;
    padding: 1rem;
    background: #fff;
    border: 1px solid #e9d7c5;
    border-radius: 14px;
  }

  .cta a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(120deg, #f96e2a 0%, #d04d16 100%);
    border-radius: 10px;
    padding: 0.55rem 0.8rem;
    display: inline-block;
    margin-top: 0.55rem;
  }

  .related ul {
    list-style: none;
    margin: 0.6rem 0 0;
    padding: 0;
    display: grid;
    gap: 0.45rem;
  }

  .related a {
    color: #1f4067;
    font-weight: 700;
    text-decoration: none;
  }
</style>