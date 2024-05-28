import { Test } from "@/app/types/Test";

async function submitAction(formData: FormData) {
  "use server";
  console.log("hello,world");
}

export default function ServerActionTest() {
  return (
    <form action={submitAction}>
      <button type="submit">submit</button>
    </form>
  );
}
