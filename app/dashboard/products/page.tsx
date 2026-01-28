import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css"
import Pagination from "@/app/ui/dashboard/pagination/pagination";
export default function ProductsPage() {

    return (
      <div className={styles.container}>
        <div className={styles.top}>
          {/* <Search placeholder="Search f or a user..." /> */}
          <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
            </tr>
          </thead>
          <tbody>
    <tr>
      <td>
        <div className={styles.user}>
          
          Television
        </div>
      </td>
      <td>Lorem ipsum dolor sit amet.
      </td>
      <td>Rs25000</td>
      <td>27-01-2026</td>
      <td>active</td>
      <td>
    <div className={styles.buttons}>
      <Link href="/">
        <button className={`${styles.button} ${styles.view}`}>
          View
        </button>
      </Link>
  
      <button className={`${styles.button} ${styles.delete}`}>
        Delete
      </button>
    </div>
  </td>
  </tr>
  </tbody>
  </table>
  
  <Pagination />
  
  </div>
  );
}