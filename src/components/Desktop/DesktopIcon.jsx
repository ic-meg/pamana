//design of the icon shortcuts

const DesktopIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center w-[60px] sm:w-[80px] cursor-pointer select-none text-black hover:brightness-125 px-1 py-2">
      <img
        src={icon}
        alt={label}
        className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] mb-1"
      />
      <span
        className="text-center text-[10px] sm:text-[12px] font-['Courier_New',_monospace] leading-tight text-white"
      >
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
