import './App.css'
import * as React from 'react'

import VideoJS from './VideoJS'
import video from './video.mp4'
import { createComponent } from '@lit-labs/react'
import { IxVideo } from '@imgix/ix-video'

export const ImgixVideoPlayer = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
})

function App() {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: video,
        type: 'video/mp4',
      },
    ],
  }

  return (
    <div className="app">
      <VideoJS options={videoJsOptions} />
      <ImgixVideoPlayer
        controls
        width={600}
        source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
        onSeeked={(e) => console.log(e)}
      />
    </div>
  )
}

export default App
