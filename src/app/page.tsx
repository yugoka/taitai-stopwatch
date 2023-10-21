import Image from "next/image";
import Time from "./components/Time";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <Time />
      </div>
    </main>
  );
}
