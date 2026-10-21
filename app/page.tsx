"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Menu,
  MousePointerClick,
  Phone,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { SiGoogleads, SiMeta } from "react-icons/si";

function GoogleAdsLogo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -13 256 256"
      role="img"
      aria-label="Google Ads logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.888 166.405 90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23Z"
        fill="#FBBC04"
      />
      <path
        d="m250.084 166.402-84.992-145.496c-11.882-19.774-37.473-26.96-58.492-15.28C85.582 17.304 79.182 42.462 91.064 63.12l84.992 145.514c11.882 19.765 37.473 26.951 58.492 15.272 20.1-11.679 27.418-37.73 15.536-57.486Z"
        fill="#4285F4"
      />
      <ellipse cx="42.664" cy="187.924" rx="42.664" ry="41.604" fill="#34A853" />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Google Ads",
    description:
      "Monitor CPC, CPL, conversion rates and ROAS to evaluate search campaign performance.",
    icon: SiGoogleads,
    iconColor: "#34a853",
  },
  {
    number: "02",
    title: "Meta Ads",
    description:
      "Track CPM, CTR, CPL and lead quality across Facebook and Instagram campaigns.",
    icon: SiMeta,
    iconColor: "#0866ff",
  },
  {
    number: "03",
    title: "Landing Pages & Websites",
    description:
      "Measure landing page conversion rates and identify areas where visitors drop off before enquiring.",
    icon: Globe2,
    iconColor: "#007fc3",
  },
  {
    number: "04",
    title: "Campaign Optimisation",
    description:
      "Analyse CPC, CPL, CPQL and ROAS to refine targeting, ad creatives and budget allocation.",
    icon: BarChart3,
    iconColor: "#007fc3",
  },
  {
    number: "05",
    title: "CRM & Lead Tracking",
    description:
      "Track lead-to-customer conversion rates, follow-ups and customer acquisition cost (CAC) to understand which campaigns generate business opportunities.",
    icon: Workflow,
    iconColor: "#007fc3",
  },
];

const problems = [
  {
    problem:
      "Leads don't convert into customers. Enquiries increase, but paid enrolments, approved applications or property bookings remain low.",
    solution:
      "Optimise for conversions, not lead volume. Track customer progression and identify where qualified prospects drop off.",
  },
  {
    problem:
      "Customer acquisition costs keep rising. Marketing spend increases without a proportional improvement in sales.",
    solution:
      "Improve acquisition efficiency. Analyse CAC, CPQL and ROAS to identify where budget reallocation can improve results.",
  },
  {
    problem:
      "Website traffic isn't generating enough enquiries. Visitors leave without booking appointments, applying or requesting a site visit.",
    solution:
      "Improve conversion rates. Identify landing page drop-offs and test changes based on visitor behaviour and conversion data.",
  },
  {
    problem:
      "Marketing reports don't show business outcomes. Clicks and impressions look good, but revenue contribution remains unclear.",
    solution:
      "Connect campaigns to sales data. Track leads through CRM stages to measure qualified conversions and customer acquisition costs.",
  },
];

const testimonials = [
  {
    quote: "These folks bring the creativity and flair that'll make your brand stand out!",
    name: "Chethan Shetty",
    profile: "https://www.google.com/maps/contrib/113707847174573393159?hl=en-IN&ved=1t:31296&ictx=111",
  },
  {
    quote: "Great service, they make excellent marketing strategies to bring in crowd.",
    name: "Hoturu Tejaswini",
    profile: "https://www.google.com/maps/contrib/117620084474625489281?hl=en-IN&ved=1t:31296&ictx=111",
  },
  {
    quote: "PandaECE provided exceptional branding solutions for our small business.",
    name: "Nikitha Harish",
    profile: "https://www.google.com/maps/contrib/106704972467446927399?hl=en-IN&ved=1t:31296&ictx=111",
  },
  {
    quote: "PandaECE's ERP and CRM solutions are exceptional! They developed both our website and mobile application, seamlessly integrating everything we needed. Their expertise transformed our business operations and boosted efficiency. The team is professional, innovative, and great to work with. Highly recommend PandaECE for top-notch ERP and CRM development solutions!",
    name: "Kavipriya Paramasivam",
    profile: "https://www.google.com/maps/contrib/118054859320894887552/reviews?hl=en-GB",
  },
  {
    quote: "Panda eCe stands out for its client-centric approach, closely monitoring every aspect of operations while maintaining exceptional communication. From website development to analytics tools, it covers all aspects of online retail. With Panda eCe Small & Medium size entreprises can streamline operations and drive growth with affordable price. Highly recommended for online success.",
    name: "Manasa Reddy",
    profile: "https://www.google.com/maps/contrib/114994303569416471974/reviews?hl=en-GB",
  },
  {
    quote: "I thank the panda team for the wonderful experience. Got a great deal of help. Every thing was so neatly structured and very neatly explained. It was like having a Genie who did all my work effortlessly. Would be delighted to take services again. And definitely strongly recommend to my all my associates and friends.",
    name: "Arshiya Ambreen",
    profile: "https://www.google.com/maps/contrib/111376084080812172961/reviews?hl=en-GB",
  },
];

const faqs = [
  {
    question:
      "Which performance marketing metrics should my business track?",
    answer:
      "Track CPQL, conversion rate, CAC and ROAS based on your sales funnel and business objectives. These metrics help you evaluate lead quality, acquisition costs and campaign returns.",
  },
  {
    question:
      "How much does acquiring a new customer cost my business?",
    answer:
      "Customer acquisition cost includes the sales and marketing expenses associated with gaining new customers, based on the costs included in your calculation. Understanding this figure alongside customer lifetime value helps you assess how sustainably your business can grow.",
  },
  {
    question:
      "What performance marketing services does PANDAeCe provide?",
    answer:
      "PANDAeCe offers Google Ads, Meta Ads, landing pages, campaign optimisation, CRM integration and lead tracking to help businesses connect advertising performance with sales outcomes.",
  },
  {
    question:
      "How can performance marketing help reduce customer acquisition costs?",
    answer:
      "By analysing lead quality, conversion rates and campaign costs, businesses can identify inefficient spending and prioritise campaigns that acquire customers more efficiently. Results depend on competition, pricing, offer quality and sales follow-up.",
  },
  {
    question: "Can performance marketing help my business scale?",
    answer:
      "Yes. Performance marketing can help identify repeatable customer acquisition opportunities. Sustainable scaling depends on conversion economics, market demand, sales capacity and the ability to maintain lead quality as spending increases.",
  },
  {
    question:
      "How can I grow my business without continuously increasing my marketing budget?",
    answer:
      "Improve the conversion of existing enquiries, reduce customer drop-offs, strengthen follow-up and increase repeat purchases where relevant. Growth can come from improving the value of your existing pipeline, not just generating more leads.",
  },
];

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="PANDAeCe homepage">
      <span className="brand-symbol">
        <img src="/icon.png" alt="PANDAeCe logo" />
      </span>

      <span className="brand-copy">
        <span className="brand-name">
          PANDA<span>eCe</span>
        </span>
        <span className="brand-tagline">
          EMPOWER · CONVERGE · EXCEL
        </span>
      </span>
    </a>
  );
}

function ConsultationButton({
  children = "Book Now & Get 20% Off",
  className = "",
  onClick,
}: {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href="#contact-form"
      className={`button button-primary ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <span className="button-arrow">
        <ArrowUpRight size={19} />
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industry", href: "#industry" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Logo />

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ConsultationButton className="nav-cta">
          Book a Consultation
        </ConsultationButton>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-orbit orbit-three" />

      <div className="hero-image-circle">
        <img
          src="/pandaece-hero.png"
          alt="PANDAeCe performance marketing"
          className="hero-image"
        />
      </div>

      <div className="floating-card floating-card-top">
        <span className="floating-icon floating-brand-icons">
          <GoogleAdsLogo size={27} />
        </span>
        <span className="floating-copy">
          <small>CAMPAIGN PERFORMANCE</small>
          <strong>Google & Meta Ads</strong>
        </span>
        <span className="status-dot" />
      </div>

      <div className="floating-card floating-card-bottom">
        <span className="floating-icon purple-icon">
          <BarChart3 size={21} />
        </span>
        <span className="floating-copy">
          <small>MEASURE WHAT MATTERS</small>
          <strong>CPQL · CAC · ROAS</strong>
        </span>
        <span className="status-dot" />
      </div>

      <div className="visual-caption">
        <span>Strategy</span>
        <i />
        <span>Tracking</span>
        <i />
        <span>Performance</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-background" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="live-dot" />
            Performance Marketing Agency for Business Growth
          </p>

          <h1>
            Result driven,
            <br />
            CPQL focused
            <br />
            <span className="accent-text">
              Performance marketing services
            </span>
          </h1>

          <p className="hero-description">
            PANDAeCe helps businesses improve campaign performance
            through targeted Google and Meta Ads, conversion-focused
            landing pages and CRM tracking. Monitor CPQL (Cost Per
            Qualified Lead), CAC (Customer Acquisition Cost),
            conversion rate and ROAS to understand campaign efficiency
            and identify opportunities for growth.
          </p>

          <div className="hero-actions">
            <ConsultationButton />

            <a href="#services" className="button button-secondary">
              Explore Services
              <ArrowDown size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <span className="proof-icon">
              <ShieldCheck size={21} />
            </span>
            <div>
              <strong>Performance backed by clear metrics</strong>
              <span>CPQL · CAC · Conversion Rate · ROAS</span>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-heading">
            <p className="section-kicker">ABOUT PANDAeCe</p>
            <h2 className="section-title">
              Performance Marketing Company Focused on{" "}
              <span className="accent-text">
                CPL, CPQL and ROAS
              </span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              PANDAeCe combines Google Ads, Meta Ads, landing pages and
              lead tracking to help businesses monitor Customer
              Acquisition Cost (CAC), cost per qualified lead (CPQL),
              conversion rates and return on ad spend (ROAS). We use
              these metrics to identify campaign gaps and guide
              smarter marketing budget decisions.
            </p>

            <ConsultationButton>
              Talk to Our Team
            </ConsultationButton>
          </div>
        </div>

        <div className="stats-grid">
          <article className="stat-card">
            <span className="stat-icon">
              <Users size={22} />
            </span>
            <strong>30 Years</strong>
            <span>Combined Team Experience</span>
          </article>

          <article className="stat-card">
            <span className="stat-icon">
              <BarChart3 size={22} />
            </span>
            <strong>1,300+</strong>
            <span>Projects</span>
          </article>

          <article className="stat-card">
            <span className="stat-icon">
              <CheckCircle2 size={22} />
            </span>
            <strong>400+</strong>
            <span>Clients</span>
          </article>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">OUR SERVICES</p>
          <h2 className="section-title">
            Performance Marketing Services to{" "}
            <span className="accent-text">
              Grow Your Business Revenue
            </span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-icon">
                    {service.number === "01" ? (
                      <GoogleAdsLogo size={27} />
                    ) : (
                      <Icon size={24} color={service.iconColor} />
                    )}
                  </span>
                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  Discuss this service
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryProblems() {
  return (
    <section className="section industry-section" id="industry">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">THE PERFORMANCE GAP</p>
          <h2 className="section-title">
            Marketing Problems Facing{" "}
            <span className="accent-text">Your Industry</span>
          </h2>
          <p className="section-description">
            Understand what's holding back your marketing and the
            performance-focused solutions that can help.
          </p>
        </div>

        <div className="problem-table-wrap">
          <table className="problem-table">
            <thead>
              <tr>
                <th>Problem</th>
                <th>Performance Marketing Solution</th>
              </tr>
            </thead>

            <tbody>
              {problems.map((item, index) => (
                <tr key={item.problem}>
                  <td>
                    <div className="problem-cell">
                      <span className="table-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{item.problem}</p>
                    </div>
                  </td>

                  <td>
                    <div className="solution-cell">
                      <span className="solution-icon">
                        <CheckCircle2 size={19} />
                      </span>
                      <p>{item.solution}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function pauseForReading() {
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 15000);
  }

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">CLIENT EXPERIENCES</p>
          <h2 className="section-title">
            What Our <span className="accent-text">Clients Say</span>
          </h2>
        </div>

        <div
          className={`testimonials-grid${isPaused ? " is-paused" : ""}`}
          onTouchStart={pauseForReading}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="testimonials-track">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial.name}-${index}`} aria-hidden={index >= testimonials.length}>
              <div className="testimonial-top">
                <span className="testimonial-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
                <span className="testimonial-index">
                  {String((index % testimonials.length) + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote>{testimonial.quote}</blockquote>

              <div className="testimonial-person">
                <span className={`testimonial-avatar avatar-color-${index % testimonials.length}`}>
                  {testimonial.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                </span>

                <div>
                  <strong>
                    <a
                      href={testimonial.profile}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={index >= testimonials.length ? -1 : undefined}
                    >
                      {testimonial.name}
                    </a>
                  </strong>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="section-kicker">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="section-title">
            Questions?
            <br />
            <span className="accent-text">We've got answers.</span>
          </h2>

          <p>
            Understand performance marketing metrics, campaign
            optimisation and how PANDAeCe can help your business.
          </p>

          <a className="text-link" href="#contact">
            Talk to Our Team <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span className="faq-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-question">{faq.question}</span>

                <ChevronDown
                  size={19}
                  className="faq-chevron"
                />
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      source: "PANDAeCe Performance Marketing Landing Page",
    };

    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(result?.error || "Lead submission failed");
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your consultation request has been submitted successfully.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't submit your request. Please try again or contact our team.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="form-eyebrow">
          <span className="live-dot" />
          BOOK YOUR CONSULTATION
        </p>

        <h3>Let's discuss your growth.</h3>

        <p>
          Share your details and tell us what you want to achieve.
        </p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>
            Full Name <b>*</b>
          </span>
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
          />
        </label>

        <label className="form-field">
          <span>
            Email Address <b>*</b>
          </span>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="form-field">
          <span>
            Phone Number <b>*</b>
          </span>
          <input
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            required
          />
        </label>

        <label className="form-field">
          <span>Business Name</span>
          <input
            name="company"
            type="text"
            placeholder="Enter your business name"
            autoComplete="organization"
          />
        </label>

        <label className="form-field form-field-full">
          <span>
            Service You're Interested In <b>*</b>
          </span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option value="Google Ads">Google Ads</option>
            <option value="Meta Ads">Meta Ads</option>
            <option value="Landing Pages & Websites">
              Landing Pages & Websites
            </option>
            <option value="Campaign Optimisation">
              Campaign Optimisation
            </option>
            <option value="CRM & Lead Tracking">
              CRM & Lead Tracking
            </option>
            <option value="Multiple Services">
              Multiple Services
            </option>
          </select>
        </label>

        <label className="form-field form-field-full">
          <span>
            Tell Us About Your Marketing Goals <b>*</b>
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="What are your current challenges and goals?"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="button button-primary form-submit"
        disabled={submitting}
      >
        <span>
          {submitting
            ? "Submitting Your Request..."
            : "Book Consultation, Get 20% Off"}
        </span>

        <span className="button-arrow">
          <ArrowUpRight size={19} />
        </span>
      </button>

      {status && (
        <p
          className={`form-status ${
            status.type === "success"
              ? "form-status-success"
              : "form-status-error"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}

      <p className="form-privacy">
        <ShieldCheck size={16} />
        Share your requirements using the form. Our team will follow up.
      </p>
    </form>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div className="final-cta-content">
          <p className="section-kicker">READY TO GROW?</p>

          <h2>
            Improve Your Marketing Performance with{" "}
            <span className="accent-text">Clear Metrics</span>
          </h2>

          <p>
            Identify opportunities to improve lead quality, conversion
            rates and customer acquisition costs with PANDAeCe's
            performance marketing services.
          </p>
        </div>

        <ConsultationButton>
          Book Consultation, Get 20% Off
        </ConsultationButton>
      </div>
    </section>
  );
}

function Footer() {
  const [openPolicy, setOpenPolicy] = useState<"terms" | "privacy" | null>(null);

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <Logo />
          <p>
            PANDAeCe combines performance marketing, landing pages and
            lead tracking to help businesses make smarter marketing
            decisions.
          </p>
        </div>

        <div className="footer-column">
          <strong>GET IN TOUCH</strong>
          <p>Have a growth objective in mind? Let&apos;s connect today.</p>
          <a href="#contact">Request Consultation</a>
          <a href="#contact">Send an Enquiry</a>
        </div>

        <div className="footer-column">
          <strong>LEGAL &amp; INFORMATION</strong>
          <button
            type="button"
            aria-expanded={openPolicy === "terms"}
            onClick={() =>
              setOpenPolicy((current) => current === "terms" ? null : "terms")
            }
          >
            Terms &amp; Conditions
          </button>
          <button
            type="button"
            aria-expanded={openPolicy === "privacy"}
            onClick={() =>
              setOpenPolicy((current) => current === "privacy" ? null : "privacy")
            }
          >
            Privacy Policy
          </button>
          <a href="#contact">Contact Us</a>
        </div>
      </div>

      {openPolicy && (
        <section className="container footer-terms" aria-live="polite">
          {openPolicy === "terms" ? (
            <>
              <h2>Terms and Conditions</h2>
              <h3>1. Company Overview</h3>
              <p>PANDAeCe Pvt. Ltd. (“Company”, “we”, “our”, or “us”) offers digital marketing, eCommerce solutions, SEO services, and related consultancy and technical services through this website and other digital platforms.</p>
              <h3>2. Eligibility</h3>
              <p>You must be at least 18 years of age or the age of majority in your jurisdiction to use our services. By agreeing to these terms, you represent and warrant that you meet this requirement.</p>
              <h3>3. Services</h3>
              <p>Our offerings include but are not limited to:</p>
              <ul>
                <li>Digital marketing and advertising campaigns</li>
                <li>SEO optimization services</li>
                <li>Social media management</li>
                <li>eCommerce development and management</li>
                <li>Web development and branding</li>
              </ul>
              <h3>4. User Responsibilities</h3>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate, up-to-date information when engaging with our services</li>
                <li>Not use our services for unlawful, misleading, or unethical purposes</li>
                <li>Not attempt to copy, reverse engineer, or resell our solutions without written permission</li>
              </ul>
              <h3>5. Confidentiality</h3>
              <p>We respect your privacy. All client information shared with us is treated as confidential and will not be disclosed to third parties except where required by law.</p>
              <h3>6. Contact Information</h3>
              <p>For any questions regarding these Terms, you may contact us at:</p>
              <ul>
                <li>Email: <a href="mailto:info@pandaece.com">info@pandaece.com</a></li>
                <li>Address: #292, 4th Floor, 7th Main Road, Vyalikaval HBCS Layout, Nagavara, Bengaluru, Karnataka 560045</li>
                <li>Phone: <a href="tel:+918217794751">+91 8217794751</a></li>
              </ul>
            </>
          ) : (
            <>
              <h2>Privacy Policy</h2>
              <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>Personal information: name, email address, phone number, mailing address, payment details, and similar details.</li>
                <li>Usage data: IP address, browser type, operating system, browsing history, time spent on the Site, and pages visited.</li>
                <li>Cookies and tracking technologies used to enhance user experience and for analytics.</li>
              </ul>
              <h3>2. How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Improve, personalize, and expand our services</li>
                <li>Provide, operate, and maintain our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <h3>3. How We Share Your Information</h3>
              <ul>
                <li>Service providers who help us operate the Site and services</li>
                <li>Legal authorities, when required by law or to protect rights, property, or safety</li>
                <li>Business transfers related to mergers, sales of company assets, or acquisition</li>
              </ul>
              <h3>4. Cookies</h3>
              <p>We use cookies and similar tracking technologies to monitor activity on our Site and hold certain information. You can control cookie preferences through your browser settings. Disabling cookies may affect your user experience.</p>
              <h3>5. Data Security</h3>
              <p>We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              <h3>6. Your Rights</h3>
              <p>Depending on your location, you may have rights such as:</p>
              <ul>
                <li>Accessing your personal information</li>
                <li>Correcting inaccuracies</li>
                <li>Deleting your data</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <h3>7. Third-Party Links</h3>
              <p>Our Site may contain links to other websites not operated by Pandaece Pvt Ltd. We are not responsible for the content or privacy practices of such websites.</p>
              <h3>8. Changes to This Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time and encourage you to review it periodically. Changes are effective immediately upon posting on this page.</p>
            </>
          )}
        </section>
      )}

      <div className="container footer-bottom">
        <span>© 2026 PANDAeCe. All rights reserved.</span>

        <a href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <IndustryProblems />
        <Testimonials />
        <FAQ />
        <FinalCTA />

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="section-kicker">YOUR NEXT STEP</p>

              <h2 className="section-title">
                Let's understand your{" "}
                <span className="accent-text">
                  marketing performance.
                </span>
              </h2>

              <p className="contact-description">
                Share your business requirements, current challenges
                and growth objectives. We'll use this information to
                guide the consultation.
              </p>

              <ul className="contact-benefits">
                <li>
                  <CheckCircle2 size={19} />
                  Lead quality and CPQL
                </li>
                <li>
                  <CheckCircle2 size={19} />
                  Conversion rates and ROAS
                </li>
                <li>
                  <CheckCircle2 size={19} />
                  Customer acquisition costs
                </li>
                <li>
                  <CheckCircle2 size={19} />
                  CRM and lead tracking
                </li>
              </ul>

            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
