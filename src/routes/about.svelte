<script lang="ts">
  import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from 'svelte-vertical-timeline'
  import Content from '$components/Content.svelte'
  import timelineData from '$lib/timeline'
  import Tzoumas from '$assets/sponsors/tzoumas.jpg'
  const today = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())
  const title = 'About'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <p>
    Michigan Autonomous Aerial Vehicles (MAAV) is a student-run group at the University of Michigan that competes in the International Aerial Robotics Competition.
  </p>
  <p>
    MAAV strives to provide practical, hands-on experience for students by competing annually in the International Aerial Robotics Competition (IARC). Members of MAAV engage in the design, building, and testing of an autonomous unmanned aerial system (UAS) while furthering multiple areas of Computer Science and Aerospace Engineering research. Learn more about the current and past missions of the International Aerial Robotics Competition by clicking <a href="http://www.aerialroboticscompetition.org/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.
  </p>
</Content>
<Content title="Advisor">
  <p>
    Our staff advisor is Assistant Professor Vasileios Tzoumas, a member of the Department of Aerospace Engineering and of the Robotics Institute of the University of Michigan. Our work would not be possible without his assistance and expertise.
    You can find his website <a href="https://vasileiostzoumas.com/" class="underline hover:text-blue-600 active:text-blue-800">here</a>.
  </p>
  <img src={Tzoumas} alt="Assistant Professor Vasileios Tzoumas" class="h-40">
</Content>
<Content title="Project Timeline">
  <div class="w-screen text-start -mx-8">
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
</Content>
