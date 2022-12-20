import React from "react";
import { ReactComponent as MapIcon } from "../../assets/svg/mapIcon.svg";
import { ReactComponent as TimeIcon } from "../../assets/svg/timeIcon.svg";
import { ReactComponent as PhoneOfficeIcon } from "../../assets/svg/phoneOfficeIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagramIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitterIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedinIcon.svg";
import LandTowerLogoImage from "../../assets/img/AL-MUIZZ.png";

function Footer() {
  return (
    <div className="lg:pt-40">
      <div className="relative w-full hidden md:hidden lg:block bg-black">
        <div className="w-full absolute top-0 flex justify-center">
          <div className="flex h-52 w-4/5 px-14 -mt-32 justify-between items-center bg-landTower-gold3-color">
            <div className="flex between items-center mx-2">
              <MapIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Office Address
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Plot# 150, Khayam Town, Near Blessing Tower H13, Islamabad,
                  Pakistan
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2">
              <TimeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Working Hours
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Mondays to Sunday{" "}
                  <span className="font-graphikMedium">08:00AM</span> to{" "}
                  <span className="font-graphikMedium">06:00PM</span>.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2">
              <PhoneOfficeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Sales Contact
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Call{" "}
                  <span className="font-graphikMedium">
                    Muhammad Nawaz Khan
                  </span>{" "}
                  on{" "}
                  <a href="tel:+923129298918" className="font-graphikMedium">
                    +923129198918
                  </a>{" "}
                  or{" "}
                  <span className="font-graphikMedium">
                    Muhammad Ishaq Khan
                  </span>{" "}
                  on{" "}
                  <a href="tel:+923134033099" className="font-graphikMedium">
                    +923134033099
                  </a>
                  or <span className="font-graphikMedium">Kashif Muhammad</span>{" "}
                  on{" "}
                  <a href="tel:+923139782712" className="font-graphikMedium">
                    +923139782712
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/5 w-full bg-white" />
        <div className="h-4/5 px-20 pt-36 w-full ">
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="w-450">
                <img
                  src={LandTowerLogoImage}
                  alt="Logo"
                  className="w-70 h-60"
                />
                <p className="font-graphikRegular text-white text-xs leading-5 mt-6 ml-3 pr-20">
                  AL MUIZZ Venture is a company which firmly believe in customer
                  trust and satisfication. We deals in Sale, Purchase and Rent
                  of Real Estate and Cars. The company also includes
                  construction of poperties and highrise. We also deals in
                  Tours,digital advertising and other stuff.
                </p>
              </div>

              <div className="w-522 text-right">
                <p className=" font-georgiaBold text-xl text-gray-300">
                  CALL ON THIS NUMBER{" "}
                </p>
                <a
                  href="tel:+923139782712"
                  className="font-graphikBold text-white text-3xl "
                >
                  +923139782712
                </a>
                <br />
                <a
                  href="tel:+93129198918"
                  className="font-graphikBold text-white text-3xl "
                >
                  +923129192918
                </a>
                <br />
                <a
                  href="tel:+923134033099"
                  className="font-graphikBold text-white text-3xl "
                >
                  +923134033099
                </a>
                <p>
                  <a
                    href="mailto:hello@LandTowerLimited.com"
                    className="font-graphikMedium cursor-pointer text-base text-gray-300"
                  >
                    almuizz@gmail.com
                  </a>
                </p>
                <div className="flex mt-10 float-right justify-between items-center">
                  <InstagramIcon
                    title="Instagram"
                    className="cursor-pointer w-10"
                  />
                  <FacebookIcon
                    title="Facebook"
                    className="cursor-pointer w-10"
                  />
                  <TwitterIcon
                    title="Twitter"
                    className="cursor-pointer w-10"
                  />
                  <LinkedinIcon
                    title="LinkedIn"
                    className="cursor-pointer w-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:block lg:hidden">
        <div className="flex justify-center w-full ">
          <div className="w-4/5 px-2 bg-landTower-gold3-color">
            <div className="flex between items-center mx-2 mt-10">
              <MapIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Office Address
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Block 20, Asamankese Street, Wuse Zone 2. FCT, Abuja.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2 mt-10">
              <TimeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Working Hours
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Monday to Friday{" "}
                  <span className="font-graphikMedium">09:00AM</span> to{" "}
                  <span className="font-graphikMedium">05:00PM</span>. Saturdays
                  until <span className="font-graphikMedium">03:00PM</span>.
                </p>
              </div>
            </div>
            <div className="flex between items-center mx-2 my-10">
              <PhoneOfficeIcon />
              <div className="ml-6">
                <p className="font-georgiaBold text-2xl text-gray-700">
                  Sales Contact
                </p>
                <p className="font-graphikRegular text-base text-gray-700 mt-4">
                  Call <span>Maryann</span> on{" "}
                  <span href="tel:+234916349452" className="font-graphikMedium">
                    0916349452
                  </span>{" "}
                  or <span>Cindy</span> on{" "}
                  <span
                    href="tel:+2347015011779"
                    className="font-graphikMedium"
                  >
                    07015011779
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 bg-black">
          <div className="mx-4">
            <div className="py-6">
              <img
                src={LandTowerLogoImage}
                alt="Land Tower Logo"
                className=" mt-2 mb-4"
              />
              <p className="font-graphikRegular text-white text-xs leading-5 mt-6">
                Land Tower is a competent team of engineers that design,
                construct, market and sell building projects from foundation to
                furnishing. An integrated force of talents that exceeds limits,
                clients expectations of projects under within any given
                timeline.
              </p>
            </div>

            <div className="py-6">
              <p className="font-georgiaBold text-xl text-gray-300">
                CALL CENTER
              </p>
              <a
                href="tel:+923139782712"
                className="font-graphikBold text-white text-3xl"
              >
                +923139782712
              </a>
              <p>
                <a
                  href="mailto:hello@LandTowerLimited.com"
                  className="font-graphikMedium cursor-pointer text-base text-gray-300"
                >
                  almuizz@gmail.com
                </a>
              </p>
              <div className="flex mt-4 w-1/2 -ml-2 justify-between items-center">
                <InstagramIcon
                  title="Instagram"
                  className="cursor-pointer w-10"
                />
                <FacebookIcon
                  title="Facebook"
                  className="cursor-pointer w-10"
                />
                <TwitterIcon title="Twitter" className="cursor-pointer w-10" />
                <LinkedinIcon
                  title="LinkedIn"
                  className="cursor-pointer w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
