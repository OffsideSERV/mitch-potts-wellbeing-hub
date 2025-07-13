import { GetStaticProps } from 'next';
import WhatWeTreatPage from '@/src/pages/WhatWeTreat';

export default function WhatWeTreat() {
  return <WhatWeTreatPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};