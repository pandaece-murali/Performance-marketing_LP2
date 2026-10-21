
import "./globals.css";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <div className="thank-you-logo">
          PANDA<span>eCe</span>
        </div>

        <div className="thank-you-check">
          <CheckCircle2 size={54} strokeWidth={1.7} />
        </div>

        <span className="thank-you-eyebrow">
          ENQUIRY RECEIVED
        </span>

        <h1>
          Thank You!
          <br />
          <span>We appreciate your interest.</span>
        </h1>

        <p className="thank-you-description">
          Your enquiry has been submitted. Thank you for
          considering PANDAeCe for your performance marketing
          requirements.
        </p>

        <div className="thank-you-info">
          <ShieldCheck size={20} />
          <p>
            Our team can review your requirements and follow up
            using the contact details you provided.
          </p>
        </div>

        <Link href="/" className="thank-you-button">
          Back to Home
          <ArrowRight size={18} />
        </Link>

        <p className="thank-you-footer">
          Empower <span>•</span> Converge <span>•</span> Excel
        </p>
      </div>
    </main>
  );
}
