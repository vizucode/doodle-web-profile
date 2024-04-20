import React, { useState } from "react";
import Section from "../components/layouts/Section";
import Portfolio from "../components/portfolio/Portfolio";
import PortfolioDetail from "../components/portfolio/PortfolioDetail";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import { useRouter } from "next/router";

export default function Portofolio({ portfolios }) {
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState([]);

  const handleOpenModal = (value) => {
    setSingleData(value);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  return (
    <Section
      title="Portfolio"
      subtitle="Beberapa pekerjaan yang sudah saya kerjakan sampa saat ini."
    >
      <MetaSeo
        title="Portfolio - Hafiz Iqbal Sahrunizar"
        description={
          "Beberapa pekerjaan yang saya."
        }
      />
      <div
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6"
        data-aos="fade-up"
      >
        {portfolios.map((value) => (
          <Portfolio
            key={value._id}
            img={`${value.img?.path}`}
            title={value.title}
            category={value.category}
            onClick={() => handleOpenModal(value)}
          />
        ))}
      </div>
      <PortfolioDetail
        isOpen={isOpen}
        onClose={handleCloseModal}
        data={singleData}
      >
      </PortfolioDetail>
    </Section>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      portfolios: [{
        id: 1,
        title: "Whatsblast",
        category: "Web Application",
        link: "https://whatsblast.bluewavelabs.my.id",
        description: "Whatsblast is a service that allows you to send bulks message for keeps up new leads for buisness. It is a web application that uses Golang, Fiber, and MySQL.",
        img: {
          path: "https://firebasestorage.googleapis.com/v0/b/personal-website-1d263.appspot.com/o/project-pict%2FScreenshot%202024-04-20%20at%2023.52.21.png?alt=media&token=7292b2e8-428c-47cc-89de-0414a008aac4"
        }
      },
      {
        id: 2,
        title: "Histore.id",
        category: "Web Application",
        link: "https://histore.id",
        description: "Histore is a digital product store that allows you to sell digital products online, in example (Top Up Games, Buy Internet and Payment Prepaid Needs) It is a web application that uses Golang, Fiber, and MySQL.",
        img: {
          path: "https://firebasestorage.googleapis.com/v0/b/personal-website-1d263.appspot.com/o/project-pict%2FGroup%204.png?alt=media&token=c2e6f812-919d-4b9f-8b10-df89ecaa670b"
        }
      },],
    },
  };
}
