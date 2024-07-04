import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faPhone,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const AddressBar = () => {
  return (
    <div className="bg-slate-400/20 ">
      <div className=" md:flex md:flex-col max-w-[1000px] m-auto md:h-[300px] lg:h-[150px] pt-4 pb-4 lg:flex-row lg:justify-around items-center ">
        <Image
          src={"/icons/logo-visa.png"}
          alt="logo"
          width={300}
          height={100}
          className="bg-cover m-auto"
        />

        <div className="hidden  mt-4 md:flex space-x-4 ">
          <div className="flex  flex-col items-center space-y-1">
            <FontAwesomeIcon style={{ height: "20px" }} icon={faMailBulk} />
            <Link
              href={"/"}
              className="text-muted-foreground text-base uppercase "
            >
              Mail us Today{" "}
            </Link>
            <p className="text-black text-sm font-extrabold">
              info@gatewayvisas.com
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <FontAwesomeIcon style={{ height: "20px" }} icon={faPhone} />
            <Link
              href={"/"}
              className="text-muted-foreground text-base uppercase "
            >
              CALL US FOR MORE DETAILS
            </Link>
            <p className="text-black text-sm font-extrabold">
              801 916 8899 / 970 188 8555
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1 ">
            <FontAwesomeIcon icon={faBuilding} style={{ height: "20px" }} />
            <Link
              href={"/"}
              className="text-muted-foreground text-base uppercase "
            >
              COMPANY LOCATION
            </Link>
            <p className="text-black text-sm font-extrabold">
              Hyderabad / Bangalore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
