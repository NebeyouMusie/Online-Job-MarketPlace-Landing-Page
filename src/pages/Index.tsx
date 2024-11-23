import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedJobs from "@/components/FeaturedJobs";
import JobSeekers from "@/components/JobSeekers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedJobs />
      <JobSeekers />
      <Footer />
    </div>
  );
};

export default Index;