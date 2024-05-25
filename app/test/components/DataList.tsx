"use client";
import { Test } from "@/app/types/Test";
import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";

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
            className="animate-in"
            style={{ "--index": index } as React.CSSProperties}
          >
            <ul>
              <li>{props.id}</li>
              <li>{props.text}</li>
              <li>{props.imageUrl}</li>
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
