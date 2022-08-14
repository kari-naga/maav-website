<script lang="ts">
  import IconCaretLeftFill from '~icons/bi/caret-left-fill'
  import IconCaretRightFill from '~icons/bi/caret-right-fill'
  import IconCircle from '~icons/bi/circle'
  import IconCircleFill from '~icons/bi/circle-fill'
  import IconButton from './atomics/IconButton.svelte'
	export let images: { path: string, description: string }[]
  let selected = 0
</script>

<div class="w-fit flex flex-col items-center gap-8">
  <div class="flex items-center gap-8">
    <IconButton title="Previous Image" handleClick={() => selected = selected === 0 ? images.length - 1 : selected - 1} innerClass="text-gray-500">
      <IconCaretLeftFill class="text-2xl" />
    </IconButton>
    <img src={images[selected].path} alt={images[selected].description} class="max-w-3xl h-auto" />
    <IconButton title="Next Image" handleClick={() => selected = (selected + 1) % images.length} innerClass="text-gray-500">
      <IconCaretRightFill class="text-2xl" />
    </IconButton>
  </div>
  <div class="flex gap-2">
    {#each images as _, i}
      <IconButton title={`Go to image ${i}`} handleClick={() => selected = i} innerClass="text-sm text-gray-500">
        {#if i === selected}
          <IconCircleFill />
        {:else}
          <IconCircle />
        {/if}
      </IconButton>
    {/each}
  </div>
</div>