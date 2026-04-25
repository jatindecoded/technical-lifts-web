"use client";

import React from "react";

import UnifiedForm, { Field, Input, Select, Textarea, Checkbox } from "@/components/ui/unified-form";
import { CONTACT_FORM } from "@/lib/constants";

// Simple HTML form posting to FormSubmit.co for static export compatibility.
// NOTE: Using a non-production placeholder address below. Replace with the real recipient email before deployment.
export function ContactForm() {
  // Simplified site-wide lead form: name, phone, email only
  return <UnifiedForm />;
}

