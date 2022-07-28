<script lang="ts">
  let href = ""
  let active = false
  export { href, active }
</script>

<li>
  <a {href}>
    <button type="button" class="relative w-full p-4 text-start transition-all text-white bg-slate-600 active:bg-slate-900 focus:z-10 focus:ring focus:ring-slate-400 {active ? '!bg-slate-800' : 'hover:bg-slate-800'}">
      <slot />
    </button>
  </a>
</li>