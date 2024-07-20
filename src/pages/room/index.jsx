import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appID = Number(process.env.REACT_APP_APP_ID);
    const serverSecret = process.env.REACT_APP_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Abhishek"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoResolution_720P,
      },
    });
  };

  return (
    <div className="flex justify-center items-center text-center mt-24">
      <div
        ref={myMeeting}
        className="justify-center items-center text-center rounded-lg shadow-lg"
      ></div>
    </div>
  );
};

export default RoomPage;
