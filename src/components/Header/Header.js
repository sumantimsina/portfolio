import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGitlab,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://gitlab.com/suman.timsina1997">
        <AiFillGitlab size="3rem"></AiFillGitlab>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/suman.timsina1997">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/suman.timsina1997">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
