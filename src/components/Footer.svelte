<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import IconGithub from '~icons/bi/github'
  import IconInstagram from '~icons/bi/instagram'
  import IconEnvelope from '~icons/bi/envelope'
  import IconList from '~icons/bi/list'
  import IconClose from '~icons/bi/x-lg'
  import IconButton from '$components/atomics/IconButton.svelte'
  import { clickOutside } from '$lib/clickOutside'
  import { page as current } from '$app/stores'
  import { internal, external } from '$lib/pages'
  import PrettyLink from '$components/atomics/PrettyLink.svelte'
  import ExpandingLink from './atomics/ExpandingLink.svelte';
  let showMenu = false
  export let height = 0
</script>

<footer class="shrink-0 fixed bottom-0 z-10 w-full h-14 p-4 flex items-center gap-6 bg-slate-200 border-t-2 border-slate-300" bind:clientHeight={height}>
  <IconButton href="https://www.instagram.com/umichmaav/" title="Instagram">
    <IconInstagram class="text-xl" />
  </IconButton>
  <IconButton href="https://github.com/MAAV-Software/" title="Github">
    <IconGithub class="text-xl" />
  </IconButton>
  <IconButton href="mailto:maav-leads@umich.edu" title="Email">
    <IconEnvelope class="text-xl" />
  </IconButton>
  <IconButton class="ml-auto" handleClick={() => showMenu = true} title="Open Menu">
    <IconList class="text-xl" />
  </IconButton>
</footer>

{#if showMenu}
<div transition:fade={{ duration: 500 }} class="fixed inset-0 w-full h-full backdrop-blur-sm z-40" />
<div transition:fly={{ x: 100, duration: 500 }} use:clickOutside on:outclick={() => showMenu = false} class="fixed top-0 right-0 h-full w-64 z-50 bg-slate-100 shadow-xl p-6 flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <p>MAAV</p>
    <div class="flex flex-col gap-2 ml-2">
      {#each internal as page}
        {#if page.title === "Subteams"}
          <ExpandingLink href={page.path} active={page.path === $current.url.pathname || (page.subPages && page.subPages.some(subPage => subPage.path === $current.url.pathname))} handleClick={() => showMenu = false} subPages={page.subPages}>
            {page.title}
          </ExpandingLink>
        {:else}
          <PrettyLink href={page.path} active={page.path === $current.url.pathname} handleClick={() => showMenu = false}>
            {page.title}
          </PrettyLink>
        {/if}
      {/each}
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <p>External</p>
    <div class="flex flex-col gap-2 ml-2">
      {#each external as page}
        <PrettyLink href={page.path} active={page.path === $current.url.pathname}>
          {page.title}
        </PrettyLink>
      {/each}
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <p>Email</p>
    <a href="mailto:maav-leads@umich.edu" class="ml-2 transition-all font-medium text-yellow-500 hover:text-yellow-700 active:text-yellow-800">
      maav-leads@umich.edu
    </a>
  </div>
  <IconButton class="absolute bottom-0 right-0 p-4 bg-slate-100" handleClick={() => showMenu = false} title="Close Menu">
    <IconClose class="text-xl" />
  </IconButton>
</div>
{/if}