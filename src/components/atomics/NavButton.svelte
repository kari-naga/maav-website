<script lang="ts">
  import Button from '$components/atomics/Button.svelte'
  let href = ""
  let title = ''
  let active = false
  let className = ''
  let innerClass = ''
  let handleClick = () => {}
  export { href, title, active, className as class, innerClass, handleClick }
</script>

<a {href} {title} class={className} on:click={handleClick}>
  <Button {title} class="transition-all text-white active:bg-slate-900 focus:ring focus:ring-slate-400 {active ? 'bg-slate-800' : 'hover:bg-slate-800'} {innerClass || ''}">
    <slot />
  </Button>
</a>