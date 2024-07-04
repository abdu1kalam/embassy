import { formatBusinessHours } from "@/lib/business-time";

import Image from "next/image";
import Link from "next/link";

const days = "Mon - Sat";
const openTime = "10:00 AM";
const closeTime = "6:00 PM";

export const ContactBar = () => {
  const time = formatBusinessHours(days, openTime, closeTime);
  return (
    <nav className="flex items-center justify-between p-6 h-[20px] w-full bg-blue-950/90">
      <h1 className=" text-xs md:text-base text-white font-light">{time}</h1>
      <div className="flex  items-center space-x-10  ">
        <Link href={"/facebook"} className="flex space-x-4  ">
          <Image
            src={"/icons/facebook-color.svg"}
            width={25}
            height={25}
            alt="facebook"
          />
          <Image
            src={"/icons/instagram-color.svg"}
            width={25}
            height={40}
            alt="facebook"
          />
          <Image
            src={"/icons/linkedin-color.svg"}
            width={25}
            height={25}
            alt="facebook"
          />
          <Image
            src={"/icons/x-color.svg"}
            width={20}
            height={20}
            alt="facebook"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-4 text-white">
          <h1>Careers</h1>
          <Link href={"/payment-page"}>
            <button className="cursor-pointer p-2 hover:bg-blue-900/90 transition">
              Online Payment
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
