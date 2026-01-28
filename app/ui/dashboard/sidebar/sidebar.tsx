import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter,MdLogout } from "react-icons/md";
import styles from "./sidebar.module.css"
// import menuLink from "./menuLink/menuLink";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
type MenuItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

type MenuCategory = {
  title: string;
  list: MenuItem[];
};
const menuItems:MenuCategory[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/user.png" className={styles.img}  alt="image" width="50" height="50"/>
        <div className={styles.userinfo}>
          <div className={styles.username}>Vasu</div>
          <div className={styles.useraccess}>Admin</div>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat)=>(
  <li key={cat.title}><span className={styles.cat}> {cat.title} </span>
  {cat.list.map((item)=>(
    <MenuLink key={item.title} item ={item}/>
  ))}
  </li> 
        ))}
        {/* <div classname */}
      </ul>
     <button className={styles.logout}>Logout</button>
    </div>
  );
};

export default Sidebar;