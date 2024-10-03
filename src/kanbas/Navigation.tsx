import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IconType } from "react-icons"; // Import IconType for React Icons

export default function KanbasNavigation() {
  const location = useLocation();

  // Specify path as a string type
  const linkStyle = (path: string) =>
    location.pathname === path
      ? "list-group-item text-center border-0 bg-white text-danger"
      : "list-group-item text-center border-0 bg-black text-white";

  // Specify path and IconComponent types; IconComponent is now of type IconType
  const iconStyle = (
    path: string,
    IconComponent: IconType, // Use IconType for React Icons
    isAccount: boolean = false
  ) =>
    location.pathname === path ? (
      <IconComponent className={`fs-1 text-${isAccount ? "white" : "danger"}`} />
    ) : (
      <IconComponent className={`fs-1 text-${isAccount ? "white" : "danger"}`} />
    );

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="NEU" />
      </a>

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={linkStyle("/Kanbas/Account")}
      >
        {iconStyle("/Kanbas/Account", FaRegCircleUser, true)}
        <br />
        Account
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={linkStyle("/Kanbas/Dashboard")}
      >
        {iconStyle("/Kanbas/Dashboard", AiOutlineDashboard)}
        <br />
        Dashboard
      </Link>

      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={linkStyle("/Kanbas/Courses")}
      >
        {iconStyle("/Kanbas/Courses", LiaBookSolid)}
        <br />
        Courses
      </Link>

      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={linkStyle("/Kanbas/Calendar")}
      >
        {iconStyle("/Kanbas/Calendar", IoCalendarOutline)}
        <br />
        Calendar
      </Link>

      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={linkStyle("/Kanbas/Inbox")}
      >
        {iconStyle("/Kanbas/Inbox", FaInbox)}
        <br />
        Inbox
      </Link>

      <Link
        to="/Labs"
        id="wd-labs-link"
        className={linkStyle("/Labs")}
      >
        {iconStyle("/Labs", LiaCogSolid)}
        <br />
        Labs
      </Link>
    </div>
  );
}
