<svelte:head>
  <link rel="canonical" href="https://sprintstudy.co/" />
</svelte:head>

<main class="landing">
  <section class="hero">
    <p class="eyebrow">8-Week Course Planner Kit</p>
    <h1>Stop drowning in accelerated classes.</h1>
    <p class="lede">
      SprintStudy gives you one clear weekly plan: assignments, grade targets, and realistic study blocks.
    </p>
    <div class="cta-row">
      <a class="primary" href="/templates/sprintstudy">See the bundle</a>
      <a class="secondary" href="/blog">Read quick guides</a>
    </div>
  </section>

  <section class="value-grid" aria-label="What is included">
    <article>
      <h2>Notion dashboard</h2>
      <p>Weekly plan + assignment tracker + deadline focus in one view.</p>
    </article>
    <article>
      <h2>Sheet tracker</h2>
      <p>Auto grade target math and planned-vs-actual study hour charts.</p>
    </article>
    <article>
      <h2>Printable checklist</h2>
      <p>Simple weekly PDF checklist to keep momentum during heavy weeks.</p>
    </article>
    <article>
      <h2>Quick-start guide</h2>
      <p>One page setup instructions so you can start in minutes, not hours.</p>
    </article>
  </section>

  <section class="problem-solution">
    <h2>Built for the exact "I am behind" moment.</h2>
    <p>
      SprintStudy is focused on accelerated online courses where deadlines hit fast.
      You get a repeatable plan each week instead of rebuilding your system every Sunday.
    </p>
  </section>
</main>

<style>
  .landing {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0.5rem 1rem 2rem;
  }

  .hero {
    background: linear-gradient(130deg, #ffffff 0%, #fff1e2 100%);
    border: 1px solid #e9d7c5;
    border-radius: 20px;
    padding: 1.2rem;
    box-shadow: 0 16px 40px rgba(19, 34, 57, 0.08);
  }

  .eyebrow {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.76rem;
    font-weight: 800;
    color: #b64a1a;
  }

  h1 {
    margin: 0.4rem 0 0.5rem;
    font-size: clamp(1.8rem, 5vw, 3rem);
    line-height: 1.08;
  }

  .lede {
    margin: 0;
    max-width: 62ch;
    color: #3e4f66;
  }

  .cta-row {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .cta-row a {
    text-decoration: none;
    border-radius: 12px;
    padding: 0.6rem 0.9rem;
    font-weight: 700;
  }

  .primary {
    color: #fff;
    background: linear-gradient(120deg, #f96e2a 0%, #d04d16 100%);
  }

  .secondary {
    color: #132239;
    border: 1px solid #e9d7c5;
    background: #fff;
  }

  .value-grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.7rem;
  }

  article,
  .problem-solution {
    background: #fff;
    border: 1px solid #e9d7c5;
    border-radius: 16px;
    padding: 0.95rem;
  }

  h2 {
    margin: 0;
    font-size: 1.05rem;
  }

  article p,
  .problem-solution p {
    margin: 0.45rem 0 0;
    color: #425570;
  }

  .problem-solution {
    margin-top: 0.9rem;
  }
</style>