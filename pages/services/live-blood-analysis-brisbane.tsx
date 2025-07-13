import { GetStaticProps } from 'next';
import LiveBloodAnalysisBrisbanePage from '@/src/pages/LiveBloodAnalysisBrisbane';

export default function LiveBloodAnalysisBrisbane() {
  return <LiveBloodAnalysisBrisbanePage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};