"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Phone,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from "lucide-react";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import { Container, SectionHeading, CTAButton } from "@/component/common";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(80, "That name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s()+\-.]{10,}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please choose a service"),
  preferredDate: z.string().min(1, "Please pick a date"),
  preferredTime: z.string().min(1, "Please pick a time window"),
  message: z.string().max(500, "Please keep it under 500 characters").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const timeWindows = [
  { value: "morning", label: "Morning · 8am–12pm" },
  { value: "afternoon", label: "Afternoon · 12pm–4pm" },
  { value: "evening", label: "Evening · 4pm–7pm" },
];

const reassuranceItems = [
  {
    icon: Clock,
    title: "We reply within 1 business hour",
    body: "Our front desk calls to confirm your slot — usually the same day you submit.",
  },
  {
    icon: ShieldCheck,
    title: "Your info is HIPAA-protected",
    body: "We never share patient data. This form is encrypted end-to-end.",
  },
  {
    icon: Phone,
    title: "Prefer to talk?",
    body: `Call us at ${clinic.phone}. We're happy to help you find the right time.`,
  },
];

/**
 * Booking form — frontend-only with react-hook-form + zod validation.
 * On submit, simulates a request and shows a success state + toast.
 */
export function BookingForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    // Simulate a network request — no backend in this project.
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Booking request:", data);
    setSubmitted(true);
    toast({
      title: "Appointment request received!",
      description: `Thanks ${data.name.split(" ")[0]} — we'll call you within the hour to confirm.`,
    });
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="scroll-mt-24 bg-brand py-20 lg:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: copy + reassurance */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
              <span className="size-1.5 rounded-full bg-emerald-300" aria-hidden />
              Book online
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Reserve your appointment in under a minute
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
              Tell us when works for you and we&apos;ll call back within the hour to
              confirm. New patients always welcome — no referral needed.
            </p>

            <ul className="mt-8 space-y-5">
              {reassuranceItems.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                    <item.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-brand/20 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="flex size-16 items-center justify-center rounded-full bg-brand-tint text-brand">
                    <CheckCircle2 size={36} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-ink">
                    Request received!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-body">
                    Thanks for reaching out. Our front desk will call you within the
                    hour to confirm your appointment. For anything urgent, call{" "}
                    <a href={clinic.phoneHref} className="font-semibold text-brand">
                      {clinic.phone}
                    </a>
                    .
                  </p>
                  <CTAButton
                    variant="secondary"
                    size="md"
                    className="mt-7"
                    onClick={handleReset}
                  >
                    Book another appointment
                  </CTAButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name" error={errors.name?.message} required>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className={inputClass(!!errors.name)}
                        {...register("name")}
                      />
                    </Field>

                    <Field label="Phone" htmlFor="phone" error={errors.phone?.message} required>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(512) 555-0142"
                        className={inputClass(!!errors.phone)}
                        {...register("phone")}
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Email (optional)" htmlFor="email" error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@example.com"
                        className={inputClass(!!errors.email)}
                        {...register("email")}
                      />
                    </Field>

                    <Field label="Service" htmlFor="service" error={errors.service?.message} required>
                      <div className="relative">
                        <select
                          id="service"
                          className={cn(inputClass(!!errors.service), "appearance-none pr-10")}
                          {...register("service")}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Choose a service…
                          </option>
                          {services.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="not-sure">I'm not sure — help me choose</option>
                        </select>
                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Preferred date" htmlFor="preferredDate" error={errors.preferredDate?.message} required>
                      <input
                        id="preferredDate"
                        type="date"
                        min={today}
                        className={inputClass(!!errors.preferredDate)}
                        {...register("preferredDate")}
                      />
                    </Field>

                    <Field label="Preferred time" htmlFor="preferredTime" error={errors.preferredTime?.message} required>
                      <div className="relative">
                        <select
                          id="preferredTime"
                          className={cn(inputClass(!!errors.preferredTime), "appearance-none pr-10")}
                          {...register("preferredTime")}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Choose a window…
                          </option>
                          {timeWindows.map((w) => (
                            <option key={w.value} value={w.value}>
                              {w.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                      </div>
                    </Field>
                  </div>

                  <Field
                    label="Anything else? (optional)"
                    htmlFor="message"
                    error={errors.message?.message}
                  >
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us about your symptoms or any concerns…"
                      className={cn(inputClass(!!errors.message), "resize-none")}
                      {...register("message")}
                    />
                  </Field>

                  <CTAButton
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending request…
                      </>
                    ) : (
                      <>
                        <CalendarCheck size={20} />
                        Request appointment
                      </>
                    )}
                  </CTAButton>

                  <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to be contacted about your appointment.
                    We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- helpers ---------- */

function inputClass(hasError: boolean): string {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors",
    "placeholder:text-slate-400",
    "focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand",
    hasError
      ? "border-red-300 bg-red-50/40"
      : "border-slate-200 hover:border-slate-300",
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
        {required ? <span className="ml-0.5 text-brand">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
