import React from "react";
import SplitPane from "react-split-pane";

function SplitingWindow() {
  return (
    <div className="h-screen">
      <SplitPane
        split="vertical"
        defaultSize="50%"
        resizerStyle={{
          background: "#ccc",
          width: "5px",
          cursor: "col-resize",
        }}
      >
        <div className="bg-gray-100 h-full flex items-center justify-center">
          Left Pane
        </div>
        <div className="bg-white h-full flex items-center justify-center">
          Right Pane
        </div>
      </SplitPane>
    </div>
  );
}

export default SplitingWindow;
