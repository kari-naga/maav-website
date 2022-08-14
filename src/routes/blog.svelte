<script lang="ts">
  import Content from '$components/Content.svelte'
  const title = 'Blog'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  Work In Progress
</Content>