<script lang="ts">
  import { track } from '@vercel/analytics/sveltekit';

  const etsyUrl = 'https://satinstreet.etsy.com/?utm_source=sprintstudy-site&utm_medium=referral&utm_campaign=product-page';

  function trackEtsyClick() {
    track('etsy_buy_click', {
      source: 'product_page',
      destination: 'satinstreet_shop'
    });
  }

  function trackStarterDownload(file: string) {
    track('starter_pack_download', {
      source: 'product_page',
      file
    });
  }
</script>

<svelte:head>
  <title>SprintStudy Template Bundle | 8-Week Course Planner</title>
  <meta
    name="description"
    content="SprintStudy bundle: Notion dashboard, grade tracker sheet, weekly printable, and quick-start guide for accelerated online courses."
  />
  <link rel="canonical" href="https://sprintstudy.co/templates/sprintstudy" />
</svelte:head>

<main class="product-page">
  <header>
    <p class="eyebrow">Digital Download Bundle</p>
    <h1>SprintStudy: 8-Week Course Planner Kit</h1>
    <p>One setup, then repeat weekly. Built for online students with compressed deadlines.</p>
    <a class="buy" href={etsyUrl} target="_blank" rel="noreferrer" on:click={trackEtsyClick}
      >Buy on Etsy</a
    >
  </header>

  <section>
    <h2>What you get</h2>
    <ul>
      <li>Notion template: dashboard + weekly plan + assignments database</li>
      <li>Google Sheet / Excel tracker: grade target + hours planned vs actual</li>
      <li>Printable PDF weekly checklist</li>
      <li>One-page quick start instructions</li>
    </ul>
  </section>

  <section>
    <h2>Who this is for</h2>
    <p>
      Students taking accelerated 6-10 week terms who need a practical system to stay ahead of assignments,
      protect grade goals, and avoid last-minute panic.
    </p>
  </section>

  <section>
    <h2>Starter Pack (Free while you build)</h2>
    <p>
      Use these editable starter files now, then swap in your final branded bundle files before listing launch.
    </p>
    <ul>
      <li>
        <a href="/starter-pack/notion/Assignments-Database.csv" on:click={() => trackStarterDownload('notion_assignments_csv')}
          >Notion: Assignments Database CSV</a
        >
      </li>
      <li>
        <a href="/starter-pack/notion/Weekly-Plan-Board.csv" on:click={() => trackStarterDownload('notion_weekly_plan_csv')}
          >Notion: Weekly Plan Board CSV</a
        >
      </li>
      <li>
        <a href="/starter-pack/sheets/Assignment-Tracker.csv" on:click={() => trackStarterDownload('sheets_assignment_tracker_csv')}
          >Sheets: Assignment Tracker CSV</a
        >
      </li>
      <li>
        <a href="/starter-pack/sheets/Grade-Target-Calculator.csv" on:click={() => trackStarterDownload('sheets_grade_target_csv')}
          >Sheets: Grade Target Calculator CSV</a
        >
      </li>
      <li>
        <a href="/starter-pack/printables/Weekly-Checklist.html" on:click={() => trackStarterDownload('printable_weekly_checklist_html')}
          >Printable: Weekly Checklist (print to PDF)</a
        >
      </li>
      <li>
        <a href="/starter-pack/README.md" on:click={() => trackStarterDownload('starter_pack_readme')}
          >Starter Pack Guide</a
        >
      </li>
    </ul>
  </section>
</main>

<style>
  .product-page {
    max-width: 860px;
    margin: 0 auto;
    padding: 0.3rem 1rem 2.4rem;
    display: grid;
    gap: 0.8rem;
  }

  header,
  section {
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
    margin: 0.35rem 0 0.5rem;
    font-size: clamp(1.45rem, 3.5vw, 2.2rem);
    color: #132239;
  }

  h2 {
    margin: 0;
    color: #132239;
  }

  p,
  li {
    color: #415269;
  }

  ul {
    margin: 0.55rem 0 0;
    padding-left: 1.1rem;
  }

  .buy {
    margin-top: 0.7rem;
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(120deg, #f96e2a 0%, #d04d16 100%);
    border-radius: 12px;
    padding: 0.62rem 0.95rem;
  }

  a {
    color: #1d4d86;
    font-weight: 700;
  }
</style>
