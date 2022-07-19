<script lang="ts">
  import { page as current } from '$app/stores'
  import NavButton from '$components/atomics/NavButton.svelte'
  import Logo from '$assets/resources/header.png'
  import Button from '$components/atomics/Button.svelte'
  import IconJoin from '~icons/bi/arrow-right-circle'
  import { internal as pages, basePath } from '$lib/pages'
  export let height = 0
</script>

<nav class="shrink-0 fixed top-0 z-50 w-full p-4 flex gap-2 items-center font-semibold bg-slate-700" bind:clientHeight={height}>
  <NavButton href={basePath + '/'} active={basePath + '/' === $current.url.pathname} class="flex-shrink-0" innerClass="!p-2">
    <img src={Logo} alt="MAAV Logo" class="w-28 md:w-40" />
  </NavButton>
  <div class="flex gap-4 -my-3 pt-1 pb-2 px-3 overflow-x-auto overflow-y-hidden mask-edges">
    {#each pages as page}
      {#if page.showInNav}
        <NavButton href={page.path} active={page.path === $current.url.pathname}>
          {page.title}
        </NavButton>
      {/if}
    {/each}
  </div>
  <a href={`${basePath}/join`} class="ml-auto">
    <Button class="flex gap-2 items-center transition-all text-white bg-blue-700 active:bg-blue-900 focus:ring focus:ring-blue-400 {`${basePath}join/` === $current.url.pathname ? '!bg-slate-800' : 'hover:bg-blue-800'}">
      <span>Join</span>
      <IconJoin class="text-lg hidden md:inline" />
    </Button>
  </a>
</nav>