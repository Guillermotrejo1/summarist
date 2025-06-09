import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export const AudioPlayer = () => {
  return (
    <div className="sticky bottom-0 left-0 w-full z-10">
      <div className="h-20 bg-[#042330] flex flex-col gap-15 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo />
        <div className="w-full flex justify-center items-center gap-1 m-auto flex-1 ml-32">
          <Controls />
          <ProgressBar />
        </div>
        <div className="flex items-center gap-2 text-gray-400">
        </div>
      </div>
    </div>
  );
};
