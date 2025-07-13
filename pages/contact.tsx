import { GetStaticProps } from 'next';
import ContactPage from '@/src/pages/Contact';

export default function Contact() {
  return <ContactPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};