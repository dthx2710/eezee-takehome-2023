import Layout from "@/components/layout/layout";
import Banner from "@/components/home/banner";
import FeaturedBrands from "@/components/home/featured-brands";
import OurProducts from "@/components/home/our-products";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <FeaturedBrands />
        <OurProducts />
      </Layout>
    </>
  );
};

export default Home;

