import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br></br>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I am Suman Timsina. I am programmer and I have skills of NodeJS,
        Express, MongoDB
      </SectionText>
      <Button onClick={() => (window.location = "https://linkedin.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
