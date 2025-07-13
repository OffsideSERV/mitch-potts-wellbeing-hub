import { GetStaticProps } from 'next';
import CancellationPolicyPage from '@/src/pages/CancellationPolicy';

export default function CancellationPolicy() {
  return <CancellationPolicyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};