<script lang="ts">
  export let children;
</script>

<div class="post-content">
  {@render children?.()}
</div>

<style>
  .post-content :global(h2) {
    margin-top: 1.1rem;
    margin-bottom: 0.4rem;
    color: #132239;
  }

  .post-content :global(h3) {
    margin-top: 0.95rem;
    margin-bottom: 0.32rem;
    color: #1a3558;
  }

  .post-content :global(p),
  .post-content :global(li) {
    color: #3f536f;
    line-height: 1.68;
  }

  .post-content :global(a) {
    color: #c94b15;
  }
</style>