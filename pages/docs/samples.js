import Layout from '@components/Layout';
import DocsLayout from '@components/DocsLayout';
import Header from '@components/Header';

export default function Samples() {
  return (
    <Layout title="Samples">
      <DocsLayout>
        <main>
          <Header title="Sending Samples" />
        </main>
      </DocsLayout>
    </Layout>
  );
}
