import * as React from "react";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";

export default function IndexPage() {
  return (
    <main>
      <Header />
      <h2>Work Experience</h2>
      <WorkExperience />

      <h2>Education</h2>
      <h3>Degree: System Analysis and Development</h3>
      <h4>Institution: Faculdade de Tecnologia de Sorocaba</h4>
      <p>Graduated August 2018</p>
    </main>
  );
}
