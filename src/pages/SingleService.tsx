import React, { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import cleaningImage from "../assets/images/Image.jpg";
import { useParams } from "react-router-dom";

// Define service types
interface ServiceData {
  title: string;
  description: string;
  features: string[];
  servicePageText: string;
}

const serviceData: Record<string, ServiceData> = {
  kantoorgebouwen: {
    title: "Kantoorgebouwen",
    servicePageText:
      "Een grondige en resultaatgerichte aanpak voor kantoorreiniging. Daar gaan we voor! Ons team van ervaren professionals staat klaar om hoogwaardige schoonmaakdiensten te leveren die aansluiten bij uw specifieke behoeften.",
    description:
      "Bij Proxleen nemen we kantoorreiniging serieus. Ons ervaren team biedt grondige en resultaatgerichte reinigingsservices, aangepast aan uw behoeften.",
    features: [
      "Vetted professionals",
      "Affordable Prices",
      "Next day availability",
      "Best Quality",
      "Standard cleaning tasks",
      "Affordable Prices",
    ],
  },
  "schoonmaak-winkels": {
    title: "Schoonmaak winkels",
    servicePageText:
      "Elk type winkel heeft zijn eigen unieke behoeften als het gaat om schoonmaak en onderhoud. Of u nu een boetiek, supermarkt, boekenwinkel, elektronicawinkel of een andere soort winkel heeft.",
    description:
      "Onze diensten omvatten schappenreiniging, vloerreiniging, desinfectie en meer. Wij bieden retail schoonmaak op maat, afgestemd op uw specifieke eisen en budget.",
    features: [
      "Medical-grade cleaning",
      "Infection control",
      "Sterilization services",
      "Compliance with regulations",
      "Trained specialists",
      "Eco-friendly products",
    ],
  },
  "medische-ruimtes": {
    title: "Medische ruimtes",
    servicePageText:
      "Onze schoonmaakprofessionals worden getraind om te werken in medische omgevingen en zijn op de hoogte van de nieuwste richtlijnen en best practices.",
    description:
      "Hygiëne in de gezondheidszorg is van het grootste belang. Axo Clean begrijpt de specifieke behoeften van medische en tandheelkundige praktijken.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
  showrooms: {
    title: "Showrooms",
    servicePageText:
      "Een perfecte presentatie is van cruciaal belang in showrooms en presentatieruimtes. Uw producten moeten tot hun recht komen en klanten moeten zich welkom voelen in de ruimte.",
    description:
      "Een schone showroom is cruciaal voor het presenteren van uw producten aan potentiële klanten en partners.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
  horeca: {
    title: "Horeca",
    servicePageText:
      "Onze schoonmaakprofessionals zijn speciaal getraind in het reinigen van keukens en keukenapparatuur volgens de hoogste normen.",
    description:
      "Onze diensten omvatten keukenreiniging, eetruimtereiniging, en meer. Wij passen onze schoonmaak aan de specifieke behoeften van uw restaurant aan.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
  hotels: {
    title: "Hotels",
    servicePageText:
      "Onze housekeeping services zijn specifiek ontworpen om hotels te voorzien van een onberispelijke en gastvrije omgeving, waarin gasten zich welkom, comfortabel en verzorgd voelen.",
    description:
      "Housekeeping in hotels is essentieel voor de gastenervaring. Onze housekeeping services zorgen voor een onberispelijke en gastvrije omgeving.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
  "industriële-schoonmaak": {
    title: "Industriële schoonmaak",
    servicePageText:
      "Of het nu gaat om fabrieken, magazijnen, productiefaciliteiten of andere industriële ruimtes, wij zijn uw betrouwbare partner voor zakelijke hygiëne en veiligheid.",
    description:
      "Industriële faciliteiten vereisen gespecialiseerde reiniging. Ons team is getraind en uitgerust om de uitdagingen van industriële schoonmaak aan te pakken, inclusief machines en apparatuur.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
  "schoonmaak-renovatie": {
    title: "Schoonmaak Renovatie",
    servicePageText:
      "Onze schoonmaakdiensten na renovatie zijn ontworpen om de oorspronkelijke pracht van uw vernieuwde ruimte te herstellen.",
    description:
      "Renovatiewerkzaamheden kunnen veel stof en rommel achterlaten. Axo Clean biedt professionele schoonmaak na renovatie om uw ruimte weer in optimale staat te brengen.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
  "festivals-en-evenementen": {
    title: "Festivals en evenementen",
    servicePageText:
      "Onze schoonmaakdiensten na festivals en evenementen zijn ontworpen om u te helpen bij een grondige en efficiënte opruiming, zodat u zich geen zorgen hoeft te maken over de nawerkingen van uw evenement.",
    description:
      "Onze schoonmaakdiensten na festivals en evenementen zijn ontworpen om u te helpen bij een grondige en efficiënte opruiming, zodat u zich geen zorgen hoeft te maken over de nawerkingen van uw evenement.",
    features: [
      "Daily maintenance",
      "After-hours service",
      "Customized cleaning plans",
      "Eco-friendly options",
      "Flexible scheduling",
      "Competitive rates",
    ],
  },
};

const SingleService: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceData | null>(null);

  useEffect(() => {
    // Set default service if slug doesn't match any service
    if (slug && serviceData[slug]) {
      setService(serviceData[slug]);
    } else {
      setService(serviceData["shop-cleaning"]);
    }
  }, [slug]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero />

      <div className="px-[10%] mx-auto  py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="flex-1 md:pr-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {service.servicePageText}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-orange-500">●</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 mt-12 md:mt-0">
            <img
              src={cleaningImage}
              alt="Professional cleaning service"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Practices And Medical Spaces Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="px-[10%] mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Practices And Medical Spaces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Hygiene In Health Care
              </h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and
                employees trust that medical practices and dental areas are
                spotlessly clean and free from contamination. Hygiene is
                therefore at the top of our priority list. For a safe and
                healthy environment for patients and medical personnel.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Hygiene In Health Care
              </h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and
                employees trust that medical practices and dental areas are
                spotlessly clean and free from contamination. Hygiene is
                therefore at the top of our priority list. For a safe and
                healthy environment for patients and medical personnel.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Hygiene In Health Care
              </h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and
                employees trust that medical practices and dental areas are
                spotlessly clean and free from contamination. Hygiene is
                therefore at the top of our priority list. For a safe and
                healthy environment for patients and medical personnel.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Hygiene In Health Care
              </h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and
                employees trust that medical practices and dental areas are
                spotlessly clean and free from contamination. Hygiene is
                therefore at the top of our priority list. For a safe and
                healthy environment for patients and medical personnel.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Hygiene In Health Care
              </h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and
                employees trust that medical practices and dental areas are
                spotlessly clean and free from contamination. Hygiene is
                therefore at the top of our priority list. For a safe and
                healthy environment for patients and medical personnel.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">
                Hygiene In Health Care
              </h3>
              <p className="text-gray-600 text-sm">
                Hygiene is of the utmost importance in healthcare. Patients and
                employees trust that medical practices and dental areas are
                spotlessly clean and free from contamination. Hygiene is
                therefore at the top of our priority list. For a safe and
                healthy environment for patients and medical personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
