# IT313 Laboratory 5 - Lab Timer & Practice Tracker (React State & Hooks in Action)

## Overview

This mobile application is built using **Expo (React Native)** to demonstrate modern React state management and hooks architecture. Designed as a study-tracking utility for laboratory sessions, it enables students to log completed practice problems and monitor their active working time.

The application showcases synchronized state management across sibling components (**Lifting State Up**), side-effect lifecycles with interval cleanup (**`useEffect`**), functional state updates (**`useState`**), dynamic conditional rendering, and logic abstraction using a **custom hook** (`useStopwatch`).

---

## Key React & Hooks Features Used

- **`useState` with Functional Updates**: Manages `solved` problem count and `isRunning` timer state in `LabScreen`. Increments use the functional update form `setSolved(s => s + 1)` to prevent race conditions and stale state.
- **Custom Hook (`useStopwatch`)**: Encapsulates timer state and side-effect logic into a reusable custom hook that accepts `isRunning` and returns formatted elapsed seconds.
- **`useEffect` with Cleanup Function**: Initiates a 1000ms `setInterval` timer when `isRunning` is `true`. Crucially implements a cleanup function returning `clearInterval(intervalId)` when the timer is paused or unmounted, preventing background memory leaks.
- **Lifting State Up**: Centralizes shared state (`solved`, `isRunning`, `seconds`) inside the common parent `LabScreen`, allowing independent sibling components (`PracticeTracker` and `Stopwatch`) to remain in sync.
- **Conditional Rendering**:
  - Dynamically displays a **"🎉 Great job!"** celebration badge inside `PracticeTracker` once `solved` reaches 5 or more.
  - Dynamically switches the timer status badge between **"● Running…"** and **"❚❚ Paused"** based on `isRunning`.
- **Event Handling via Function References**: Passes callbacks (`handleSolve`, `handleReset`, `handleStart`, `handleStop`) as direct function references (`onPress={onSolve}`) without immediate invocation parentheses in JSX.

---

## Component Architecture & File Structure

```text
IT313_Almonia_Danica_ReactStateHooks/
├── hooks/
│   └── useStopwatch.js      # Custom hook managing timer state, setInterval, and cleanup
├── components/
│   ├── PracticeTracker.js   # Problem counter card with "Solve +1", "Reset", and "Great job!" banner
│   ├── Stopwatch.js         # Digital timer display (MM:SS) with conditional running/paused badge
│   └── LabScreen.js         # Parent component holding lifted state and Start/Stop timer controls
├── App.js                   # Application root entry point configuring safe area layout
├── package.json             # Project dependencies (Expo, React, React Native) and scripts
└── README.md                # Project documentation, architecture overview, and execution guide
```

---

## How to Run the Project

### Prerequisites

- Make sure [Node.js](https://nodejs.org/) (version 18 or higher) is installed on your computer.
- Ensure you have the **Expo Go** app installed on your mobile device (Google Play Store for Android or Apple App Store for iOS), or use a web browser.

### Step 1: Navigate to the Project Folder

Open your terminal (PowerShell, Command Prompt, or VS Code Terminal) and navigate to the project directory:

```powershell
cd C:\Users\danic\Desktop\IT313_Almonia_Danica_ReactStateHooks
```

### Step 2: Install Dependencies

Install all required packages:

```powershell
npm install
```

### Step 3: Start the Expo Development Server

Run the application using Expo:

```powershell
npx expo start
```

### Step 4: View the Application

- **Physical Device**: Open the Expo Go app on your phone and scan the QR code displayed in the terminal.
- **Web Browser**: Press `w` in the terminal to view and interact with the app in your browser.

---

## Cleanup Function Experiment & Verification (Step 5 Demonstration)

To demonstrate the critical role of the effect cleanup function:

1. In `hooks/useStopwatch.js`, temporarily comment out the `clearInterval(intervalId)` call in the cleanup return function.
2. In the running app, press **Start Timer**, then **Stop Timer**, and then **Start Timer** repeatedly.
3. **Observed Failure**: Without `clearInterval`, previous intervals remain active in memory. Each press spawns an additional interval, causing the timer to tick multiple times per second (speeding up erratically) and leak memory.
4. Restoring `clearInterval(intervalId)` ensures exactly one active interval exists at any given time, freezing and resuming the timer smoothly.

---

## Sample Expected Behavior

```text
IT313 Lab Session
Study Timer & Practice Tracker
------------------------------------------------
Practice Problem Tracker
Solved: 0
[Solve +1]  [Reset]
------------------------------------------------
Lab Session Timer
00:00
[❚❚ Paused]
------------------------------------------------
[▶ Start Timer]  [⏸ Stop Timer]
```

- Pressing **"Solve +1"** 5 times renders **"🎉 Great job!"**. Pressing **"Reset"** returns the count to 0 without resetting the stopwatch.
- Pressing **"▶ Start Timer"** increments seconds every 1000ms and shows **"● Running…"**.
- Pressing **"⏸ Stop Timer"** halts the timer at its current value and restores **"❚❚ Paused"**.

---

## Author

- **Student**: Danica Almonia
- **Course**: IT 313 – Mobile Programming
- **Activity**: Laboratory 5 – Video Demonstration: React State & Hooks in Action
- **GitHub Repository**: [IT313_Almonia_Danica_ReactStateHooks](https://github.com/Danica-1011/IT313_Almonia_Danica_ReactStateHooks)