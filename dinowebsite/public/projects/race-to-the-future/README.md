---
title: Race To The Future
path: race-to-the-future
image: /projects/race-to-the-future/rttf.jpg
date: 16-05-2023
summary: Autonomously driving RC car project incorporating Raspberry Pi, OpenCV Lane Detection, and PWM control for motors.
featured: true
---
# Race To The Future

Race To The Future is a project where we transformed an RC car to enable it to drive autonomously and participate in a race. We were provided with an unmodified RC car and a set of components that we could install on the vehicle. The race was hosted by Thomas More.

## Hardware Optimization

To achieve autonomous driving, we performed hardware tweaks on the car. We added a Raspberry Pi to control the entire vehicle, a camera to keep the car on the track, and a PWM board to control the motors accurately.

## OpenCV Lane Detection

To ensure that the car stays on the track, we utilized OpenCV Lane Detection. This advanced computer vision technology ran on the Raspberry Pi and allowed us to detect the lane markings and adjust the steering input accordingly.

## OpenCV Topics

During the project, we focused on four major topics within OpenCV:

- **Filter (HSV):** We applied a filter to the car's camera image using HSV (Hue, Saturation, Value). This enabled us to extract specific color segments and optimize the image processing.

- **Canny (Edge Detection, Contrast):** We utilized the Canny algorithm for edge detection and contrast enhancement in the image. This was crucial for accurately detecting the lane markings.

- **Region of Interest (ROI):** By defining a specific region of interest (ROI) in the camera image, we could concentrate on the relevant parts of the track. This improved the performance and efficiency of the lane detection.

- **Hough Lines (Connecting Points):** Using the Hough Lines algorithm, we connected points on the lane markings. This allowed us to determine a smooth and consistent path for the car.

## Challenges and Optimizations

During the practical implementation of the project, we encountered various challenges. Working with different Python libraries that didn't always cooperate seamlessly required us to fine-tune each library individually. We adjusted specific formulas and parameters to achieve the desired functionality. We also implemented optimizations such as using a Rolling Average method with weights to prevent excessive steering. Throughout the process, we observed occasional spikes in processing load, so we made some adjustments to enhance performance.

## Testing

On the first test day, we took the car outside for testing. We adjusted the contrast to improve the visibility of the lane markings. Additionally, we made other modifications, including introducing a delay for the camera to stabilize the image during startup and enlarging the ROI for better overall visibility.

## Results

During the race, we faced challenges, particularly due to sunny weather causing strong shadows and glare. Nevertheless, we achieved an outstanding second place. This is a remarkable result considering the competition involved two teams from the bachelor's program (including our team of second-year students) and two teams from the master's program.

## Collaboration and Pride

We completed this project in collaboration with Sens and Nick, and we take great pride in our accomplishments. It provided us with an opportunity to further develop our skills in autonomous driving, hardware optimization, and image processing. We eagerly look forward to new challenges and projects that will allow us to expand our expertise. We chose to use OpenCV for this project because we had limited experience with AI, and OpenCV provided powerful computer vision capabilities that suited our needs.
