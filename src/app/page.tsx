import Image from "next/image";
import Mainbar from "./components/main"
import Sidebar from "./components/sidebar"

export default function Home() {

  return (
    <main className="flex">
      <Sidebar />
      <Mainbar page={"about"} />
    </main>
  );
}
