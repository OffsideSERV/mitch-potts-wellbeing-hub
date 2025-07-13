import { GetStaticProps } from 'next';
import IBSClinicPage from '@/src/pages/IBSClinic';

export default function IBSClinic() {
  return <IBSClinicPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};