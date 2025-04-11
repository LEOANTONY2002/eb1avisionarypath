import Loader from "@/public/images/loader.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image src={Loader} alt="Loading" />
    </div>
  );
}
