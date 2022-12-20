/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesHeader from "../../components/header/pagesHeader";
import LTLTeamImage1 from "../../assets/img/ltl-team-page-Image1.jpeg";
import LTLTeamImage2 from "../../assets/img/ltl-team-page-Image2.jpeg";
import LTLTeamImage3 from "../../assets/img/ltl-team-page-Image3.jpeg";
import LTLTeamImage4 from "../../assets/img/ltl-team-page-Image4.jpeg";
import kashif from "../../assets/img/ishaq.png";
import ishaq from "../../assets/img/nawaz.png";
import nawaz from "../../assets/img/kashif.png";

import Footer from "../../components/footer/footer";
// import PagesHeaderCard from "../../components/header/pagesHeaderCard";

/** Reusable components for Team Details */
function TeamDetails({
  image,
  title = "",
  name = "",
  position = "",
  biography = "",
  memberLink = "",
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(memberLink)}
      className="cursor-pointer"
      title={title}
    >
      <img src={image} alt={title} title={title} className="mb-6" />
      <p className="my-4 font-graphikLight text-3xl text-grey-400 text-center">
        {name}
      </p>
      <p className="mt-4 font-georgiaBold text-lg text-grey-400 text-center">
        {position}
      </p>

      <p className="mb-4 mt-4 font-graphikRegular text-sm text-grey-400 text-center">
        {biography}
      </p>
    </div>
  );
}

function OurTeam() {
  const [cardDisplayed, setCardDisplayed] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Our Team • Land Tower";
    window.scrollTo(0, 0);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <div>
      {/* {cardDisplayed ? (
        <PagesHeaderCard
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
      ) : (
        <span />
      )} */}
      <div className="w-full">
        <PagesHeader
          setCardDisplayed={setCardDisplayed}
          cardDisplayed={cardDisplayed}
        />
        <div className="lg:flex md:flex pt-6 px-6">
          <div className="lg:w-1/4 md:w-1/4 lg:mr-3 md:mr-3 ">
            <img
              src={LTLTeamImage4}
              alt="Land Tower Team Project 1"
              title="Land Tower Team Project 1"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:mx-3 md:mx-3">
            <img
              src={LTLTeamImage1}
              alt="Land Tower Team Project 2"
              title="Land Tower Team Project 2"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:mx-3 md:mx-3">
            <img
              src={LTLTeamImage2}
              alt="Land Tower Team Project 3"
              title="Land Tower Team Project 3"
            />
          </div>
          <div className="lg:w-1/4 md:w-1/4 lg:ml-3 md:ml-3">
            <img
              src={LTLTeamImage3}
              alt="Land Tower Team Project 4"
              title="Land Tower Team Project 4"
            />
          </div>
        </div>
        <div>
          <p className="mt-14 font-georgiaBold text-7xl text-grey-400 text-center">
            Our Team
          </p>
          <div className="px-2 mb-20 mt-6 font-graphikRegular text-lg text-grey-400 text-center">
            <p className="pb-6">
              AL MUIZZ VENTURE is an excellence driven Real Estate development
              company driven by professionals with the sole aim of building
              grandeur and ultra-modern homes for professionals, business and
              upwardly mobile individuals, providing them a seamless living
              experience.
            </p>
            <p className="pb-6">
              Excellence We&#39;re the belief that mastery demands all of a
              person; we grow through creativity, invention and innovation.
            </p>
            <p>
              We love and cherish our employees by obliging them to adhere to
              (Health & Safety Regulations) HSE.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-6">
          <TeamDetails
            image={kashif}
            title="CEO"
            name="Muhammad Ishaq Khan"
            position="Founder and CEO - AL MUIZZ VENTURE"
          />
          <TeamDetails
            image={ishaq}
            title="Ifeanyi Clement Nweke Head Lawyer & Business Relations at Land Tower Limited"
            name="Muhammad Nawaz Khan"
            position="Co-Founder - AL MUIZZ VENTURE"
          />
          <TeamDetails
            image={nawaz}
            title="Sales Manager"
            name="Kashif Muhammad"
            position="Sales Manager - AL MUIZZ VENTURE"
          />{" "}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OurTeam;
