import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <Image src="/js.png" alt="js" width={300} height={300}></Image>
    </>
  );
}
