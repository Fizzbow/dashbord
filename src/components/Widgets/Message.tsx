const Message = () => {
  return (
    <div className="bg-[#fff] border-[#EBEBEB] border-[1px] border-solid p-4 font-Poppins w-[250px] h-[250px] rounded-[35px]">
      <header className="flex font-bold  flex-row mb-4 justify-between items-center">
        <span className="text-[18px]">Messages</span>
        <div className="px-[10px] bg-[#0A84FF] rounded-full text-white">36</div>
      </header>
      <section className="flex flex-col">
        <Notify
          title="Justin Stewart"
          content="And than he told that it was the worst product in the moon"
          timeStr="3:45PM"
          notifyNum={3}
        />
      </section>
    </div>
  );
};
interface NotifyProps {
  title: string;
  content: string;
  timeStr: string;
  notifyNum: number;
}

const Notify = ({ title, content, timeStr, notifyNum }: NotifyProps) => {
  return (
    <div className="bg-[#F8F8F8] rounded-[20px] p-[16px]">
      <header className="flex flex-row justify-between">
        <span className="text-[#2D2E35] font-bold text-[16px]">{title}</span>
        <span className="text-[#B5B7B9] text-[12px]">{timeStr}</span>
      </header>

      <section className="flex flex-row text-[14px]">
        <div className="line-clamp-2  text-[#7D8085]">{content}</div>
        <div className="w-6 flex flex-col justify-end">
          <div className="w-6 h-6 text-white font-bold rounded-full flex flex-row items-center justify-center bg-[#0A84FF]">
            {notifyNum}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
