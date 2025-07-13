import { GetStaticProps } from 'next';
import AllergyNaturopathPage from '@/src/pages/AllergyNaturopath';

export default function AllergyNaturopath() {
  return <AllergyNaturopathPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};