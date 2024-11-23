const JobSeekers = () => {
  return (
    <section id="job-seekers" className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">For Job Seekers</h2>
        <p className="section-subtitle text-center">
          Everything you need to find your dream job
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-surface-secondary p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
            <p className="text-secondary-light">
              Build your professional profile and let employers find you.
            </p>
          </div>
          <div className="bg-surface-secondary p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Job Alerts</h3>
            <p className="text-secondary-light">
              Get notified when new jobs match your preferences.
            </p>
          </div>
          <div className="bg-surface-secondary p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Career Resources</h3>
            <p className="text-secondary-light">
              Access guides, tips, and tools to advance your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekers;