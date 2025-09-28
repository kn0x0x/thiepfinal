import React from 'react';
import DearFlipViewer from './DearFlipViewer';

const FlipbookSection = () => {
  return (
    <section className="flipbook-section" id="flipbook">
      <div className="flipbook-container">
        <DearFlipViewer
          pdfURL="/pdf/the-three-musketeers.pdf"
          height="600px"
          options={{
            webgl: true,
            autoEnableOutline: false,
            autoEnableThumbnail: false,
            soundEnable: true,
            backgroundColor: "rgb(217, 217, 217)",
            responsive: true,
            pageMode: 2,
            singlePageMode: 0,
            hard: 'none',
            direction: 1,
            duration: 800,
            zoom: 1,
            enableSound: true,
            transparent: false,
            maxTextureSize: 1600
          }}
        />
      </div>
    </section>
  );
};

export default FlipbookSection;
