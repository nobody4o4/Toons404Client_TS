// // FetchMain.tsx
// import { MyFunctionType } from "@/types";
// import { useEffect, useState } from "react";

// function FetchMain<T>(fetch: MyFunctionType<T>) {
//   const [data, setData] = useState<T | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch();
//         setData(response.data);
//         console.log(response.data, "sca");
//       } catch (error) {
//         console.log("error", error);
//       }
//     }
//     fetchData();
//   }, [fetch]);

//   return data;
// }

// export default FetchMain;
