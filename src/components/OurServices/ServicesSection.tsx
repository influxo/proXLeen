import React from "react";
import Gradient_Btn from "../Gradient_Btn";
import { useNavigate } from "react-router-dom";

// Import images from assets
import officeCleaningImg from "../../assets/images/Image.jpg";
import springCleaningImg from "../../assets/images/pcc.jpg";
import houseCleaningImg from "../../assets/images/bottle.jpg";

// Service type definition
interface ServiceType {
  slug: string;
  title: string;
  image: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  // Service data
  const services: ServiceType[] = [
    {
      slug: "kantoorgebouwen",
      title: "Kantoorgebouwen",
      image: officeCleaningImg,
      description:
        "Bij Axo Clean nemen we kantoorreiniging serieus. Ons ervaren team biedt grondige en resultaatgerichte reinigingsservices, aangepast aan uw behoeften.",
    },
    {
      slug: "schoonmaak-winkels",
      title: "Schoonmaak winkels",
      image: springCleaningImg,
      description:
        "Onze diensten omvatten schappenreiniging, vloerreiniging, desinfectie en meer. Wij bieden retail schoonmaak op maat, afgestemd op uw specifieke eisen en budget.",
    },
    {
      slug: "medische-ruimtes",
      title: "Medische ruimtes",
      image: houseCleaningImg,
      description:
        "Hygiëne in de gezondheidszorg is van het grootste belang. Axo Clean begrijpt de specifieke behoeften van medische en tandheelkundige praktijken.",
    },
    {
      slug: "showrooms",
      title: "Showrooms",
      image: officeCleaningImg,
      description:
        "Een schone showroom is cruciaal voor het presenteren van uw producten aan potentiële klanten en partners.",
    },
    {
      slug: "horeca",
      title: "Horeca",
      image: springCleaningImg,
      description:
        "Onze diensten omvatten keukenreiniging, eetruimtereiniging, en meer. Wij passen onze schoonmaak aan de specifieke behoeften van uw restaurant aan.",
    },
    {
      slug: "hotels",
      title: "Hotels",
      image: houseCleaningImg,
      description:
        "Housekeeping in hotels is essentieel voor de gastenervaring. Onze housekeeping services zorgen voor een onberispelijke en gastvrije omgeving.",
    },
    {
      slug: "industriële-schoonmaak",
      title: "Industriële schoonmaak",
      image: houseCleaningImg,
      description:
        "Industriële faciliteiten vereisen gespecialiseerde reiniging. Ons team is getraind en uitgerust om de uitdagingen van industriële schoonmaak aan te pakken, inclusief machines en apparatuur.",
    },
    {
      slug: "schoonmaak-renovatie",
      title: "Schoonmaak Renovatie",
      image: houseCleaningImg,
      description:
        "Renovatiewerkzaamheden kunnen veel stof en rommel achterlaten. Axo Clean biedt professionele schoonmaak na renovatie om uw ruimte weer in optimale staat te brengen.",
    },
    {
      slug: "festivals-en-evenementen",
      title: "Festivals en evenementen",
      image: houseCleaningImg,
      description:
        "Onze schoonmaakdiensten na festivals en evenementen zijn ontworpen om u te helpen bij een grondige en efficiënte opruiming, zodat u zich geen zorgen hoeft te maken over de nawerkingen van uw evenement.",
    },
  ];

  // Service card component
  const ServiceCard = ({ service }: { service: ServiceType }) => {
    return (
      <div className="flex flex-col">
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="mt-auto flex items-center">
          <Gradient_Btn
            text="Lees meer"
            gradientOnHover={true}
            className="flex items-center gap-2"
            onClick={() => navigate(`/services/${service.slug}`)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-[10%] py-16">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Excellent Service For All
          <br />
          Your Cleaning Assignments.
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Whatever the assignment, we will take care of it down to the last
          detail. This way you are assured of a perfect result.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-8"></div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-12"></div>
    </div>
  );
};

export default ServicesSection;
