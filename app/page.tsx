import Image from "next/image";
import ImageModal from "./components/ImageModal";
import { ThemeToggle } from "./components/Theme-Toggle";
import Loading from "./components/Loading";
import SlideTextAnim from "./components/SlideTextAnim";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <h1
          className="text-black dark:text-white text-4xl font-bold animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Hayato Fujiwara
        </h1>
        <h2
          className="mt-2 animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hey there👋 I&apos;m experienced in :
        </h2>
        <SlideTextAnim />
      </div>
      <div className="w-[21rem] flex flex-col md:w-[45rem]">
        <div className="mt-20">
          <p
            className="animate-in"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi
            commodi nam iusto, accusantium illum sunt rerum, est saepe omnis
            debitis suscipit optio explicabo accusamus nostrum nulla facilis,
            facere cum!
          </p>
          <div
            className="grid grid-rows-3 grid-flow-col gap-4 h-96 animate-in"
            style={{ "--index": 4 } as React.CSSProperties}
          >
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
