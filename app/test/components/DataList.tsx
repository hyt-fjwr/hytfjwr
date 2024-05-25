"use client";
import { Test } from "@/app/types/Test";
import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function DataList({ serverData }: { serverData: Test[] }) {
  const [data, setData] = useState(serverData);
  useEffect(() => {
    const channel = supabase
      .channel("realtime posts")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "test",
        },
        (payload) => {
          setData([...data, payload.new as Test]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [data, setData]);
  const dataSorted = data.sort(
    (x, y) =>
      new Date(y.created_at).getTime() - new Date(x.created_at).getTime()
  );
  return (
    <>
      <div>
        {dataSorted.map((props, index) => (
          <div
            key={index}
            className="animate-in flex flex-row border-t border-b m-3 p-2 pl-16 pr-16"
            style={{ "--index": index } as React.CSSProperties}
          >
            <div className="mr-2">
              <Image
                src={props.imageUrl}
                width={40}
                height={40}
                quality={70}
                style={{
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
                loading="lazy"
                alt="profile pic"
              />
            </div>

            <ul>
              <li className="font-bold text-xl">{props.id}</li>
              <li>{props.text}</li>
              <li>{props.created_at}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

// export default function DataList() {
//   const [data, setData] = useState<Test[]>([]);

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await supabase
//         .from("test")
//         .select()
//         .order("created_at", { ascending: false });
//       if (data) {
//         setData(data);
//       }
//     };
//     getData();
//   }, [setData]);
//   return (
//     <>
//       <div>
//         {data.map((props, index) => (
//           <div
//             key={index}
//             className="animate-in"
//             style={{ "--index": index } as React.CSSProperties}
//           >
//             <ul>
//               <li>{props.id}</li>
//               <li>{props.text}</li>
//               <li>{props.imageUrl}</li>
//               <li>{props.created_at}</li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
