import Image from "next/image";
import ImageModal from "./components/ImageModal";
import { ThemeToggle } from "./components/Theme-Toggle";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <main>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-8">
          <h1 className="text-black dark:text-white text-4xl font-bold">
            TEST SITE
          </h1>
          <h2>Get to know me.</h2>
        </div>
        <div className="mt-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi
            commodi nam iusto, accusantium illum sunt rerum, est saepe omnis
            debitis suscipit optio explicabo accusamus nostrum nulla facilis,
            facere cum!
          </p>
          <div>test</div>
          <Loading />
        </div>
      </div>
    </main>
  );
}
