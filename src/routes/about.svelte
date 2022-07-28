<script lang="ts">
  import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from 'svelte-vertical-timeline'
  import timelineData from '$lib/timeline'
  import Ford from '$assets/sponsors/ford.png'
  import Lockheed from '$assets/sponsors/lockheed-martin.png'
  import Northrop from '$assets/sponsors/northrop-grumman.png'
  import Raytheon from '$assets/sponsors/raytheon.png'
  const today = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="p-8 sm:p-24 flex flex-col gap-12 sm:gap-24">
  <div class="flex flex-col gap-8">
    <h1 class="text-3xl font-semibold">About</h1>
    <p>
      Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that competes in the International Aerial Robotics Competition.
    </p>
    <p>
      MAAV strives to provide practical, hands-on experience for students by competing annually in the International Aerial Robotics Competition (IARC). Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) while furthering multiple areas of Computer Science and Aerospace Engineering research. Learn more about the current and past missions of the International Aerial Robotics Competition by clicking <a href="http://www.aerialroboticscompetition.org/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.
    </p>
  </div>
  <div class="flex flex-col items-center gap-8">
    <h1 class="text-3xl font-semibold">Sponsors</h1>
    <p>
      MAAV is made possible by the generous support of our sponsors.
    </p>
    <div class="flex justify-center items-center gap-8 flex-wrap">
      <a href="https://www.ford.com/">
        <img src={Ford} alt="Ford" class="h-14">
      </a>
      <a href="https://www.lockheedmartin.com/">
        <img src={Lockheed} alt="Lockheed Martin" class="h-14">
      </a>
      <a href="https://www.northropgrumman.com/">
        <img src={Northrop} alt="Northrop Grumman" class="h-14">
      </a>
      <a href="https://www.rtx.com/">
        <img src={Raytheon} alt="Raytheon" class="h-14">
      </a>
    </div>
  </div>
  <div class="flex flex-col items-center gap-8 -mx-8">
    <h1 class="text-3xl font-semibold">Project Timeline</h1>
    <div class="w-full text-start">
      <Timeline position="alternate">
        {#each timelineData as { time, title, description }, index}
          <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
              <p class="font-light">{time}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style="background-color: #7CD5E2;" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style="margin-bottom: 1rem;">
              <h3 class="font-medium">{title}</h3>
              <p class="font-light max-w-sm" class:float-right={index % 2 === 1}>{description}</p>
            </TimelineContent>
          </TimelineItem>
        {/each}
        <TimelineItem>
          <TimelineOppositeContent slot="opposite-content">
            <p class="font-light">{today}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style="background-color: #364153; border-color: #364153; position: absolute; z-index: -10; animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;" />
            <TimelineDot style="background-color: #7CD5E2;" />
          </TimelineSeparator>
          <TimelineContent>
            <h3 class="font-medium">Today</h3>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</div>
