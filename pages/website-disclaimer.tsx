import { GetStaticProps } from 'next';
import WebsiteDisclaimerPage from '@/src/pages/WebsiteDisclaimer';

export default function WebsiteDisclaimer() {
  return <WebsiteDisclaimerPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};