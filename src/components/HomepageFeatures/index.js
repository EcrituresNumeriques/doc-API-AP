import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Presentation',
    Svg: require('@site/static/img/image-doc-API-AP.svg').default,
    description: (
      <>
        “Pour une édition numérique collaborative de l’Anthologie grecque” is a project of the Canada Research Chair on Digital Textualities directed by Marcello Vitali-Rosati in collaboration with Elsa Bouchard and Christian Raschle. 
        You can visit the <a href="https://anthologiagraeca.org/">research project webpage</a> for more information.
        <br />
        This documentation provides you with a set of examples to help you access the research project data.
        <br />
        We will continue to evolve this documentation as we develop the project.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('row')}>
      <div className={clsx('col col--6')}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={clsx('col col--6')}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
