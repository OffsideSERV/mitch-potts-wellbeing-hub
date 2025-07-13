import { GetStaticProps } from 'next';
import ServicesPage from '@/src/pages/Services';

export default function Services() {
  return <ServicesPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};