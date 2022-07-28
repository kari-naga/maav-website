<script lang="ts">
  import { onMount } from 'svelte'
  import '../app.css'
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  let headerHeight = 0
  let footerHeight = 0
  let ready = false
  onMount(() => {
    ready = true
  })
</script>

<div class="font-montserrat text-lg text-center">
  <Header bind:height={headerHeight} />
  {#if ready}
    <main class="flex flex-col items-center" style:margin-top="{headerHeight}px" style:margin-bottom="{footerHeight}px">
      <slot />
    </main>
  {/if}
  <Footer bind:height={footerHeight} />
</div>