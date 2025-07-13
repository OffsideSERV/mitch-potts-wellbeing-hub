import { GetStaticProps } from 'next';
import NewsteadNaturopathyPage from '@/src/pages/NewsteadNaturopathy';

export default function NewsteadNaturopathy() {
  return <NewsteadNaturopathyPage />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};