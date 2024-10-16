# Copilot Sample Integration JS

## Overview

This project is a simple JavaScript-based integration of the Copilot API. It provides a basic AI Scribe application that allows users to authenticate, select templates, initiate interactions, and perform live transcription using a CORS proxy.

The app includes:
- **Proxy server**: To bypass CORS restrictions.
- **Frontend**: Built with Tailwind CSS and Alpine.js to handle authentication, interaction creation, and recording controls.
- **WebSocket-based**: Audio streaming for real-time transcription.

## Prerequisites

- **Node.js** version 14 or higher installed on your machine.

## Setup

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd copilot-sample-integration-js
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

   This will start:
   - A CORS proxy at `http://localhost:8080` for handling API requests.
   - A static server on port `5173` serving the frontend.

## Usage

1. **Login**: Enter your username and password to authenticate with the Copilot API.
   
2. **Select a template**: Choose from available templates to structure your transcription.

3. **Start Interaction**: After selecting a language and template, start a new interaction.

4. **Recording Controls**:
   - **Start**: Begin streaming audio.
   - **Pause**: Temporarily pause recording.
   - **Resume**: Continue paused recording.
   - **Stop**: End the recording session.

5. **Real-time Transcriptions**: View live transcriptions and update documentation sections based on template structure.

## Project Structure

- **proxy.js**: The proxy server to allow CORS requests to the Copilot API.
- **public/**: Contains the frontend HTML and JavaScript logic.
- **package.json**: Defines project dependencies and scripts.

## Dependencies

- `cors-anywhere`: Handles CORS proxying for API requests.
- `serve`: Serves the static frontend files.