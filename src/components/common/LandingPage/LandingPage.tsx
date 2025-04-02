
import Link from "next/link";
import Image from "next/image";
import notice from "../../../assets/images/notice.png";
import { LandingPageImage } from "..";

const LandingPage = () => {



  return (
    <div className="container mt-4">
      <div className="row ">
        {/* Left Section */}
        <div className="col-sm-5 text-center">
          <p className="text-[#4A4A4A] text-3xl font-bold pt-10.5">
            Report a Missing Person information
          </p>
          <Link href="/report" className="btn btn-warning">
            Report Now
          </Link>
          <p className="text-[#4A4A4A] text-3xl font-bold pt-10.5">
            Search for Someone
          </p>
          <Link href="/search" className="btn btn-warning">
            Search Now
          </Link>

          <Image
            src={notice}
            alt="Notice"
            width={60}
            height={60}
            className="mt-4  hidden sm:block"
          />

          <div className="text-left pl-7 hidden sm:block">
            <p className="text-[#4A4A4A] text-2xl font-bold">
              <span className="text-xl font-semibold">–</span> Every search
              brings hope
            </p>
            <p className="text-[#4A4A4A] text-2xl font-bold">
              <span className="text-xl font-semibold">–</span> Together, we can
              make a difference
            </p>
            <p className="text-[#4A4A4A] text-2xl font-bold">
              <span className="text-xl font-semibold">–</span> Start search now
              – every second counts!
            </p>
            <p className="text-[#4A4A4A] text-2xl font-bold">
              <span className="text-xl font-semibold">–</span> No one is truly
              lost when we search together
            </p>
          </div>
        </div>

        {/* Right Section */}
        <LandingPageImage />
      </div>
    </div>
  );
};

export default LandingPage;
