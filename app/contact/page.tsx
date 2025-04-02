"use client";

import Header from "../components/Header";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  SparklesIcon,
  CalendarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      <Header />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-blue-600/10 ring-1 ring-blue-600/30">
              <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 text-sm font-medium">
                Transform Your Future
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Expert guidance for EB1A, O1A, and EB2 NIW profile building.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help extraordinary individuals showcase their achievements
              effectively.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#calendly"
                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
              >
                Book a Free Consultation
                <CalendarIcon className="ml-2 -mr-1 h-5 w-5 inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="visa-type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interested In
                  </label>
                  <select
                    id="visa-type"
                    name="visa-type"
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option>Select visa category</option>
                    <option>EB1A Profile Building</option>
                    <option>O1A Documentation</option>
                    <option>EB2 NIW Strategy</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Tell us about your background and goals..."
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Send Message
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 inline-block" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Why Choose Us */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Why Choose Us
              </h2>
              <dl className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <UserGroupIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900">
                      Expert Guidance
                    </dt>
                    <dd className="mt-1 text-gray-600">
                      Specialized in EB1A, O1A, and EB2 NIW profile building
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900">
                      Proven Track Record
                    </dt>
                    <dd className="mt-1 text-gray-600">
                      Successfully helped numerous clients strengthen their
                      profiles
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900">
                      Personalized Support
                    </dt>
                    <dd className="mt-1 text-gray-600">
                      Tailored strategies for your unique achievements
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Contact Information */}
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <dl className="space-y-6">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <MapPinIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <dt className="text-sm font-medium text-gray-600">
                      Location
                    </dt>
                    <dd className="text-sm text-gray-900">
                      123 Immigration Street, New York, NY 10001
                    </dd>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <dt className="text-sm font-medium text-gray-600">Phone</dt>
                    <dd className="text-sm">
                      <a
                        href="tel:+1 (555) 234-5678"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        +1 (555) 234-5678
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <dt className="text-sm font-medium text-gray-600">Email</dt>
                    <dd className="text-sm">
                      <a
                        href="mailto:contact@eb1avisionarypath.com"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        contact@eb1avisionarypath.com
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
