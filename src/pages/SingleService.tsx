import React, { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import cleaningImage from "../assets/images/Image.jpg";
import bgImage from "../assets/images/Background.jpg";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import Gradient_Btn from "../components/Gradient_Btn";

interface InfoSection {
  title: string;
  text: string;
}

interface BulletPoint {
  title: string;
  text: string[];
}
interface BulletPointCards {
  title: string;
  text: string[];
}

// Define service types
interface ServiceData {
  title: string;
  description: string;
  features?: string[];
  servicePageText: string;
  quote: {
    title: string;
    text: string;
  };
  info: {
    firstSection?: InfoSection;
    secondSection?: InfoSection;
    thirdSection?: InfoSection;
    fourthSection?: InfoSection;
    fifthSection?: InfoSection;
    sixthSection?: InfoSection;
  };
  bulletPoints?: BulletPoint;
  bulletPointsCards?: BulletPointCards;
}

const serviceData: Record<string, ServiceData> = {
  kantoorgebouwen: {
    title: "Kantoorgebouwen",
    bulletPoints: {
      title: "Enkele mogelijkheden: ",
      text: [
        "Dagelijkse en periodieke reinigingsschema's.",
        "Stofverwijdering en oppervlaktereiniging.",
        "Desinfectie van gemeenschappelijke ruimtes en contactpunten.",
        "Vloeronderhoud en tapijtreiniging.",
        "Raamreiniging en glazenwassen.",
        "Verwijdering van afval en recyclage.",
      ],
    },
    info: {
      firstSection: {
        title: "Het belang van een schoon kantoor",
        text: "Een schoon kantoor is meer dan alleen maar een prettige werkplek; het is een hoeksteen voor succesvol werken. Een schone werkomgeving bevordert niet alleen de gezondheid en het welzijn van uw medewerkers, maar het straalt ook professionaliteit uit naar klanten en zakenpartners. Het minimaliseert de verspreiding van ziektekiemen, verhoogt de productiviteit en draagt bij aan de algehele tevredenheid op de werkvloer. Bij Axo Clean nemen we een schoon kantoor dan ook helemaal serieus. ",
      },

      // secondSection: {
      //   title: "Enkele mogelijkheden: ",
      //   text: "Dagelijkse en periodieke reinigingsschema's. Stofverwijdering en oppervlaktereiniging. Desinfectie van gemeenschappelijke ruimtes en contactpunten. Vloeronderhoud en tapijtreiniging. Raamreiniging en glazenwassen. Verwijdering van afval en recyclage.",
      // },
      thirdSection: {
        title: "Maatwerk voor verschillende kantooromgevingen",
        text: "Elk kantoor is uniek, met specifieke eisen en wensen op het gebied van schoonmaak. Of u nu een groot bedrijfskantoor, een creatieve co-workingruimte, of een medische praktijk runt, wij passen onze diensten aan om aan uw specifieke behoeften te voldoen. Onze flexibele aanpak zorgt ervoor dat we uw kantooromgeving optimaal kunnen onderhouden, zodat u zich kunt concentreren op uw kernactiviteiten, terwijl wij zorgen voor een onberispelijke schoonmaak.",
      },
    },
    quote: {
      title: "Offerte schoonmaak kantoor",
      text: "Klaar om uzelf en uw medewerkers een piekfijn schoon kantoor te gunnen? Schakel dan Axo Clean in. Contacteer ons voor meer informatie en een vrijblijvende offerte. Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPoints: {
      title:
        "Onze aanpak voor verschillende soorten winkels omvat onder andere:",
      text: [
        "Reiniging van schappen en productdisplays.",
        "Vloerreiniging en polijsten.",
        "Desinfectie van winkelwagentjes en handgrepen.",
        "Raamreiniging voor een helder uitzicht op producten.",
        "Verwijdering van vlekken en morsingen.",
        "Afvalverwijdering en recyclingbeheer.",
      ],
    },
    info: {
      firstSection: {
        title: "Winkelreiniging voor een positieve klantervaring",
        text: "Een eerste blik kan een blijvende indruk achterlaten, en dat geldt zeker voor uw winkel. Een schone en opgeruimde winkelomgeving is essentieel om klanten aan te trekken, hun verblijf te verlengen en hun koopervaring te verbeteren. Bij Axo Clean gaan we dan ook voor een vlekkeloos schone winkelruimte en streven we ernaar om bij te dragen aan een positieve klantervaring. Onze winkelreinigingsdiensten zijn ontworpen om deze impact te maximaliseren en uw winkel te laten stralen.",
      },
      secondSection: {
        title: "Specifieke eisen voor verschillende soorten winkels",
        text: "Elk type winkel heeft zijn eigen unieke behoeften als het gaat om schoonmaak en onderhoud. Of u nu een boetiek, supermarkt, boekenwinkel, elektronicawinkel of een andere soort winkel heeft, wij begrijpen de specifieke uitdagingen waarmee u te maken heeft. Onze schoonmaakprofessionals zijn getraind om rekening te houden met de aard van uw producten, verkeerspatronen van klanten en andere factoren die van invloed kunnen zijn op de reiniging.",
      },
      thirdSection: {
        title:
          "Onze aanpak voor verschillende soorten winkels omvat onder andere:",
        text: "Reiniging van schappen en productdisplays. Vloerreiniging en polijsten. Desinfectie van winkelwagentjes en handgrepen. Raamreiniging voor een helder uitzicht op producten. Verwijdering van vlekken en morsingen. Afvalverwijdering en recyclingbeheer.",
      },
      fourthSection: {
        title: "Retail schoonmaak op maat",
        text: "Bij Axo Clean begrijpen we dat elke winkel unieke behoeften heeft op het gebied van schoonmaak. Daarom bieden we retail schoonmaakdiensten op maat aan. We werken nauw samen met u om een schoonmaakplan te ontwikkelen dat volledig is afgestemd op uw specifieke eisen en budget. Onze flexibiliteit en aanpasbaarheid stellen ons in staat om uw winkel in topconditie te houden, zodat u zich kunt concentreren op het bieden van de best mogelijke winkelervaring aan uw klanten.",
      },
    },
    quote: {
      title: "Offerte schoonmaak winkel en retail",
      text: "Klaar om uw klanten en medewerkers een piekfijne winkel te gunnen? Schakel dan Axo Clean in. Contacteer ons voor meer informatie en een vrijblijvende offerte. Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPoints: {
      title:
        "Onze diensten voor medische en tandheelkundige praktijken omvatten onder andere:",
      text: [
        "Desinfectie van behandelkamers en wachtruimtes.",
        "Reiniging en sterilisatie van medische apparatuur.",
        "Vloerreiniging en onderhoud.",
        "Verwijdering van biologisch afval en scherpe voorwerpen.",
        "Grondige reiniging van sanitaire voorzieningen.",
      ],
    },
    info: {
      firstSection: {
        title: "Hygiëne in de gezondheidszorg",
        text: "In de gezondheidszorg is hygiëne van het grootste belang. Patiënten en medewerkers vertrouwen erop dat medische praktijken en tandheelkundige ruimtes brandschoon en vrij van besmettingsgevaar zijn. Hygiëne staat dan ook bovenaan ons prioriteitenlijstje. Voor een veilige en gezonde omgeving voor patiënten en medisch personeel.",
      },
      secondSection: {
        title:
          "Reinigingsprotocollen voor medische en tandheelkundige praktijken",
        text: "Medische en tandheelkundige praktijken vereisen specifieke schoonmaakprotocollen vanwege de delicate aard van de dienstverlening en de gevoeligheid van de apparatuur. Bij Axo Clean hebben we een diepgaand begrip van deze vereisten en hanteren we strikte reinigingsprotocollen die voldoen aan de hoogste normen in de gezondheidszorg. Onze schoonmaakprofessionals worden getraind om te werken in medische omgevingen en zijn op de hoogte van de nieuwste richtlijnen en best practices.",
      },
      thirdSection: {
        title:
          "Onze diensten voor medische en tandheelkundige praktijken omvatten onder andere: ",
        text: "Desinfectie van behandelkamers en wachtruimtes. Reiniging en sterilisatie van medische apparatuur. Vloerreiniging en onderhoud. Verwijdering van biologisch afval en scherpe voorwerpen. Grondige reiniging van sanitaire voorzieningen.",
      },
      fourthSection: {
        title: "Veiligheid en naleving van regelgeving",
        text: "Ons team is op de hoogte van de relevante regelgeving en werkt volgens strikte veiligheidsprotocollen om ervoor te zorgen dat de schoonmaakwerkzaamheden niet interfereren met de medische procedures.",
      },
    },
    quote: {
      title: "Offerte schoonmaak praktijkruimte",
      text: "Uw praktijkruimte in goede handen? Schakel dan Axo Clean in. Contacteer ons voor meer informatie en een vrijblijvende offerte. Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPoints: {
      title: "Enkele mogelijkheden: ",
      text: [
        "Grondige reiniging van vloeren en oppervlakken.",
        "Stofverwijdering en glasreiniging.",
        "Verlichting en armaturen reinigen voor optimale presentatie.",
        "Desinfectie van contactpunten.",
        "Periodieke dieptereiniging voor behoud van showroomkwaliteit. ",
      ],
    },
    info: {
      firstSection: {
        title: "Impact van een schone showroom",
        text: "Een schone showroom is van groot belang. Het is immers de plek waar u uw producten of diensten presenteert aan potentiële klanten en partners. De eerste indruk die ze krijgen, kan bepalend zijn voor het succes van uw verkoopinspanningen. Bij Axo Clean zijn we ons terdege bewust dat een brandschone showroom niet alleen de esthetische uitstraling van uw producten verbetert, maar ook het vertrouwen van uw klanten vergroot. Onze showroomreinigingsdiensten zijn dan ook ontworpen om deze impact te maximaliseren en uw showroom te laten stralen.",
      },
      secondSection: {
        title: "Het belang van perfecte presentatie",
        text: "Een perfecte presentatie is van cruciaal belang in showrooms en presentatieruimtes. Uw producten moeten tot hun recht komen en klanten moeten zich welkom voelen in de ruimte. Schoonmaak is hierbij essentieel, omdat zelfs het kleinste stofje of vlekje de aandacht van potentiële klanten kan afleiden. Zorg er dus voor dat uw showroom er altijd onberispelijk uitziet, zodat uw producten de aandacht krijgen die ze verdienen.",
      },
      thirdSection: {
        title: "Specifieke eisen voor het onderhoud van showrooms",
        text: "Showrooms en presentatieruimtes hebben specifieke eisen als het gaat om schoonmaak en onderhoud. Dit kan variëren afhankelijk van het type producten dat u presenteert, de vloermaterialen, de verlichting en meer. Bij Axo Clean zijn we bekend met deze specifieke behoeften en passen we onze schoonmaakdiensten aan om aan al uw vereisten te voldoen. ",
      },
    },
    quote: {
      title: "Offerte schoonmaak showroom",
      text: "U wilt uw showroom in schitterende staat zodat uw klanten naar hartenlust kunnen rondkijken en kiezen? Schakel dan Axo Clean in. Contacteer ons voor meer informatie en een vrijblijvende offerte. Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    info: {
      firstSection: {
        title: "Voedselveiligheid en schoonmaak",
        text: "In de horeca staat voedselveiligheid bovenaan de prioriteitenlijst. Een schone en hygiënische omgeving is van essentieel belang om de gezondheid en het welzijn van uw gasten te waarborgen. Bij Axo Clean zijn we helemaal mee met de unieke uitdagingen van restaurants en horecagelegenheden als het gaat om voedselveiligheid. Onze schoonmaakdiensten zijn gericht op het handhaven van strikte hygiënenormen en zorgen ervoor dat uw keuken en eetruimte altijd schoon en veilig zijn.",
      },
      secondSection: {
        title: "Keuken-en eetruimte schoonmaak",
        text: "Het hart van elk restaurant is de keuken, waar hygiëne en netheid van het grootste belang zijn. Onze schoonmaakprofessionals zijn speciaal getraind in het reinigen van keukens en keukenapparatuur volgens de hoogste normen. We verwijderen vetresten, desinfecteren oppervlakken en zorgen ervoor dat uw keuken voldoet aan de voedselveiligheidsvoorschriften. Naast de keuken is de eetruimte de plek waar gasten genieten van hun maaltijden en de sfeer van uw restaurant ervaren. Een schone en aangename eetruimte is essentieel voor klanttevredenheid en herhaalbezoek. Bij Axo Clean zorgen we ervoor dat uw eetruimte altijd uitnodigend en schoon is, met aandacht voor details zoals tafelreiniging, vloeronderhoud en desinfectie van gemeenschappelijke oppervlakken.",
      },
      thirdSection: {
        title: "Aanpassing aan de horecabranche",
        text: "De horecabranche is dynamisch en veeleisend, met specifieke behoeften als het gaat om schoonmaak. Bij Axo Clean begrijpen we dat en passen we onze diensten aan om aan de unieke eisen van uw restaurant of horecagelegenheid te voldoen. Of u nu een chic restaurant, een café, een fastfoodrestaurant of een ander type eetgelegenheid runt, wij begrijpen de verschillende behoeften en passen onze aanpak dienovereenkomstig aan. ",
      },
    },
    quote: {
      title: "Offerte schoonmaak horecazaak",
      text: "U wilt uw horecazaak in schitterende staat zodat uw klanten naar hartenlust kunnen genieten van uw gastronomische pareltjes? Schakel dan Axo Clean in. Contacteer ons voor meer informatie en een vrijblijvende offerte. Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPointsCards: {
      title: "Waarom u voor ons kiest",
      text: [
        "Gastgerichte Professionals: Ons team van housekeepers is zorgvuldig geselecteerd en getraind om de gastgerichtheid van uw hotel te weerspiegelen. We begrijpen de unieke behoeften van de hotelbranche en zetten ons in voor de tevredenheid van uw gasten.",
        "Flexibiliteit: We passen onze housekeeping services aan op basis van uw specifieke wensen en operationele schema. Of het nu gaat om dagelijkse schoonmaak, periodieke dieptereiniging of specifieke verzoeken, we zijn er om aan uw behoeften te voldoen.",
        "Grondige Reiniging: Onze housekeepers voeren een grondige reiniging uit van alle kamers en gemeenschappelijke ruimtes, inclusief stofzuigen, dweilen, stofafname, het verschonen van beddengoed en handdoeken, keuken- en badkamerreiniging, en meer. We leggen de lat hoog als het gaat om netheid en hygiëne.",
        "Betrouwbare Service: In de hotelbranche is betrouwbaarheid essentieel. U kunt op ons rekenen voor een punctuele en betrouwbare service die uw gasten altijd tevreden stelt.",
      ],
    },
    info: {
      firstSection: {
        title: "Waarom u voor ons kiest",
        text: "Gastgerichte Professionals: Ons team van housekeepers is zorgvuldig geselecteerd en getraind om de gastgerichtheid van uw hotel te weerspiegelen. We begrijpen de unieke behoeften van de hotelbranche en zetten ons in voor de tevredenheid van uw gasten. Flexibiliteit: We passen onze housekeeping services aan op basis van uw specifieke wensen en operationele schema. Of het nu gaat om dagelijkse schoonmaak, periodieke dieptereiniging of specifieke verzoeken, we zijn er om aan uw behoeften te voldoen. Grondige Reiniging: Onze housekeepers voeren een grondige reiniging uit van alle kamers en gemeenschappelijke ruimtes, inclusief stofzuigen, dweilen, stofafname, het verschonen van beddengoed en handdoeken, keuken- en badkamerreiniging, en meer. We leggen de lat hoog als het gaat om netheid en hygiëne. Betrouwbare Service: In de hotelbranche is betrouwbaarheid essentieel. U kunt op ons rekenen voor een punctuele en betrouwbare service die uw gasten altijd tevreden stelt.",
      },
      secondSection: {
        title: "De mogelijkheden: ",
        text: "Kamerreiniging: Grondige schoonmaak en desinfectie van alle kamers, inclusief het verschonen van beddengoed en handdoeken. Gemeenschappelijke ruimtes: Reiniging van lobby's, gangen, eetruimtes, fitnesscentra en andere gemeenschappelijke ruimtes. Gastenservice: Wij zorgen voor extra voorzieningen voor uw gasten, zoals het bijvullen van minibars en het verzorgen van specifieke verzoeken. Organisatie: We helpen bij het organiseren en opruimen van kamers en opslagruimtes. ",
      },
    },
    quote: {
      title: "Contacteer ons voor de housekeeping in uw hotel",
      text: "Met Axo Clean's housekeeping services voor hotels kunt u uw gasten een onvergetelijk en comfortabel verblijf bieden. Neem vandaag nog contact met ons op voor meer informatie, prijzen en om uw specifieke housekeeping behoeften te bespreken. Wij zijn uw partner in gastvrijheid en netheid, zodat u zich kunt concentreren op het creëren van een uitzonderlijke hotelervaring voor uw gasten. Wij zijn als housekeeping bedrijf actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPointsCards: {
      title: "Waarom u voor ons kiest",
      text: [
        "Ervaring in de industrie: Ons team van schoonmaakprofessionals heeft uitgebreide ervaring in industriële schoonmaak en begrijpt de specifieke behoeften van de sector.",
        "Veiligheid eerst: Veiligheid is een topprioriteit in industriële omgevingen. Wij volgen strikte veiligheidsprotocollen en zorgen ervoor dat onze schoonmaakactiviteiten de veiligheid van uw personeel niet in gevaar brengen.",
        "Gespecialiseerde apparatuur: We beschikken over gespecialiseerde apparatuur en reinigingsmiddelen die geschikt zijn voor industriële omgevingen, inclusief het verwijderen van hardnekkige vervuilingen.",
        "Flexibiliteit: We begrijpen dat de behoeften van industriële faciliteiten kunnen variëren. We passen onze diensten aan op basis van uw specifieke vereisten en schema.",
      ],
    },
    info: {
      firstSection: {
        title: "Waarom u voor ons kiest ",
        text: "Ervaring in de industrie: Ons team van schoonmaakprofessionals heeft uitgebreide ervaring in industriële schoonmaak en begrijpt de specifieke behoeften van de sector. Veiligheid eerst: Veiligheid is een topprioriteit in industriële omgevingen. Wij volgen strikte veiligheidsprotocollen en zorgen ervoor dat onze schoonmaakactiviteiten de veiligheid van uw personeel niet in gevaar brengen. Gespecialiseerde apparatuur: We beschikken over gespecialiseerde apparatuur en reinigingsmiddelen die geschikt zijn voor industriële omgevingen, inclusief het verwijderen van hardnekkige vervuilingen. Flexibiliteit: We begrijpen dat de behoeften van industriële faciliteiten kunnen variëren. We passen onze diensten aan op basis van uw specifieke vereisten en schema.",
      },
      secondSection: {
        title: "Mogelijkheden in industriële schoonmaak ",
        text: "Algemene reiniging: Grondige reiniging van vloeren, muren, plafonds, en andere oppervlakken om stof, vuil en vuil te verwijderen. Machinereiniging: Schoonmaak en onderhoud van industriële machines en apparatuur om optimale prestaties te garanderen. Sanitatie en desinfectie: Desinfectie van oppervlakken om te voldoen aan gezondheids- en veiligheidsnormen. Afvalverwijdering: Beheer van afvalstoffen, inclusief gevaarlijk afval, volgens de geldende voorschriften. Hoge Reiniging: Reiniging van moeilijk bereikbare gebieden, zoals hoge plafonds, leidingen en ventilatiekanalen. ",
      },
    },
    quote: {
      title: "Offerte industriële reiniging",
      text: "Met Axo Clean's industriële schoonmaakdiensten kunt u vertrouwen op een schone, veilige en efficiënte werkomgeving. Neem vandaag nog contact met ons op voor meer informatie, prijzen en om uw specifieke industriële schoonmaakbehoeften te bespreken. Wij zijn er om uw industriële faciliteit in topconditie te houden, zodat u zich kunt concentreren op uw kernactiviteiten.  Wij zijn als industriële schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPointsCards: {
      title: "Waarom u voor ons kiest",
      text: [
        "Expertise: Renovatiewerkzaamheden kunnen stof, bouwresten en vuil achterlaten op plaatsen die moeilijk te bereiken zijn. Ons team van schoonmaakprofessionals heeft gespecialiseerde expertise en ervaring in het omgaan met deze uitdagingen.",
        "Grondige reiniging: Wij voeren een grondige reiniging uit van alle oppervlakken, inclusief het verwijderen van bouwstof, verfresten, lijmresten en andere vervuilingen.",
        "Veiligheid en gezondheid: Het is van het grootste belang dat uw renovatieproject veilig en gezond is. Onze schoonmaakdiensten omvatten desinfectie en sanitatie om ervoor te zorgen dat uw ruimte klaar is voor gebruik.",
        "Tijd- en kostenbesparing: Onze efficiënte en professionele aanpak bespaart u tijd en kosten in vergelijking met zelf proberen te reinigen na renovatie.",
      ],
    },
    info: {
      firstSection: {
        title: "Schoonmaak na renovatie",
        text: "Bij Axo Clean begrijpen we dat renovatiewerkzaamheden uw ruimte kunnen transformeren, maar ook een aanzienlijke hoeveelheid stof, vuil en rommel achterlaten. Onze schoonmaakdiensten na renovatie zijn ontworpen om de oorspronkelijke pracht van uw vernieuwde ruimte te herstellen. Of het nu gaat om een huis, kantoor, commerciële locatie of een ander type pand, wij staan klaar om uw ruimte weer in topconditie te brengen. ",
      },
      secondSection: {
        title: "Waarom u voor ons kiest",
        text: "Expertise: Renovatiewerkzaamheden kunnen stof, bouwresten en vuil achterlaten op plaatsen die moeilijk te bereiken zijn. Ons team van schoonmaakprofessionals heeft gespecialiseerde expertise en ervaring in het omgaan met deze uitdagingen. Grondige reiniging: Wij voeren een grondige reiniging uit van alle oppervlakken, inclusief het verwijderen van bouwstof, verfresten, lijmresten en andere vervuilingen. Veiligheid en gezondheid: Het is van het grootste belang dat uw gerenoveerde ruimte veilig en gezond is. Onze schoonmaakdiensten omvatten desinfectie en sanitatie om ervoor te zorgen dat uw ruimte klaar is voor gebruik. Tijd- en kostenbesparing: Onze efficiënte en professionele aanpak bespaart u tijd en kosten in vergelijking met zelf proberen te reinigen na renovatie. ",
      },
      thirdSection: {
        title: "Mogelijkheden ",
        text: "Verwijdering van bouwafval: Wij verwijderen bouwresten, verpakkingsmateriaal en andere rommel die is achtergelaten na renovatie. Stofverwijdering: Grondige stofverwijdering van alle oppervlakken, inclusief muren, plafonds, vloeren, en meubilair. Vloerreiniging: Schoonmaak en onderhoud van vloeren, inclusief tapijten, tegels, houten vloeren en meer. Raamreiniging: Reiniging van ramen, raamkozijnen en glazen deuren voor een helder uitzicht. Sanitatie en desinfectie: Desinfectie van oppervlakken om te zorgen voor een veilige en gezonde omgeving.",
      },
    },
    quote: {
      title: "Contacteer Ons voor een Verfrissend Nieuwe Start ",
      text: "Met Axo Clean's schoonmaakdiensten na renovatie kunt u genieten van een frisse start in uw vernieuwde ruimte. Neem vandaag nog contact met ons op voor meer informatie, prijzen en om uw specifieke behoeften te bespreken. Wij zijn er om uw vernieuwde ruimte te herstellen naar zijn oorspronkelijke pracht, klaar om te worden benut voor uw doeleinden.  Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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
    bulletPointsCards: {
      title: "Waarom kiezen onze schoonmaakdiensten na evenementen? ",
      text: [
        "Ervaring en expertise: Ons team heeft ruime ervaring in het schoonmaken van locaties na festivals en evenementen. We begrijpen de unieke uitdagingen die gepaard gaan met deze taak.",
        "Efficiënte opruiming: We zorgen voor een snelle en efficiënte opruiming om de locatie zo snel mogelijk weer beschikbaar te maken voor andere activiteiten.",
        "Milieubewustzijn: We streven naar milieuvriendelijke schoonmaakmethoden en recyclage, zodat we samen kunnen bijdragen aan een duurzamere toekomst.",
        "Flexibiliteit: Of het nu gaat om een kleinschalig lokaal festival of een grootstedelijk evenement, we passen onze diensten aan op basis van uw specifieke behoeften en de omvang van het evenement. ",
      ],
    },
    info: {
      firstSection: {
        title: "Schoonmaak na festivals en evenementen ",
        text: "Festivals en evenementen zijn een geweldige manier om te genieten van muziek, cultuur en vermaak. Maar na het feesten en de festiviteiten is het net zo belangrijk om de locatie weer in zijn oorspronkelijke staat te herstellen. Onze schoonmaakdiensten na festivals en evenementen zijn ontworpen om u te helpen bij een grondige en efficiënte opruiming, zodat u zich geen zorgen hoeft te maken over de nawerkingen van uw evenement. ",
      },
      secondSection: {
        title: "Waarom kiezen onze schoonmaakdiensten na evenementen? ",
        text: "Ervaring en expertise: Ons team heeft ruime ervaring in het schoonmaken van locaties na festivals en evenementen. We begrijpen de unieke uitdagingen die gepaard gaan met deze taak. Efficiënte opruiming: We zorgen voor een snelle en efficiënte opruiming om de locatie zo snel mogelijk weer beschikbaar te maken voor andere activiteiten. Milieubewustzijn: We streven naar milieuvriendelijke schoonmaakmethoden en recyclage, zodat we samen kunnen bijdragen aan een duurzamere toekomst. Flexibiliteit: Of het nu gaat om een kleinschalig lokaal festival of een grootstedelijk evenement, we passen onze diensten aan op basis van uw specifieke behoeften en de omvang van het evenement. ",
      },
      thirdSection: {
        title: "Mogelijkheden ",
        text: "Verwijdering van afval en rommel: Wij verwijderen afval, lege bekers, verpakkingen en andere rommel die na het evenement is achtergebleven. Grondige reiniging van Terrein: Schoonmaak van de festival- of evenementenlocatie, inclusief de podia, stands, sanitaire voorzieningen, en parkeerplaatsen. Vloerreiniging: Opruimen en schoonmaken van vloeren, zowel binnen als buiten, om de locatie weer veilig en toegankelijk te maken. Herstel van groenvoorzieningen: Als er groenvoorzieningen zijn beschadigd tijdens het evenement, zorgen we voor herstel en herbeplanting. ",
      },
    },
    quote: {
      title: "Offerte schoonmaak na festivals en events",
      text: "Met Axo Clean's schoonmaakdiensten na festivals en evenementen kunt u erop vertrouwen dat de locatie snel en grondig wordt opgeruimd. Neem vandaag nog contact met ons op voor meer informatie, prijzen en om uw specifieke behoeften te bespreken. Wij zijn er om uw evenementlocatie weer in topconditie te brengen, klaar voor toekomstige festiviteiten en activiteiten.  Wij zijn als schoonmaakfirma actief in heel Vlaanderen: regio Gent (Aalter, Nevele, Nazareth, Wetteren, Lochristi, …), regio Anwerpen (Brasschaat, Schoten, Wijnegem, Boechout, Lier, Aarstelaar, Boom, Bornem, Temse, …) en regio Hasselt (Lummen, Zonhoven, Genk, Zutendaal, Diepenbeek)",
    },
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

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      // offset: 100, // offset (in px) from the original trigger point
      // easing: "ease-in-out",
    });
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
    <div className="overflow-x-hidden">
      <div data-aos="fade-in" data-aos-delay="100">
        <Hero />
      </div>

      <div className="px-[10%] mx-auto  py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex-1 md:pr-8"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {service.title}
            </h2>
            {/* Image Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="flex-1 mt-12 md:mt-0 mb-8"
            >
              <img
                src={cleaningImage}
                alt="Professional cleaning service"
                className="w-full h-[500px] rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed xl:w-[80%] text-xl">
              {service.servicePageText}
            </p>

            {/* Features Grid */}

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {service.bulletPoints && (
        <div className="py-16 md:py-24 bg-white">
          <div className="pl-[10%] mx-auto flex flex-col md:flex-row items-stretch gap-12 min-h-[500px]">
            <div data-aos="fade-right" data-aos-delay="100" className="flex-1">
              <h2 className="text-4xl font-bold text-gray-800 mb-12">
                {service.bulletPoints.title}
              </h2>
              <div className="space-y-6">
                {service.bulletPoints.text.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 rounded-lg p-4 hover:bg-orange-100 transition-all"
                  >
                    <div className="bg-orange-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="flex-1 hidden md:block"
            >
              <div className="h-full w-full">
                <img
                  src={cleaningImage}
                  alt="Professional cleaning service"
                  className="h-full w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {service.bulletPointsCards && (
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="px-[10%] mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              {service.bulletPointsCards.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.bulletPointsCards.text.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-orange-500 mb-6"></div>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <img
          src={bgImage}
          alt=""
          className="h-screen lg:h-[500px] brightness-75 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-[10%]">
          <h1 className="text-3xl font-bold text-white mb-4">
            {service.quote.title}
          </h1>
          <h1 className="text-xl font-semibold text-white mb-4 text-center">
            {service.quote.text}
          </h1>
          <div className="flex gap-4 justify-between">
            <Link to="/contact">
              <Gradient_Btn
                text="Contact"
                onClick={() => navigate("/contact")}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
