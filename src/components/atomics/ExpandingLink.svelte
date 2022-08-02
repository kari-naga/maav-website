<script lang="ts">
  import { page as current } from '$app/stores'
  import IconPlus from '~icons/bi/plus'
  import IconMinus from '~icons/bi/dash'
  import PrettyLink from '$components/atomics/PrettyLink.svelte'
  let href = ''
  let title = ''
  let className = ''
  let active = false
  let handleClick = () => {}
  let subPages: { path: string, title: string }[] = []
  let showContents = false
  let height = 0
  export { href, title, className as class, active, handleClick, subPages }
</script>

<div class="overflow-hidden">
  <div class="flex justify-between items-center">
    <PrettyLink {href} {title} {active} class={className} {handleClick}>
      <slot />
    </PrettyLink>
    <button type="button" title="Toggle Subteams Visibility" class="relative w-6 h-6 flex justify-center items-center transition-all hover:text-blue-500 active:text-blue-700" on:click={() => showContents = !showContents}>
      <IconPlus class={`text-xl absolute inset-0 transition-all duration-300 ${showContents ? 'invisible opacity-0 rotate-90' : ''}`} />
      <IconMinus class={`text-xl absolute inset-0 transition-all duration-300 ${showContents ? '' : 'invisible opacity-0 -rotate-90'}`} />
    </button>
  </div>
  <div class={`transition-all duration-300 ${showContents ? '' : 'opacity-0'}`} style:height={showContents ? height + 'px' : 0}>
    <div class="pt-1 pl-2 flex flex-col gap-1" bind:clientHeight={height}>
      {#each subPages as child}
        <PrettyLink href={child.path} active={child.path === $current.url.pathname} class="!font-medium" {handleClick}>
          {child.title}
        </PrettyLink>
      {/each}
    </div>
  </div>
</div>