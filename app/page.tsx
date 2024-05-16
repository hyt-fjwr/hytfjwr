import Image from "next/image";
import ImageModal from "./components/ImageModal";
import { ThemeToggle } from "./components/Theme-Toggle";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <main>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-5">
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
          <div className="grid grid-rows-3 grid-flow-col gap-4 h-96 ">
            <div className="row-span-3 bg-primary/5 rounded-lg p-4 w-32 md:w-96 h-96 text-ellipsis overflow-hidden">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              est veritatis repudiandae unde aliquid, sunt iure quia! Ea sit
              possimus dignissimos doloremque soluta provident facere,
              laboriosam earum cupiditate. Vitae, molestias? Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Voluptatem eos cum alias
              corporis id, neque, at voluptates natus nobis minus accusantium
              maxime quibusdam non laudantium rerum? Exercitationem velit autem
              perspiciatis.
            </div>
            <div className="col-span-2 bg-primary/5 rounded-lg p-4 text-ellipsis overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis earum explicabo ipsam dicta eveniet deleniti
            </div>
            <div className="row-span-2 col-span-2 bg-primary/5 rounded-lg p-4 text-ellipsis overflow-hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              perspiciatis dignissimos cupiditate, optio in atque animi vel!
              Maiores veritatis, iure, enim voluptas beatae vel nobis sequi, est
              quos vitae qui!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
