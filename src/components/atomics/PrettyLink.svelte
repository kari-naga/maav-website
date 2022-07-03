<script lang="ts">
  let href = ''
  let title = ''
  let className = ''
  let active = false
  let handleClick = () => {}
  export { href, title, className as class, active, handleClick }
</script>

<a {href} {title} class="transition-all font-semibold {active ? 'text-blue-500' : 'hover:text-blue-500'} active:text-blue-700 {className || ''}"  on:click={handleClick}>
  <slot />
</a>