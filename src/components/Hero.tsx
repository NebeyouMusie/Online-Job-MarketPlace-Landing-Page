import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-surface to-surface-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Find the perfect
              <br />
              job for you
            </h1>
            <p className="text-secondary-light text-lg mb-8">
              Search your career opportunity through 12,800 jobs
            </p>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Job Title or Keyword"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="All locations"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <button className="btn-primary flex items-center justify-center gap-2">
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-secondary-light mb-4">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {["Designer", "Writer", "Team leader", "Full stack", "Web developer"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
                alt="Professional"
                className="rounded-2xl object-cover h-[600px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;