# React Video Player
👉 [Click here for deployed version](https://custom-player-007.netlify.app/)

👉 [Click here for lighthouse report](https://github.com/joharikushagra/react-custom-video-player/files/14499088/lighhouse.report.pdf)

![rigi](https://github.com/joharikushagra/react-custom-video-player/assets/57484457/ee20c4ba-f9ef-4807-a545-d2f8a82e5777)

In house react-player with the following features:
- Play/Pause toggle.
- Seek functionality.
- Timer displaying current playback time and duration.
- Autoplay.
- Speed selector for playback speed adjustment.

Additional Features
- Full Screen mode
- volume control
- Responsiveness

## Handling Scale
👉 Playlist consist of **20000** videos in live demo app

Playlist is implemented using **Virtualized List** for scaling purposes. This would render only certain count of list keeping the size and latency low in case of large number of videos

## Getting Started
Use following commands to get started
```
git clone https://github.com/joharikushagra/react-custom-video-player.git
npm install
npm start
```