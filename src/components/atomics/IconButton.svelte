<script lang="ts">
  let href = ''
  let title = ''
  let className = ''
  let handleClick = () => {}
  export { href, title, className as class, handleClick }
</script>

<a {href} {title} class={className}>
  <button type="button" {title} class="transition-all hover:text-blue-500 active:text-blue-700" on:click={handleClick}>
    <slot />
  </button>
</a>