import React from 'react';

const About = () => {
  return (
    <div className="bg-[#0d1117] text-gray-200 min-h-screen px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">About CodeFund</h1>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          CodeFund is a modern crowdfunding platform tailored for developers. Whether you're building open-source tools, launching new SaaS products, or sharing technical tutorials, CodeFund lets you receive direct support from fellow devs and users who appreciate your work.
        </p>

        <SectionTitle title="How It Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {[
            {
              title: "Developer-Driven Support",
              img: "/group.gif",
              desc: "Enable fellow developers and users to back your innovations and projects."
            },
            {
              title: "Frictionless Payments",
              img: "/coin.gif",
              desc: "Receive contributions directly and securely with minimal setup."
            }
          ].map(({ title, img, desc }) => (
            <FeatureCard key={title} title={title} img={img} desc={desc} />
          ))}
        </div>

        {sections.map(({ title, items }) => (
          <BenefitSection key={title} title={title} items={items} />
        ))}
      </div>
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-semibold text-white mb-8 text-center border-b border-gray-700 pb-2">{title}</h2>
);

const FeatureCard = ({ title, img, desc }) => (
  <div className="bg-[#161b22] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
    <img src={img} alt={title} className="w-20 h-20 mb-4 rounded-lg" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

const BenefitSection = ({ title, items }) => {
  const half = Math.ceil(items.length / 2);
  return (
    <div className="mb-16">
      <SectionTitle title={title} />
      <div className="grid mx-auto sm:grid-cols-2 gap-10">
        <ul className="space-y-3 list-disc list-inside text-gray-300">
          {items.slice(0, half).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <ul className="space-y-3 mx-auto list-disc list-inside text-gray-300">
          {items.slice(half).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const sections = [
  {
    title: "Benefits for Developers",
    items: [
      "Monetize open-source contributions",
      "Receive community-funded support",
      "Build credibility and visibility",
      "Fund your side projects or SaaS tools",
      "Simple integration with GitHub and docs",
      "Retain full control with no platform lock-in"
    ]
  },
  {
    title: "Benefits for Supporters",
    items: [
      "Back projects you rely on",
      "Help shape the developer ecosystem",
      "Access perks or early releases",
      "Contribute to tool longevity",
      "Connect with favorite devs",
      "Fuel developer innovation"
    ]
  },
  {
    title: "Collaboration Opportunities",
    items: [
      "Partner with like-minded developers",
      "Join forces on larger builds",
      "Grow your dev brand together",
      "Share resources and infra",
      "Build sustainable tools",
      "Learn and co-create"
    ]
  },
  {
    title: "Tech Community Engagement",
    items: [
      "Host dev streams and discussions",
      "Gather meaningful feedback",
      "Run contributor programs",
      "Involve users in roadmap decisions",
      "Celebrate project milestones",
      "Launch community-driven features"
    ]
  },
  {
    title: "Developer Resources",
    items: [
      "Access best practices",
      "Get listed on discovery pages",
      "Utilize dev-focused templates",
      "Receive platform insights",
      "Access marketing assets",
      "Tap into code-focused tips"
    ]
  },
  {
    title: "Recognition & Exposure",
    items: [
      "Get featured on CodeFund home",
      "Attract job or freelance offers",
      "Be visible to a tech-focused audience",
      "Expand your GitHub followers",
      "Grow newsletter subscribers",
      "Establish credibility in dev circles"
    ]
  },
  {
    title: "Supportive Developer Ecosystem",
    items: [
      "Collaborate, not compete",
      "Contribute to open standards",
      "Mentor and be mentored",
      "Join global dev meetups",
      "Share wins and failures",
      "Thrive in a value-aligned community"
    ]
  }
];

export default About;

export const metadata = {
  title: "About - CodeFund",
};
