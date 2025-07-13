import { GetStaticProps } from 'next';
import WellnessClinicPage from '@/src/pages/WellnessClinic';

export default function WellnessClinic() {
  return <WellnessClinicPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};