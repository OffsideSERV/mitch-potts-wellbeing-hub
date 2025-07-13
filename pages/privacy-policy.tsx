import { GetStaticProps } from 'next';
import PrivacyPolicyPage from '@/src/pages/PrivacyPolicy';

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};