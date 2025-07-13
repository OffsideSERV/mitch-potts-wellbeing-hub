import { GetStaticProps } from 'next';
import OzempicNaturalWeightLossPage from '@/src/pages/OzempicNaturalWeightLoss';

export default function OzempicNaturalWeightLoss() {
  return <OzempicNaturalWeightLossPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};