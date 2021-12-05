import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Nigel Marshal - Frontend Engineer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection
          sectionId="skills"
          heading="Programming Languages & Tools"
        />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
