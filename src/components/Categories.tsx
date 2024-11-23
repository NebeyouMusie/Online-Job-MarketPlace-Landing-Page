import { BarChart2, Building2, HeadphonesIcon, TrendingUp, Stethoscope, Users } from "lucide-react";

const categories = [
  {
    icon: BarChart2,
    title: "Business Development",
    positions: "2 open positions",
  },
  {
    icon: Building2,
    title: "Construction",
    positions: "3 open positions",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Service",
    positions: "1 open positions",
  },
  {
    icon: TrendingUp,
    title: "Finance",
    positions: "4 open positions",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    positions: "5 open positions",
  },
  {
    icon: Users,
    title: "Human Resources",
    positions: "2 open positions",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Search by Category</h2>
        <p className="section-subtitle text-center">
          Search your career opportunity with our categories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-surface-secondary p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-light rounded-lg group-hover:bg-primary transition-colors">
                  <category.icon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p className="text-secondary-light">{category.positions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-primary inline-block">
            All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;