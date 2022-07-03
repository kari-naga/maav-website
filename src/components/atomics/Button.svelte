<script lang="ts">
  let className = ''
  let title = ''
  export { className as class, title }
</script>

<button type="button" {title} class="rounded-xl px-4 py-2 {className || ''}">
  <slot />
</button>