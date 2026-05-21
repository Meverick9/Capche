"use client";

import { useState } from "react";
import {
  quickRefCards, fullFeatures, platformInfo, userRoles,
  crfStatuses, eventStatuses, discrepancyStatuses,
  removedClaims, needsReviewItems, proposedNotFoundItems
} from "../lib/data";

const iconMap: Record<string, string> = {
  UserPlus: "👤", LogIn: "🔑", Users: "👥", Calendar: "📅",
  Edit: "✏️", Copy: "📋", Save: "💾", FileEdit: "📝",
  MessageSquare: "💬", FileText: "📄", CheckCircle: "✅",
  CheckSquare: "☑️", ListChecks: "📋", PenTool: "✍️",
  Code: "🔤", Zap: "⚡", BarChart: "📊", Database: "🗄️",
  BookOpen: "📖", Upload: "⬆️", Clock: "🕐",
  ClipboardList: "📋", Smartphone: "📱", CalendarDays: "📆",
  FolderOpen: "📁"
};

const statusColors: Record<string, string> = {
  confirmed: "bg-emerald-100 text-emerald-700 border-emerald-300",
  needsReview: "bg-amber-100 text-amber-700 border-amber-300",
  notFound: "bg-red-100 text-red-700 border-red-300",
  Proposed: "bg-indigo-100 text-indigo-700 border-indigo-300",
  mergeIntoParent: "bg-slate-100 text-slate-600 border-slate-300",
  portalOnly: "bg-blue-100 text-blue-700 border-blue-300"
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"quick" | "guides" | "roles" | "statuses" | "audit">("quick");
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredCards = quickRefCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         card.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || card.sourceStatus === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeFeatureData = fullFeatures.find(f => f.id === activeFeature);
  const activeCardData = quickRefCards.find(c => c.id === activeFeature);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-clinpurple-700">{platformInfo.name} {platformInfo.version}</h1>
              <p className="text-xs text-slate-500">{platformInfo.description}</p>
            </div>
            <div className="text-right">
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                Source-Audited
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {(["quick", "guides", "roles", "statuses", "audit"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setActiveFeature(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-clinpurple-100 text-clinpurple-700 shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab === "quick" && "Quick Reference"}
                {tab === "guides" && "Full Guides"}
                {tab === "roles" && "User Roles"}
                {tab === "statuses" && "Status Reference"}
                {tab === "audit" && "Source Audit"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* QUICK REFERENCE */}
        {activeTab === "quick" && (
          <div className="space-y-6">
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinpurple-500 text-sm"
              />
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-200 text-sm bg-white"
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">✅ Confirmed</option>
                <option value="needsReview">⚠️ Needs Review</option>
                <option value="Proposed">💡 Proposed</option>
              </select>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-emerald-600">
                  {quickRefCards.filter(c => c.sourceStatus === "confirmed").length}
                </div>
                <div className="text-xs text-slate-500">Confirmed</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-amber-600">
                  {quickRefCards.filter(c => c.sourceStatus === "needsReview").length}
                </div>
                <div className="text-xs text-slate-500">Needs Review</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {quickRefCards.filter(c => c.sourceStatus === "Proposed").length}
                </div>
                <div className="text-xs text-slate-500">Proposed</div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCards.map(card => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl border-2 border-slate-200 hover:border-clinpurple-300 transition-all p-5 cursor-pointer shadow-sm hover:shadow-md"
                  onClick={() => { setActiveFeature(card.id); setActiveTab("guides"); }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{iconMap[card.icon] || "📋"}</span>
                    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${statusColors[card.sourceStatus]}`}>
                      {card.sourceStatus}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{card.category}</p>
                  <p className="text-sm text-slate-600">{card.shortDescription}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-clinpurple-600 font-medium">
                    <span>View full guide →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FULL GUIDES */}
        {activeTab === "guides" && (
          <div className="space-y-6">
            {!activeFeatureData ? (
              <div className="text-center py-12">
                {activeCardData ? (
                  <div className="space-y-4">
                    <div className="text-4xl mb-2">{iconMap[activeCardData.icon] || "📋"}</div>
                    <h2 className="text-xl font-semibold text-slate-800">{activeCardData.title}</h2>
                    <span className={`inline-block text-xs px-2 py-1 rounded-full border ${statusColors[activeCardData.sourceStatus] || "bg-slate-100 text-slate-700 border-slate-200"}`}>
                      {activeCardData.sourceStatus}
                    </span>
                    <p className="text-slate-600 max-w-md mx-auto">{activeCardData.shortDescription}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
                      <p className="text-amber-800 text-sm font-medium">⚠️ Full guide not yet implemented for this prototype card.</p>
                      <p className="text-amber-700 text-xs mt-1">This Quick Reference card is a placeholder. The detailed step-by-step guide has not been built.</p>
                    </div>
                    <button
                      onClick={() => setActiveTab("quick")}
                      className="text-clinpurple-600 text-sm font-medium hover:underline"
                    >
                      ← Back to Quick Reference
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-slate-500 mb-4">Select a feature from Quick Reference to view full guide</p>
                    <button
                      onClick={() => setActiveTab("quick")}
                      className="px-4 py-2 bg-clinpurple-600 text-white rounded-lg text-sm font-medium"
                    >
                      Go to Quick Reference
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Feature Header */}
                <div className={`bg-white rounded-2xl border-2 p-6 ${statusColors[activeFeatureData.sourceStatus]}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{iconMap[quickRefCards.find(c => c.id === activeFeatureData.id)?.icon || "📋"]}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">{activeFeatureData.title}</h2>
                      <div className="flex gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full border font-medium ${statusColors[activeFeatureData.sourceStatus]}`}>
                          {activeFeatureData.sourceStatus} ({activeFeatureData.confidence} confidence)
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                          {activeFeatureData.productArea}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700">{activeFeatureData.fullDescription}</p>
                </div>

                {/* Meta Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-slate-200 p-4">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Who Uses It</h3>
                    <p className="text-sm text-slate-700">{activeFeatureData.whoUsesIt}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {activeFeatureData.rolesAllowed.map(role => (
                        <span key={role} className="text-xs px-2 py-1 rounded-full bg-clinpurple-50 text-clinpurple-700">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-4">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Where Located</h3>
                    <p className="text-sm text-slate-700">{activeFeatureData.whereLocated}</p>
                  </div>
                </div>

                {/* What You Can Do */}
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">What You Can Do</h3>
                  <ul className="space-y-2">
                    {activeFeatureData.whatYouCanDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step */}
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Step-by-Step Guide</h3>
                  <div className="space-y-4">
                    {activeFeatureData.stepByStepGuide.map(step => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-clinpurple-100 text-clinpurple-700 flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                        <div className="flex-1 pb-4 border-b border-slate-100 last:border-0">
                          <p className="font-semibold text-slate-800">{step.action}</p>
                          <div className="mt-1 space-y-1 text-sm text-slate-600">
                            <p><span className="text-slate-400">Location:</span> {step.location}</p>
                            <p><span className="text-slate-400">Button/Field:</span> {step.buttonOrField}</p>
                            <p><span className="text-slate-400">Result:</span> {step.expectedResult}</p>
                            <p><span className="text-slate-400">Check:</span> {step.checkAfter}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checklist & Warnings */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeFeatureData.checklistBeforeUse && (
                    <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5">
                      <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-3">Checklist Before Use</h3>
                      <ul className="space-y-2">
                        {activeFeatureData.checklistBeforeUse.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                            <span>☐</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeFeatureData.warnings && (
                    <div className="bg-amber-50 rounded-xl border border-amber-200 p-5">
                      <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Warnings</h3>
                      <ul className="space-y-2">
                        {activeFeatureData.warnings.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                            <span>⚠️</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Common Mistakes */}
                {activeFeatureData.commonMistakes && (
                  <div className="bg-red-50 rounded-xl border border-red-200 p-5">
                    <h3 className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3">Common Mistakes</h3>
                    <ul className="space-y-2">
                      {activeFeatureData.commonMistakes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                          <span>❌</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Source Info */}
                <div className="bg-slate-100 rounded-xl border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Source Information</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><span className="font-medium">Section:</span> {activeFeatureData.sourceSection}</p>
                    <p><span className="font-medium">Notes:</span> {activeFeatureData.sourceNotes}</p>
                    <p><span className="font-medium">Evidence:</span> {activeFeatureData.evidenceNote}</p>
                  </div>
                </div>

                {/* Related Features */}
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Related Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeFeatureData.relatedFeatures.map(feature => (
                      <span key={feature} className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* USER ROLES */}
        {activeTab === "roles" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {userRoles.map(role => (
                <div key={role.name} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-clinpurple-600 text-white flex items-center justify-center text-lg font-bold">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{role.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        role.level === "Study" ? "bg-clinpurple-100 text-clinpurple-700" : "bg-clinblue-100 text-clinblue-700"
                      }`}>
                        {role.level}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{role.scope}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STATUS REFERENCE */}
        {activeTab === "statuses" && (
          <div className="space-y-6">
            {/* CRF Statuses */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-4">CRF Statuses</h3>
              <div className="space-y-2">
                {crfStatuses.map(status => (
                  <div key={status.status} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <span className="text-xl">{status.icon}</span>
                    <div>
                      <span className="font-semibold text-slate-700">{status.status}</span>
                      <p className="text-sm text-slate-500">{status.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Statuses */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Event Statuses</h3>
              <div className="space-y-2">
                {eventStatuses.map(status => (
                  <div key={status.status} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <span className="text-xl">{status.icon}</span>
                    <div>
                      <span className="font-semibold text-slate-700">{status.status}</span>
                      <p className="text-sm text-slate-500">{status.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discrepancy Statuses */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Discrepancy Note Statuses</h3>
              <div className="space-y-2">
                {discrepancyStatuses.map(status => (
                  <div key={status.status} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <span className="text-xl">{status.icon}</span>
                    <div>
                      <span className="font-semibold text-slate-700">{status.status}</span>
                      <p className="text-sm text-slate-500">{status.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SOURCE AUDIT */}
        {activeTab === "audit" && (
          <div className="space-y-6">
            {/* Removed Claims */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-red-700 mb-4">Removed Claims ({removedClaims.length})</h3>
              <div className="space-y-3">
                {removedClaims.map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-red-50 border border-red-100">
                    <p className="font-semibold text-red-800">{item.claim}</p>
                    <p className="text-sm text-red-600 mt-1">{item.reason}</p>
                    <p className="text-xs text-red-400 mt-1">From: {item.originalLocation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Needs Review */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-amber-700 mb-4">Needs Review ({needsReviewItems.length})</h3>
              <ul className="space-y-2">
                {needsReviewItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 p-2 rounded bg-amber-50">
                    <span className="text-amber-500">⚠️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposed / Not Found */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-bold text-indigo-700 mb-4">Proposed / Not Found ({proposedNotFoundItems.length})</h3>
              <ul className="space-y-2">
                {proposedNotFoundItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 p-2 rounded bg-indigo-50">
                    <span className="text-indigo-500">💡</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-slate-400">
          {platformInfo.name} v{platformInfo.version} | {platformInfo.developer} | Source-Audited Training Guide
        </div>
      </footer>
    </div>
  );
}
