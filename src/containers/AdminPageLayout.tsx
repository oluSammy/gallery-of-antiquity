import Link from "next/link";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineCategory,
} from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline, IoStatsChartSharp } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

interface Props {
  children: React.ReactNode;
  className?: string;
  pageTitle?: string;
  pageLabel?: string;
}

const Nav = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: <RiDashboardLine className="admin-sidebar-icon" />,
  },
  {
    label: "Tickets",
    link: "/admin/tickets",
    icon: <IoStatsChartSharp className="admin-sidebar-icon" />,
  },
  {
    label: "Top Categories",
    link: "/admin/top-categories",
    icon: <BiCategoryAlt className="admin-sidebar-icon" />,
  },
  {
    label: "Categories",
    link: "/admin/categories",
    icon: <MdOutlineCategory className="admin-sidebar-icon" />,
  },
  {
    label: "Products",
    link: "/admin/products",
    icon: <MdOutlineProductionQuantityLimits className="admin-sidebar-icon" />,
  },
  {
    label: "Payments",
    link: "/admin/payments",
    icon: <CiCreditCard2 className="admin-sidebar-icon" />,
  },
  {
    label: "Users",
    link: "/admin/users",
    icon: <FaRegCircleUser className="admin-sidebar-icon" />,
  },
  {
    label: "Settings",
    link: "/admin/settings",
    icon: <IoSettingsOutline className="admin-sidebar-icon" />,
  },
];

const AdminPageLayout = (props: Props) => {
  return (
    <div>
      <div className="px-6 py-4 border-b border-[#E0DEDE] flex items-center">
        <Link href="/admin">
          <Image
            src="/daps.png"
            alt="Daps Logo"
            width={150}
            height={10}
            className="z-10 cursor-pointer mr-10"
          />
        </Link>
        <div className="flex justify-between items-center w-full pl-12">
          <p className="text-[#787676] text-xl ml-12">
            {props.pageLabel || props.pageTitle}
          </p>
          <button className="admin-notification">
            <IoIosNotificationsOutline />
          </button>
        </div>
      </div>
      <div className="admin-container">
        <div className="admin-sidebar pt-10">
          {Nav.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className={`flex items-center text-[#5A6474] text-lg font-normal admin-link ${
                props.pageTitle === item.label && "admin-link-active"
              }`}
            >
              {props.pageTitle === item.label && (
                <div className="admin-sidebar-active"> &nbsp;</div>
              )}
              {item.icon}
              <span className="ml-8">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="admin-main md:px-6 px-2">{props.children}</div>
      </div>
    </div>
  );
};

export default AdminPageLayout;
