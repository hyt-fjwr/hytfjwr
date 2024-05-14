import Image from "next/image";
import ImageModal from "./components/ImageModal";
import { ThemeToggle } from "./components/Theme-Toggle";

export default function Home() {
  return (
    <main>
      <h1>TEST SITE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi
        commodi nam iusto, accusantium illum sunt rerum, est saepe omnis debitis
        suscipit optio explicabo accusamus nostrum nulla facilis, facere cum!
      </p>
      <div>test</div>
      <ThemeToggle />
    </main>
  );
}
