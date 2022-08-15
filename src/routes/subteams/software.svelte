<script lang="ts">
  import Content from '$components/Content.svelte'
  import basePath from '$lib/basePath'
  import TestDrone from '$assets/images/test-drone.jpg'
  const title = 'Software'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Content {title}>
  <a href={`${basePath}/subteams/`} class="font-light text-xl hover:text-blue-600 active:text-blue-800">Back to Subteams</a>
  <img src={TestDrone} alt="Test Drone" class="w-11/12 h-auto" width="3888" height="2592">
  <h3 class="text-xl font-medium">Perception</h3>
  <p>
    The Software subteam uses Intel Realsense RGBD cameras and LIDAR to view our surrounding world. To solve our challenges in the new mission, we research and develop state-of-the-art algorithms to perform detection, segmentation, fitting, tracking, and other functions on the image and point cloud. Some problems we are working on include visual odometry, image stitching, object detection, and tracking using advanced neural networks. We also use LIDAR to estimate the position of obstacles. Our algorithms are run on a Jetson TX2 embedded GPU.
  </p>
  <h3 class="text-xl font-medium">Guidance, Navigation, and Control</h3>
  <p>
    A core part of our team's work is in <span class="font-medium">Guidance, Navigation, and Control (GNC)</span>. GNC feeds inputs from the vision team and our sensors into SLAM algorithms to figure out where the robot is in the world around it, and is also responsible for getting the quadcopter to where it needs to go (as instructed by Mission Planning).
  </p>
  <h3 class="text-xl font-medium">Utilities</h3>
  <p>
    Software is also responsible for developing tools to aid the rest of the software team. We maintain a Gazebo simulation used to test the rest of our software in a virtual environment by simulating sensor inputs. We also develop a ground control station used to command the quadcopter manually as well as a mobile app that accepts voice commands for the vehicle.
  </p>
  <h3 class="text-xl font-medium">Mission Planning</h3>
  <p>
    Finally, Software develops algorithms to control the behavior of our quadcopter to complete the mission. Our mission strategy algorithm is the brain of our vehicle, which would not be autonomous without it. It involves multi-robot collaboration and human-robot interaction. We work actively with graduate level robotics students to find the best solution for this new challenging mission.
  </p>
</Content>