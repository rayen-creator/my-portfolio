import { FaSymfony, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiFlutter,
  SiExpress,
  SiMongodb,
  SiAngular,
  SiSpring,
  SiGraphql,
  SiFlask,
} from "react-icons/si";
import placeholder from "../../../public/design.png";
import farmsanctuary from "../../../public/farm-sanctuary.png";
import farmsanctuarydelivery from "../../../public/farm-sanctuary-delivery.png";
import sahti from "../../../public/SAHTI_without_bg.png";
import Card from "../../components/cards";
import Title from "../../components/title";
import Reveal from "@/components/reveal";
export default function Projects() {
  return (
    <section id="Projects" className="my-1">
    <div>
        <Reveal>
          <Title title={"Projects"} />
        </Reveal>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">
        <Reveal>
          <Card
            githublink={"https://github.com/rayen-creator/farm_sanctuary"}
            image={farmsanctuary}
            title={"Farm sanctuary "}
            description="sustainable farming web application that aims to provide farmers with a platform to adopt sustainable farming practices."
            stack={[
              <SiAngular key="angular-icon" className="hover:text-red-500" />,
              <SiGraphql key="graphql-icon" className="hover:text-pink-400" />,
              <SiExpress key="express-icon" className="hover:text-black" />,
              <SiFlask key="flask-icon" className="hover:text-black" />,
              <SiMongodb key="mongodb-icon" className="hover:text-green-400" />,
            ]}
          />
        </Reveal>

        <Reveal>
          <Card
            githublink={
              "https://github.com/rayen-creator/farm_sanctuary_delivery"
            }
            image={farmsanctuarydelivery}
            title={"Delivery app"}
            description="FarmSanctuaryDelivery purpose-built application designed
        specifically for delivery agents operating within the farm
        sanctuary."
            stack={[
              <SiFlutter className="hover:text-cyan-500" />,
              <SiGraphql key="graphql-icon" className="hover:text-pink-400" />,
              <SiExpress key="express-icon" className="hover:text-black" />,
              <SiFlask key="flask-icon" className="hover:text-black" />,
              <SiMongodb key="mongodb-icon" className="hover:text-green-400" />,
            ]}
          />
        </Reveal>

        <Reveal>
          <Card
            githublink={"https://github.com/rayen-creator/farm_sanctuary"}
            image={sahti}
            title={"Sahti"}
            description="Sahti is a cross platform fitness app that offer online coaching, shop and nutritionist services."
            stack={[
              <FaSymfony className="hover:text-black" />,
              <FaJava className="hover:text-blue-400" />,
              <GrMysql className="hover:text-blue-600" />,
            ]}
          />
        </Reveal>

        <Reveal>
          <Card
            githublink={"https://github.com/rayen-creator/Kadem-web-app"}
            image={placeholder}
            title={"Kadem"}
            description="Kadem is an academic project build for student to help them explore
        professtionnel life finding new oppurtunty as intern or as employee
        as well."
            stack={[
              <SiAngular className="hover:text-red-500" />,

              <SiExpress className="hover:text-black" />,

              <SiSpring className="hover:text-green-600" />,

              <GrMysql className="hover:text-green-400" />,
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
