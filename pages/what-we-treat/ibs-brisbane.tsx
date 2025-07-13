import { GetStaticProps } from 'next';
import IBSTreatmentBrisbanePage from '@/src/pages/IBSTreatmentBrisbane';

export default function IBSTreatmentBrisbane() {
  return <IBSTreatmentBrisbanePage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};