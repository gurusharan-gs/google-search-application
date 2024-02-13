import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-4">
        <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
          <Link to="https://mail.google.com/mail/u/0/?ogbl#inbox">Gmail</Link>
        </span>
        <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
