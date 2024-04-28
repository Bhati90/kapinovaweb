import SpendTimeCreating from "./SpendTimeCreating";
import FrameComponent from "./FrameComponent";

const Desktop = ({ onClose }) => {
  return (
    <div className=" w-full max-w-full mq800:flex-col relative bg-white overflow-hidden flex flex-row items-start justify-start gap-[0.5rem] leading-[normal] tracking-[normal] mq1275:flex mq1275:justify-center">
      <SpendTimeCreating />
      <div className=" max-w-[48%] w-full ml-[12px] mq1275:max-w-[96%]  flex flex-col items-start justify-start pt-[2.15rem] px-[0rem] pb-[0rem] box-border  mq1275:flex-1">
        <FrameComponent />
      </div>
      {/* <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={onClose}></button>
       */}
    </div>
  );
};

export default Desktop;