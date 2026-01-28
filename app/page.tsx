import Image from "next/image";
import DashboardPage from "./dashboard/page";
import Link from "next/link";

export default function HomePage() {
  return (
   <>
   <div className="home-container">
   <Link href="/dashboard">
<button className="home-btn">Go to Dashboard</button>
</Link>
</div>
   </>
  );
}
