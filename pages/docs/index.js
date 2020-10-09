import Layout from '@components/Layout';
import DocsLayout from '@components/DocsLayout';
import Header from '@components/Header';

export default function Docs() {
  return (
    <Layout title="Get started">
      <DocsLayout>
        <main>
          <Header title="Getting Started" />
        </main>
      </DocsLayout>
    </Layout>
  );
}
