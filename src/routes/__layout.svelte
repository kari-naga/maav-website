<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import '../app.css'
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  let navHeight = 0
  let footerHeight = 0
  let ready = false
  onMount(() => {
    ready = true
  })
</script>

{#if ready}
  <Header bind:height={navHeight} />
  <div in:fade={{ delay: 1000, duration: 500 }} class="flex flex-col items-center" style:margin-top="{navHeight}px" style:margin-bottom="{footerHeight}px">
    <slot />
  </div>
  <Footer bind:height={footerHeight} />
{/if}