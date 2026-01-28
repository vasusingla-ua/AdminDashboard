"use client"
import Link from "next/link";
import styles from "./menuLink.module.css"
import { AnyMxRecord } from "node:dns";
import { usePathname } from "next/navigation";
type Menuitem={
    path:string,
    title:string,
    icon:React.ReactNode
}
const MenuLink=({item}:{item:Menuitem})=>{
    const pathname=usePathname();
    return(
    <>
    <Link href={item.path} className={`${styles.container} ${pathname==item.path && styles.active}`}>
    {item.icon}
    {item.title}
    
    
    </Link>
    </>
    );
}
export default MenuLink;