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
      <Seo title="Nigel Marshal - Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection
          sectionId="skills"
          heading="Programming Languages & Tools"
        />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
