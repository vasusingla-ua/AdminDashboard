import Card from "../ui/dashboard/card/card";
import styles from  '../ui/dashboard/dashboard.module.css'
import Transactions from "../ui/dashboard/transactions/transaction";
export default function DashboardPage() {
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
      </div>
<div className={styles.transactions}>
  <Transactions/>
</div>
    </div>
  );
}

