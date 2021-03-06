import * as React from "react";

export default function IndexPage() {
  return (
    <main>
      <h1>Lucas Nogueira Ramos</h1>
      <p>
        <a href="mailto:contact@lucasnramos.com">contact@lucasnramos.com</a> |{" "}
        <a
          href="https://www.linkedin.com/in/lucas-nogueira-ramos/?locale=en_US"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/lucasnramos"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <h2>Work Experience</h2>
      <h3>Systems Analyst - GFT Technologies</h3>
      <p>November 2019 - Present</p>
      <h4>Project: Spotify for Brands - SEA</h4>
      <p>
        Redesigned the Spotify For Brands portal for the South East Asia market,
        integrated with Contentful for multi-lingual content management.
        Implemented the contact form, integrated with Pardot; Responsive design
        based on UI provided by the client; Developed 11 of the components used
        by the application using Next.js. <b>Environment:</b> Next.js, React.js,
        SASS, Styled Components, SEO, Google Cloud Platform, Contentful, Pardot,
        Responsive design
      </p>
      <p>
        Project: Process Twins - Google An online Digital Twin application with
        Drag and Drop capabilities and a 3D canvas to design the processes. The
        user can setup parameters, alerts and outputs and simulate a
        manufacturing run. The application also provides reporting and
        comparison for the finished simulations. Developed Google Authentication
        using Firebase and Google Platform ID; Developed integration with the
        Java API; Component and library based design. <b>Environment:</b> Nrwl's
        NX, Angular, Material Design, Boostrap, SASS, Firebase, Google Cloud
        Platform, Java, Maven, mxGraph.
      </p>
      <h3>Web & Mobile Developer - Coach IT</h3>
      <p>July 2018 - November 2019</p>
      <h4>Managerial and Software Management</h4>
      <p>
        Mentored other junior web developers; - Implemented git workflow for all
        non-SAP project in the Software Factory;
      </p>
      <h4>Project: NextMobile</h4>
      <p>
        A hybrid mobile (iOS and Android) and PWA solution integrated with
        backoffice SAP ERP, supporting approval and requests of purchase orders,
        invoices, travel expenses, and other finance processes. Developed &
        maintained the hybrid mobile and PWA solution; Built and implemented a
        serverless REST API with Nodejs; Developed the integration with
        third-party API through RxJS and Observable (Reactive programming).
        <b>Environment:</b> Ionic, Cordova, Angular, Firebase, Google Cloud
        Platform, Nodejs, Express, REST API
      </p>
      <h4>Project: Transfer Price and CAT42</h4>
      <p>
        Online solution built for calculating the best transfer price and CAT42
        (Brazilian tax return for companies) for companies across the Brazilian
        market. Developed the UI/UX for the application using Razor template
        engine and jQuery with responsive design (mobile first).
        <b>Environment:</b> .NET Core, C#, SQL Server, Razor, jQuery, SASS,
        Bootstrap, Gulp;
      </p>
      <h4>Project: "Work with Us" section of the website</h4>
      <p>
        ATS system built for easier management for candidates resumes and
        screening by management. Developed and maintained the project's
        application using MVC pattern; Hosted and managed using LAMP stack;
        Front-end application using the Blade templete engine and jQuery.
        <b>Environment:</b> PHP, Laravel, Blade, jQuery, SASS, Bootstrap, LAMP,
        Composer, MySQL, MVC.
      </p>
      <h3>Web developer - Freelance</h3>
      <p>October 2015 - July 2018</p>
      <p>
        As a freelance developer, I've built websites to help small businesses
        expand online and increase sales. I've also helped to promote their
        sites on social media to engage customers and provided SEO services
        which to improve their position on sites like Google, Bing, Yahoo!
      </p>
      <h2>Education</h2>
      <h3>Degree: System Analysis and Development</h3>
      <h4>Institution: Faculdade de Tecnologia de Sorocaba</h4>
    </main>
  );
}
