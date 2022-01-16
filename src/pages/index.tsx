import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css'

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Chin/ 
          <span className={styles.alias}>
            JS developer, Reader, Dog feeder
          </span>
        </h1>
        <p className={styles.content}>
          浪漫現實主義者<br />
          因為目標過於理想所以浪漫，卻能夠一步一步的往前邁進而現實
        </p>
      </main>
    </Layout>
  );
}
