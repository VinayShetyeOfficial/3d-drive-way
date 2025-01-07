# 3D DriveWay 🚗✨

## Links

Live Site URL: [Preview](https://677ca8114c89e56f136cbe41--meek-raindrop-96c500.netlify.app/)

## Overview

**3D DriveWay** - an interactive web-based 3D experience built using **React Three Fiber** and **Three.js**, designed to showcase a sleek car model in a vibrant, dynamic environment. This project includes realistic lighting, reflective surfaces, glowing neon rings, immersive particle effects, and cinematic post-processing like GodRays and Bloom.

## Tech Stack

- **3D Framework**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **3D Rendering**: [Three.js](https://threejs.org/)
- **Post-Processing**: [Postprocessing Library](https://github.com/vanruesc/postprocessing)
- **UI Framework**: [React](https://reactjs.org/)

## Features

- Realistic 3D car model with detailed textures and reflective materials.
- Neon glowing rings with dynamic color transitions.
- Cinematic post-processing effects, including **Bloom**, **Chromatic Aberration**, **Vignette**, and **GodRays**.
- Animated particle system and interactive environment.

## Installation 🖥️

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/3d-drive-way.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 3d-drive-way
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 in your browser to view the project.

<br>
## How It Works

- The **3D car model** is loaded using `GLTFLoader` from the `three/examples` module.
- **Post-processing effects** such as **GodRays**, **Bloom**, and **Chromatic Aberration** are applied to create a cinematic atmosphere.
- The **ground plane** includes a realistic reflective surface with custom textures.
- **Neon rings** and **particles** are dynamically animated to enhance the interactive experience.
- **Orbit controls** allow for smooth rotation and exploration of the 3D environment.
