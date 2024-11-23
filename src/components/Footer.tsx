import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Jobster</h3>
            <p className="text-secondary-light mb-4">
              Find the perfect job for your future career. Thousands of jobs from popular companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">For Candidates</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-light hover:text-primary transition-colors">
                  Applications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-secondary-light">
              <li>New York, NY 10012</li>
              <li>info@jobster.com</li>
              <li>+1 (234) 567-8900</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-secondary-light">
            © {new Date().getFullYear()} Jobster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;