"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    button: "Select plan",
    type: "select",
    description: [
      "Are working on personal projects",
      "Need basic design, presentation, and brainstorming tools",
      "Want to try Figma products",
    ],
    features: [
      "Unlimited drafts",
      "UI kits and templates",
      "Basic design file inspection",
      "Limited AI credits",
    ],
  },
  {
    name: "Professional",
    price: "$3–16/mo",
    button: "Select plan",
    type: "select",
    description: [
      "Are a professional or part of a small team",
      "Need unlimited files and projects for a single team",
      "Want advanced prototyping tools and easier dev handoff",
    ],
    features: [
      "Unlimited files and projects",
      "Team-wide design libraries",
      "Advanced Dev Mode inspection and MCP Server",
      "3000 credits/mo for Full seat",
    ],
  },
  {
    name: "Organization",
    price: "$5–55/mo",
    button: "Contact sales",
    type: "contact",
    description: [
      "Are a business that designs products across your organization",
      "Need unlimited teams and basic security",
      "Want to centralize assets, libraries, and workflows across departments",
    ],
    features: [
      "Unlimited teams",
      "Shared libraries and fonts",
      "Centralized admin tools",
      "3500 credits/mo for Full seat",
    ],
  },
  {
    name: "Enterprise",
    price: "$5–90/mo",
    button: "Learn more",
    type: "learn",
    description: [
      "Are a business designing for multiple products or brands",
      "Need enterprise-level security",
      "Want scalable design systems and simpler admin management",
    ],
    features: [
      "Custom team workspaces",
      "Design system theming and APIs",
      "SCIM seat management",
      "4250 credits/mo for Full seat",
    ],
  },
];

export default function AccountTypeForm() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Account Type</h2>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg p-5 flex flex-col justify-between hover:shadow-md transition ${
              selected === plan.name ? "border-indigo-500" : "border-gray-200"
            }`}
          >
            {/* Header */}
            <div>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-gray-600 mt-1">{plan.price}</p>
            </div>

            {/* Action */}
            <div className="mt-4">
              {plan.type === "select" ? (
                <button
                  className="w-full px-4 py-2 rounded-md bg-black text-white font-medium"
                  onClick={() => setSelected(plan.name)}
                >
                  {plan.button}
                </button>
              ) : (
                <button className="w-full px-4 py-2 rounded-md border border-gray-300 font-medium hover:bg-gray-50">
                  {plan.button}
                </button>
              )}
            </div>

            {/* Description */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">
                Choose {plan.name} if you:
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                {plan.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="mt-4">
              <p className="font-medium text-sm">Key features:</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-between">
        <button className="px-6 py-2 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600">
          Back
        </button>
        <button className="px-6 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900">
          Submit
        </button>
      </div>
    </div>
  );
}
