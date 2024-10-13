import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  // Use useLocation to get the current path
  const location = useLocation();

  // Determine the active link based on the current path
  const getActiveLinkClass = (path:string) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-course-home-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Account/Signin')}`}> Signin </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-course-modules-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Account/Signup')}`}> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Account/Profile')}`}> Profile </Link>
    </div>
  );
}
