import RootLayout from "../layout";

const AboutPage = () => {
  return (
    <RootLayout>
      <main className="grid grid-cols-6 xl:grid-cols-12 lg:grid-cols-12  h-screen">
        <section className="col-start-1 xl:col-span-12 lg:col-span-12 col-span-6 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">Thank You for visiting my portofolio website</p>
        </section>
      </main>
    </RootLayout>
  );
};
export default AboutPage;
