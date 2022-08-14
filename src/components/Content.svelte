<script lang="ts">
  export let title = ""
  export let constrain = true
</script>

<div class={`flex flex-col items-center gap-8 ${constrain ? "[&>*]:max-w-prose" : ""}`}>
  <h1 class="text-3xl font-semibold">{title}</h1>
  <slot />
</div>