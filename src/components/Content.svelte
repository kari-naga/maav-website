<script lang="ts">
  export let title = ""
</script>

<div class="flex flex-col items-center gap-8 [&>*]:max-w-prose">
  <h1 class="text-3xl font-semibold">{title}</h1>
  <slot />
</div>