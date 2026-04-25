"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import UnifiedForm, { Field, Input, Select, Textarea, Checkbox } from "@/components/ui/unified-form";
import { CONTACT_FORM } from "@/lib/constants";

// Simple HTML form posting to FormSubmit.co for static export compatibility.
// NOTE: Using a non-production placeholder address below. Replace with the real recipient email before deployment.
export function ContactForm() {
  return (
    <UnifiedForm
      action={`https://formsubmit.co/${encodeURIComponent(CONTACT_FORM.recipientEmail)}`}
      method="POST"
      submitLabel={CONTACT_FORM.submitLabel}
      submittingLabel={CONTACT_FORM.submittingLabel}
    >
      {/* FormSubmit hidden fields - replace _next and email in action */}
      <input type="hidden" name="_subject" value="Website inquiry — Technical Lifts" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="/thank-you" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Full name *">
          <Input id="contact-name" name="name" required placeholder="First and last name" />
        </Field>

        <Field id="contact-phone" label="Phone / WhatsApp *">
          <Input id="contact-phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
        </Field>
      </div>

      <Field id="contact-inquiry" label="What are you looking for? *">
        <Select id="contact-inquiry" name="inquiry" required>
          {CONTACT_FORM.inquiryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field id="contact-message" label="Anything else?">
        <Textarea id="contact-message" name="message" rows={4} placeholder="Tell us about your goal, schedule, any injuries — anything helpful" />
      </Field>

      <div className="flex items-start gap-3">
        <Checkbox id="contact-agree" name="agree" />
        <label htmlFor="contact-agree" className="text-sm text-muted-foreground">
          I agree to be contacted by the Technical Lifts team
        </label>
      </div>
    </UnifiedForm>
  );
}

