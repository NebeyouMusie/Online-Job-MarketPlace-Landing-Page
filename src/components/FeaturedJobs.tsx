import { MapPin, Clock } from "lucide-react";

const jobs = [
  {
    category: "Finance",
    title: "Financial Analyst",
    company: "Coinbase",
    location: "San Diego, CA",
    type: "Full Time",
    logo: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
  },
  {
    category: "Software Engineering",
    title: "Full Stack Web Developer",
    company: "Stripe",
    location: "San Francisco, CA",
    type: "Full Time",
    logo: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
  },
  {
    category: "Human Resources",
    title: "HR Coordinator",
    company: "Slack",
    location: "San Diego, CA",
    type: "Full Time",
    logo: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
  },
  {
    category: "Technical Writing",
    title: "Technical Writer",
    company: "Google",
    location: "Los Angeles, CA",
    type: "Remote",
    logo: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2",
  },
];

const FeaturedJobs = () => {
  return (
    <section id="jobs" className="py-16 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured Job Offers</h2>
        <p className="section-subtitle text-center">
          Search your career opportunity through 12,800 jobs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-surface p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-primary">{job.category}</span>
                  <h3 className="font-semibold text-lg mt-1">{job.title}</h3>
                </div>
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </div>

              <div className="space-y-2">
                <p className="text-secondary-light">{job.company}</p>
                <div className="flex items-center gap-2 text-secondary-light">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-light">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{job.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-primary inline-block">
            All Job Offers
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;