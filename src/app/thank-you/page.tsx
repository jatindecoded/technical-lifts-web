import React from "react";

import { CONTACT_FORM } from "@/lib/constants";

export default function ThankYouPage() {
  return (
    <section className="py-section max-w-container mx-auto px-6 text-center">
      <header className="mb-6">
        <h1 className="font-heading text-text-base text-3xl leading-none uppercase">
          {CONTACT_FORM.successHeading}
        </h1>
        <p className="text-text-muted mx-auto mt-3 max-w-xl">
          {CONTACT_FORM.successBody}
        </p>
      </header>

      <div className="mt-6">
        <a
          href="/"
          className="bg-primary text-dark font-heading inline-block rounded-full px-6 py-3 uppercase"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
