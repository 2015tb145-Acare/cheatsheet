import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Facile à utiliser",
    Svg: require("@site/static/img/code.svg").default,
    description: (
      <>
        Regrouper une base documentaire pour faciliter l'apprentissage du
        développement web.
      </>
    ),
  },
  {
    title: "Concentrez vous sur ce qui compte",
    Svg: require("@site/static/img/network-people.svg").default,
    description: <>Mutualisation de connaissance et d'outils.</>,
  },
  {
    title: "Propulsé par Docusaurus",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Docusaurus a été conçu dès le départ pour être facilement installé et
        utilisé pour rendre votre site Web opérationnel rapidement.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
