<script lang="ts">
  let href = ''
  let title = ''
  let className = ''
  let innerClass = ''
  let handleClick = () => {}
  export { href, title, className as class, handleClick, innerClass }
</script>

<a {href} {title} class={className}>
  <button type="button" {title} class={`transition-all hover:text-blue-500 active:text-blue-700 ${innerClass}`} on:click|preventDefault={handleClick}>
    <slot />
  </button>
</a>