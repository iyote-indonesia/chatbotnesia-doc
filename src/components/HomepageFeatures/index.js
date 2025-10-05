import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah untuk digunakan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pelajari dan gunakan fitur-fitur yang ada untuk membantu bisnis kamu lebih sat set sat set.
      </>
    ),
  },
  {
    title: 'Integrasi Aplikasi',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Bisa Integrasi ke aplikasi kamu dengan menggunakan API yang kami sediakan.
      </>
    ),
  },
  {
    title: 'Hubungi Kami',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Ada yang belum di mengerti atau ada kebutuhan khusus untuk bisnis kamu? jangan malu-malu untuk menghubungi kami
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
