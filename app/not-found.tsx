import { FileX2, User } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "404",
  description: "Uh oh! This page does not exist",
};

const notFoundPage = (): ReactElement => (
  <>
    <div className="w-[21rem] flex flex-col md:w-[45rem]">
      <div className="mt-5">
        <h1 className="text-black dark:text-white text-4xl font-bold flex items-center">
          404 NOT FOUND
          <FileX2 aria-hidden="true" className="h-8 w-7 ml-2" />
        </h1>
        <h2>ページが見つかりませんでした。</h2>
      </div>
      <Link href="/" className="mt-5 text-center">
        BACK TO HOME
      </Link>
    </div>
  </>
);

export default notFoundPage;
