import React from "react";

import { CONTACT_FORM } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <section className="py-section max-w-container mx-auto px-6 text-center">
      <header className="mb-6">
        <h1 className="text-3xl font-heading tracking-tight leading-none text-text-base uppercase">
          {CONTACT_FORM.successHeading}
        </h1>
        <p className="mt-3 text-text-muted max-w-xl mx-auto">{CONTACT_FORM.successBody}</p>
      </header>

      <div className="mt-6">
        <a href="/" className="inline-block rounded-full bg-primary text-dark px-6 py-3 font-heading uppercase">
          Back to Home
        </a>
      </div>
    </section>
  );
}
