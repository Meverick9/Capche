export interface Feature {
  id: string
  slug: string
  title: string
  productArea: string
  trainingTrack: string
  sourceStatus: 'confirmed' | 'needsReview' | 'notFound' | 'mergeIntoParent' | 'portalOnly' | 'Proposed'
  confidence: 'high' | 'medium' | 'low'
  rolesAllowed: string[]
  whoUsesIt: string
  whereLocated: string
  shortDescription: string
  fullDescription: string
  whatYouCanDo: string[]
  whenToUse: string
  requiredFields?: string[]
  buttonsAndActions: string[]
  statusIndicators?: string[]
  validationMessages?: string[]
  stepByStepGuide: Step[]
  checklistBeforeUse?: string[]
  howToVerifySuccess: string
  commonMistakes?: string[]
  warnings?: string[]
  relatedFeatures: string[]
  sourceSection: string
  sourceNotes: string
  evidenceNote: string
}

export interface Step {
  step: number
  action: string
  location: string
  buttonOrField: string
  expectedResult: string
  checkAfter: string
}

export interface QuickRefCard {
  id: string
  title: string
  icon: string
  category: string
  shortDescription: string
  sourceStatus: string
  confidence: string
  linkToFullGuide: string
}

export const platformInfo = {
  name: "Captivate Live",
  version: "4.4",
  developer: "ClinCapture",
  type: "EDC (Electronic Data Capture) System",
  description: "Web-based clinical trial data management platform for building, conducting, and managing studies."
}

export const userRoles = [
  { name: "Study Administrator", icon: "Ⓐ", level: "Study", scope: "Full study access" },
  { name: "Study Coder", icon: "Ⓒ", level: "Study", scope: "Medical coding tasks" },
  { name: "Study Evaluator", icon: "Ⓔ", level: "Study", scope: "Data evaluation" },
  { name: "Study Monitor", icon: "Ⓜ", level: "Study", scope: "Monitoring across all sites" },
  { name: "Study Sponsor", icon: "Ⓢ", level: "Study", scope: "Read-only oversight" },
  { name: "Data Manager", icon: "Ⓓ", level: "Study", scope: "Data management" },
  { name: "Investigator", icon: "Ⓘ", level: "Site", scope: "Site-level clinical data" },
  { name: "Site Monitor", icon: "Ⓜ", level: "Site", scope: "Site-specific monitoring" },
  { name: "Clinical Research Coordinator", icon: "Ⓡ", level: "Site", scope: "Site-level data entry" }
]

export const crfStatuses = [
  { status: "Not Started", description: "CRF not opened for data entry", icon: "⚪" },
  { status: "Partial Data Entry", description: "Some data saved without validation", icon: "🟡" },
  { status: "Initial Data Entry", description: "CRF opened, data may be entered", icon: "🔵" },
  { status: "Data Entry Complete", description: "Marked complete, edit checks passed", icon: "🟢" },
  { status: "Initial Data Entry Complete", description: "Ready for Double Entry or Evaluation", icon: "🔵" },
  { status: "Double Data Entry Started", description: "Second entry in progress", icon: "🟣" },
  { status: "Double Data Entry Complete", description: "Both entries match or resolved", icon: "🟢" },
  { status: "Source Data Validated", description: "SDV completed by monitor", icon: "✅" },
  { status: "Signed", description: "Electronically signed by Investigator", icon: "✍️" },
  { status: "Locked", description: "No further changes allowed", icon: "🔒" }
]

export const eventStatuses = [
  { status: "Not Started", description: "Subject added but event not scheduled", icon: "⚪" },
  { status: "Scheduled", description: "Event scheduled for subject", icon: "📅" },
  { status: "Data Entry Started", description: "Any CRF opened for event", icon: "📝" },
  { status: "Stopped", description: "Subject temporarily stopped participating", icon: "🛑" },
  { status: "Skipped", description: "Subject did not complete event", icon: "⏭️" },
  { status: "Completed", description: "All required CRFs marked complete", icon: "✅" },
  { status: "Initial Data Entry Completed", description: "Ready for double entry/evaluation", icon: "🔵" },
  { status: "Source Data Validated", description: "All SDV requirements met", icon: "✅" },
  { status: "Signed", description: "All CRFs completed, casebook signed", icon: "✍️" },
  { status: "Locked", description: "No further data entry allowed", icon: "🔒" }
]

export const discrepancyStatuses = [
  { status: "New", description: "Initial status for Query or Failed Validation Check", icon: "🔴" },
  { status: "New (DCF)", description: "DCF generated for new discrepancy", icon: "📄" },
  { status: "Updated", description: "Response to query received", icon: "🟡" },
  { status: "Closed", description: "Final status - cannot be changed", icon: "🟢" },
  { status: "Not Applicable", description: "For RFC and Annotation types", icon: "⚪" }
]

export const quickRefCards = [
  {
    id: "create-account",
    title: "Create an Account",
    icon: "UserPlus",
    category: "Getting Started",
    shortDescription: "Self-registration with email activation and profile completion.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-create-account"
  },
  {
    id: "login-logout",
    title: "Login & Logout",
    icon: "LogIn",
    category: "Getting Started",
    shortDescription: "Secure authentication with session management.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-login-logout"
  },
  {
    id: "add-subject",
    title: "Add Subject",
    icon: "UserPlus",
    category: "Subject Management",
    shortDescription: "Create new study subject records with configurable identifiers.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-add-subject"
  },
  {
    id: "subject-matrix",
    title: "Subject Matrix",
    icon: "Users",
    category: "Subject Management",
    shortDescription: "Visual overview of all subjects and their event statuses.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-subject-matrix"
  },
  {
    id: "schedule-event",
    title: "Schedule Event",
    icon: "Calendar",
    category: "Subject Management",
    shortDescription: "Plan visits and data collection points for subjects.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-schedule-event"
  },
  {
    id: "crf-data-entry",
    title: "CRF Data Entry",
    icon: "Edit",
    category: "Data Entry",
    shortDescription: "Web-based CRF completion with real-time validation.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-crf-data-entry"
  },
  {
    id: "double-data-entry",
    title: "Double Data Entry",
    icon: "Copy",
    category: "Data Entry",
    shortDescription: "Duplicate entry for data integrity verification.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-double-data-entry"
  },
  {
    id: "partial-data-entry",
    title: "Partial Data Entry",
    icon: "Save",
    category: "Data Entry",
    shortDescription: "Save incomplete CRFs for later completion.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-partial-data-entry"
  },
  {
    id: "administrative-editing",
    title: "Administrative Editing",
    icon: "FileEdit",
    category: "Data Entry",
    shortDescription: "Post-completion data modifications with audit trail.",
    sourceStatus: "confirmed",
    confidence: "medium",
    linkToFullGuide: "#feature-administrative-editing"
  },
  {
    id: "queries-discrepancy",
    title: "Queries & Discrepancy Notes",
    icon: "MessageSquare",
    category: "Queries",
    shortDescription: "Create, manage, and resolve data discrepancies.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-queries-discrepancy"
  },
  {
    id: "dcf-generation",
    title: "DCF Generation",
    icon: "FileText",
    category: "Queries",
    shortDescription: "Generate discrepancy correction forms for site communication.",
    sourceStatus: "confirmed",
    confidence: "medium",
    linkToFullGuide: "#feature-dcf-generation"
  },
  {
    id: "sdv-crf",
    title: "SDV by CRF",
    icon: "CheckCircle",
    category: "Source Data Verification",
    shortDescription: "Individual form verification against source documents.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-sdv-crf"
  },
  {
    id: "sdv-subject",
    title: "SDV by Subject",
    icon: "CheckSquare",
    category: "Source Data Verification",
    shortDescription: "Bulk verification for entire subject casebooks.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-sdv-subject"
  },
  {
    id: "sdv-item",
    title: "Item-Level SDV",
    icon: "ListChecks",
    category: "Source Data Verification",
    shortDescription: "Verify specific fields only.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-sdv-item"
  },
  {
    id: "electronic-signature",
    title: "Electronic Signature",
    icon: "PenTool",
    category: "Signatures",
    shortDescription: "Controlled electronic signature workflows.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-electronic-signature"
  },
  {
    id: "medical-coding",
    title: "Medical Coding",
    icon: "Code",
    category: "Coding",
    shortDescription: "Standardize medical terminology with dictionaries.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-medical-coding"
  },
  {
    id: "auto-code",
    title: "Auto-Code",
    icon: "Zap",
    category: "Coding",
    shortDescription: "Automatic coding for previously coded terms.",
    sourceStatus: "needsReview",
    confidence: "medium",
    linkToFullGuide: "#feature-auto-code"
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: "BarChart",
    category: "Monitoring",
    shortDescription: "Real-time study progress visualization with widgets.",
    sourceStatus: "needsReview",
    confidence: "medium",
    linkToFullGuide: "#feature-dashboard"
  },
  {
    id: "datasets",
    title: "Datasets",
    icon: "Database",
    category: "Advanced",
    shortDescription: "Custom data extraction in multiple formats.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-datasets"
  },
  {
    id: "casebooks",
    title: "Casebooks",
    icon: "BookOpen",
    category: "Advanced",
    shortDescription: "Generate and download subject casebooks.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-casebooks"
  },
  {
    id: "import-data",
    title: "Import Data",
    icon: "Upload",
    category: "Advanced",
    shortDescription: "Import CRF data via XML or CSV.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-import-data"
  },
  {
    id: "jobs",
    title: "Jobs",
    icon: "Clock",
    category: "Advanced",
    shortDescription: "Scheduled automated import/export.",
    sourceStatus: "confirmed",
    confidence: "medium",
    linkToFullGuide: "#feature-jobs"
  },
  {
    id: "audit-logs",
    title: "Audit Logs",
    icon: "ClipboardList",
    category: "Advanced",
    shortDescription: "Complete regulatory compliance trail.",
    sourceStatus: "confirmed",
    confidence: "high",
    linkToFullGuide: "#feature-audit-logs"
  },
  {
    id: "vdc",
    title: "Virtual Data Capture",
    icon: "Smartphone",
    category: "Advanced",
    shortDescription: "Subject-facing data collection via forms.",
    sourceStatus: "confirmed",
    confidence: "medium",
    linkToFullGuide: "#feature-vdc"
  },
  {
    id: "calendared-events",
    title: "Calendared Events",
    icon: "CalendarDays",
    category: "Advanced",
    shortDescription: "Auto-scheduling based on protocol windows.",
    sourceStatus: "confirmed",
    confidence: "medium",
    linkToFullGuide: "#feature-calendared-events"
  },
  {
    id: "etmf",
    title: "eTMF / Study Docs",
    icon: "FolderOpen",
    category: "Advanced",
    shortDescription: "Electronic Trial Master File management.",
    sourceStatus: "confirmed",
    confidence: "medium",
    linkToFullGuide: "#feature-etmf"
  }
]

export const fullFeatures = [
  {
    id: "add-subject",
    slug: "add-subject",
    title: "Add Subject",
    productArea: "Captivate Live",
    trainingTrack: "Live Training",
    sourceStatus: "confirmed",
    confidence: "high",
    rolesAllowed: ["Clinical Research Coordinator", "Investigator"],
    whoUsesIt: "Site staff who enroll subjects into the study.",
    whereLocated: "Left Menu > Add Subject, or Subject Matrix > Add Subject icon",
    shortDescription: "Create a new study subject record with configurable identifiers.",
    fullDescription: "The Add Subject feature allows authorized site users to create new subject records in the study. The system supports configurable Study Subject ID generation (manual, auto-generated editable, or auto-generated locked). Additional identifiers include Secondary ID and Person ID (cross-study identifier). Demographic and enrollment information is captured at creation time.",
    whatYouCanDo: [
      "Create a new subject with unique Study Subject ID",
      "Assign Secondary ID and Person ID",
      "Set enrollment date and demographic data",
      "Assign subject to groups if configured",
      "Add subject to multiple studies via Person ID"
    ],
    whenToUse: "When a new participant is enrolled in the study at your site.",
    requiredFields: ["Study Subject ID", "Enrollment Date"],
    buttonsAndActions: ["Submit", "Start Data Entry", "Schedule Events", "Add Next Subject", "Back"],
    statusIndicators: ["Available", "Removed", "Signed", "Locked"],
    stepByStepGuide: [
      {
        step: 1,
        action: "Open Add Subject page",
        location: "Left Menu or Subject Matrix",
        buttonOrField: "Add Subject icon/button",
        expectedResult: "Add Subject form opens with empty fields",
        checkAfter: "Form displays required field markers (red asterisks)"
      },
      {
        step: 2,
        action: "Enter Study Subject ID",
        location: "Add Subject form",
        buttonOrField: "Study Subject ID field",
        expectedResult: "ID accepted or validation message shown",
        checkAfter: "No duplicate ID warning appears"
      },
      {
        step: 3,
        action: "Enter Secondary ID (optional)",
        location: "Add Subject form",
        buttonOrField: "Secondary ID field",
        expectedResult: "Alternative identifier saved",
        checkAfter: "Field shows entered value"
      },
      {
        step: 4,
        action: "Enter Person ID (optional)",
        location: "Add Subject form",
        buttonOrField: "Person ID field",
        expectedResult: "Cross-study identifier saved",
        checkAfter: "If existing Person ID, sex and DOB must match"
      },
      {
        step: 5,
        action: "Set Enrollment Date",
        location: "Add Subject form",
        buttonOrField: "Enrollment Date field / calendar picker",
        expectedResult: "Date selected and displayed",
        checkAfter: "Date format matches study configuration"
      },
      {
        step: 6,
        action: "Select Gender",
        location: "Add Subject form",
        buttonOrField: "Gender dropdown",
        expectedResult: "Gender option selected",
        checkAfter: "Dropdown shows selected value"
      },
      {
        step: 7,
        action: "Enter Date of Birth",
        location: "Add Subject form",
        buttonOrField: "Date of Birth field",
        expectedResult: "DOB entered in correct format",
        checkAfter: "No format validation error"
      },
      {
        step: 8,
        action: "Select Group(s) if applicable",
        location: "Add Subject form",
        buttonOrField: "Group(s) dropdown",
        expectedResult: "Group assignment shown",
        checkAfter: "Only available groups shown"
      },
      {
        step: 9,
        action: "Choose action and submit",
        location: "Add Subject form",
        buttonOrField: "Submit / Start Data Entry / Schedule Events / Add Next Subject",
        expectedResult: "Subject created, redirected based on button chosen",
        checkAfter: "Subject appears in Subject Matrix with Available status"
      }
    ],
    checklistBeforeUse: [
      "Site exists and is active",
      "Study status is Available",
      "User has Add Subject permission",
      "Study Subject ID format is known"
    ],
    howToVerifySuccess: "Check Subject Matrix — new subject appears with Available status and correct ID.",
    commonMistakes: [
      "Using duplicate Study Subject ID",
      "Mismatched Person ID sex/DOB",
      "Forgetting to set Enrollment Date",
      "Adding subject to wrong site"
    ],
    warnings: [
      "Same Person ID links subjects across studies — verify sex and DOB match",
      "Cannot add same subject to multiple sites within same study",
      "Study Administrator can change site assignment later if needed"
    ],
    relatedFeatures: ["Subject Matrix", "Schedule Event", "CRF Data Entry", "Add Subject to Multiple Studies"],
    sourceSection: "Section 7.5.1 — Add Subject",
    sourceNotes: "Confirmed: Add Subject, Add a Subject to Multiple Studies, Left Menu > Add Subject. Auto-generated ID options confirmed. Person ID cross-study linking confirmed.",
    evidenceNote: "Source: Captivate Live User Guide v4.4, pages 7.5.1, 7.5.2"
  },
  {
    id: "crf-data-entry",
    slug: "crf-data-entry",
    title: "CRF Data Entry",
    productArea: "Captivate Live",
    trainingTrack: "Live Training",
    sourceStatus: "confirmed",
    confidence: "high",
    rolesAllowed: ["Clinical Research Coordinator", "Investigator"],
    whoUsesIt: "Site staff entering clinical data into Case Report Forms.",
    whereLocated: "Subject Matrix > Subject Record > Enter Data icon, or Left Menu > Subjects > View Events > Enter Data",
    shortDescription: "Web-based CRF completion with real-time validation and save options.",
    fullDescription: "CRF Data Entry is the primary method for capturing clinical trial data. Users open CRFs from the Subject Matrix or View Events page, enter data field by field, and save progress. The system performs real-time edit checks (hard and soft validations) and supports partial saves, complete marking, and administrative editing.",
    whatYouCanDo: [
      "Enter data into CRF fields",
      "Save progress without completing",
      "Mark CRF as complete when finished",
      "Add discrepancy notes to individual fields",
      "Toggle edit checks for partial entry",
      "Add digitized signature if configured",
      "Resume after session timeout"
    ],
    whenToUse: "When capturing subject data for a scheduled or unscheduled visit/event.",
    requiredFields: ["Fields marked with orange asterisk (*)"],
    buttonsAndActions: ["Save", "Mark CRF Complete", "Help icon", "Administrative Editing icon", "Add Discrepancy Note icon", "Toggle Edit Checks slider"],
    statusIndicators: ["Not Started", "Initial Data Entry", "Data Entry Complete", "Partial Data Entry"],
    validationMessages: [
      "Hard Validation: Must fix or provide note before saving",
      "Soft Validation: Can override with second save or annotation"
    ],
    stepByStepGuide: [
      {
        step: 1,
        action: "Open CRF from Subject Matrix",
        location: "Subject Matrix or View Events",
        buttonOrField: "Enter Data icon for desired CRF",
        expectedResult: "CRF opens in data entry mode",
        checkAfter: "CRF version selection appears if multiple versions exist"
      },
      {
        step: 2,
        action: "Review page instructions",
        location: "CRF top section",
        buttonOrField: "Instructions text or Help icon",
        expectedResult: "Study-specific guidance visible",
        checkAfter: "Understand required fields and format expectations"
      },
      {
        step: 3,
        action: "Enter data in fields",
        location: "CRF form fields",
        buttonOrField: "Input fields, dropdowns, radio buttons",
        expectedResult: "Values accepted, real-time validation runs",
        checkAfter: "No hard validation errors (red) on required fields"
      },
      {
        step: 4,
        action: "Add discrepancy notes if needed",
        location: "Individual field level",
        buttonOrField: "Add Discrepancy Note icon next to field",
        expectedResult: "Discrepancy note dialog opens",
        checkAfter: "Note saved and icon appears on field"
      },
      {
        step: 5,
        action: "Toggle Edit Checks if partial entry",
        location: "CRF header area",
        buttonOrField: "Edit Checks slider (ON/OFF)",
        expectedResult: "Slider moves to OFF position",
        checkAfter: "Validation suppressed for this save"
      },
      {
        step: 6,
        action: "Save CRF",
        location: "CRF footer",
        buttonOrField: "Save button",
        expectedResult: "Data saved, success message shown",
        checkAfter: "Status updates to Initial Data Entry or Partial Data Entry"
      },
      {
        step: 7,
        action: "Mark CRF Complete",
        location: "CRF footer",
        buttonOrField: "Mark CRF Complete checkbox",
        expectedResult: "Checkbox checked",
        checkAfter: "All required fields filled, no hard validations"
      },
      {
        step: 8,
        action: "Confirm completion",
        location: "Confirmation dialog",
        buttonOrField: "OK button",
        expectedResult: "CRF marked complete, edit checks performed",
        checkAfter: "Status changes to Data Entry Complete, green checkmark appears"
      }
    ],
    checklistBeforeUse: [
      "Subject exists and is enrolled",
      "Event is scheduled (if required)",
      "User has data entry permission for this site",
      "Correct CRF version is selected"
    ],
    howToVerifySuccess: "Check Subject Matrix — CRF cell shows completed status icon. Event status may update to Data Entry Started or Completed.",
    commonMistakes: [
      "Forgetting to mark CRF Complete",
      "Ignoring hard validation errors",
      "Leaving required fields empty",
      "Not adding notes for out-of-range values"
    ],
    warnings: [
      "Session timeout offers resume or discard — choose carefully",
      "Orange asterisk (*) indicates required field",
      "Green checkmark indicates SDV required after completion",
      "Administrative Editing available only for completed CRFs with proper permissions"
    ],
    relatedFeatures: ["Partial Data Entry", "Double Data Entry", "Administrative Editing", "Queries & Discrepancy Notes", "Electronic Signature"],
    sourceSection: "Section 7.6 — Entering CRF Data",
    sourceNotes: "Confirmed: Mark CRF Complete, Save, Administrative Editing icon, Help icon, Add Digitized Signature, Double Data Entry, Data Entry Timeout. Toggle Edit Checks confirmed for partial entry.",
    evidenceNote: "Source: Captivate Live User Guide v4.4, Section 7.6"
  },
  {
    id: "queries-discrepancy",
    slug: "queries-discrepancy",
    title: "Queries & Discrepancy Notes",
    productArea: "Captivate Live",
    trainingTrack: "Live Training",
    sourceStatus: "confirmed",
    confidence: "high",
    rolesAllowed: ["Study Monitor", "Site Monitor", "Study Administrator", "Study Coder", "Clinical Research Coordinator", "Investigator"],
    whoUsesIt: "Monitors create queries; site staff respond; administrators manage.",
    whereLocated: "Left Menu > Tasks > Queries and Annotations, or Dashboard > My Discrepancies widget, or CRF field-level icon",
    shortDescription: "Create, manage, and resolve data discrepancies through structured notes.",
    fullDescription: "Queries and Discrepancy Notes are the primary communication mechanism for data quality issues in Captivate Live. Failed Validation Checks are auto-generated when data fails edit checks. Queries are manually issued by study-level users. Reason For Change notes are auto-converted annotations for post-completion modifications. All notes track status from New through Updated to Closed.",
    whatYouCanDo: [
      "Create discrepancy notes on individual fields",
      "Update notes with responses or corrections",
      "Close notes when resolved",
      "Generate DCFs for site communication",
      "Filter and search notes by status, type, or assignee",
      "View note history and audit trail"
    ],
    whenToUse: "When data quality issues are identified during review, monitoring, or validation.",
    requiredFields: ["Description (brief title)", "Detailed Note (full explanation)"],
    buttonsAndActions: ["Add Discrepancy Note", "Update Note", "Close Note", "View Note", "Generate DCF", "Filter", "Search"],
    statusIndicators: ["New", "New (DCF)", "Updated", "Closed", "Not Applicable"],
    validationMessages: [
      "Closed status cannot be changed",
      "Child notes cannot be added to closed notes"
    ],
    stepByStepGuide: [
      {
        step: 1,
        action: "Access Queries page",
        location: "Left Menu or Dashboard",
        buttonOrField: "Queries and Annotations menu item, or My Discrepancies widget",
        expectedResult: "Queries list page opens with filter options",
        checkAfter: "List shows notes accessible to your role and scope"
      },
      {
        step: 2,
        action: "Filter to find relevant queries",
        location: "Queries page",
        buttonOrField: "Status filter, Type filter, or search field",
        expectedResult: "Filtered list shows matching notes",
        checkAfter: "Correct filter values applied"
      },
      {
        step: 3,
        action: "Create new query (monitors/admin)",
        location: "CRF field or Queries page",
        buttonOrField: "Add Discrepancy Note icon",
        expectedResult: "Discrepancy note dialog opens",
        checkAfter: "Dialog shows Note Type dropdown, Description, Detailed Note fields"
      },
      {
        step: 4,
        action: "Select Note Type",
        location: "Discrepancy note dialog",
        buttonOrField: "Note Type dropdown",
        expectedResult: "Type selected: Query or Annotation",
        checkAfter: "Correct type for scenario chosen"
      },
      {
        step: 5,
        action: "Enter Description and Detailed Note",
        location: "Discrepancy note dialog",
        buttonOrField: "Description and Detailed Note text fields",
        expectedResult: "Text entered in both fields",
        checkAfter: "Description is concise, Detailed Note explains issue fully"
      },
      {
        step: 6,
        action: "Assign to user and submit",
        location: "Discrepancy note dialog",
        buttonOrField: "Assigned User dropdown, Email Assigned User checkbox, Submit & Close",
        expectedResult: "Query created, status set to New",
        checkAfter: "Note appears in list with New status, assignee notified if email checked"
      },
      {
        step: 7,
        action: "Update note (site response)",
        location: "Queries page",
        buttonOrField: "View icon then Update Note button",
        expectedResult: "Response dialog opens",
        checkAfter: "Enter response description and detailed note"
      },
      {
        step: 8,
        action: "Close note (monitor/admin)",
        location: "Queries page",
        buttonOrField: "Close Note button",
        expectedResult: "Closure dialog opens",
        checkAfter: "Enter closure reason, status changes to Closed, cannot be modified"
      }
    ],
    checklistBeforeUse: [
      "User has permission to create/update/close notes",
      "Correct scope (study or site) selected",
      "For field-level notes: CRF is accessible"
    ],
    howToVerifySuccess: "Check status: New → Updated → Closed. Closed notes are final. Audit log tracks all status changes.",
    commonMistakes: [
      "Closing note prematurely without resolution",
      "Forgetting to assign to responsible user",
      "Vague descriptions without actionable detail",
      "Trying to modify closed note"
    ],
    warnings: [
      "Closed status is final — no further changes allowed",
      "Child notes cannot be added to closed parent notes",
      "Failed Validation Check notes are auto-generated; do not manually create as Query",
      "Reason For Change notes are auto-converted from annotations on completed CRF edits"
    ],
    relatedFeatures: ["CRF Data Entry", "Source Data Verification", "DCF Generation", "Administrative Editing", "Audit Logs"],
    sourceSection: "Section 7.3 — Queries and Annotations / Discrepancy Notes",
    sourceNotes: "Confirmed: Creating/finding/updating/closing/managing discrepancy notes, DCF generation, statuses New/Updated/Closed, New DCF icon. Confirmed: Failed Validation Check auto-generation, Query manual creation, RFC auto-conversion, Annotation type.",
    evidenceNote: "Source: Captivate Live User Guide v4.4, Sections 7.3, 7.3.2, 7.3.3"
  }
]

export const removedClaims = [
  { claim: "DCF PDF form", reason: "PDF output format not confirmed in source. DCF generation confirmed but format unspecified.", originalLocation: "Queries section" },
  { claim: "21 CFR Part 11 compliant", reason: "Hard compliance claim not source-confirmed. Use neutral wording about controlled signature workflows.", originalLocation: "Electronic Signatures section" },
  { claim: "No open queries required for signature", reason: "Query signing blocker not confirmed in source. Remove unless explicitly sourced.", originalLocation: "Electronic Signatures section" },
  { claim: "Dashboard drag/drop/add/remove", reason: "Customize functionality confirmed but exact drag/drop behavior not fully source-confirmed.", originalLocation: "Dashboard section" },
  { claim: "Clickable charts → filtered lists", reason: "Drill-down behavior from widgets not confirmed in source.", originalLocation: "Dashboard section" },
  { claim: "SDV Not Required as confirmed status", reason: "SDV levels (Not Required/Entire CRF/Specific Items) confirmed, but presentation as status indicator needs review.", originalLocation: "SDV section" },
  { claim: "Tab key navigation", reason: "Keyboard navigation not explicitly confirmed in source.", originalLocation: "Quick Tips" },
  { claim: "Orange highlighted last row", reason: "Last Row Accessed feature confirmed but color description not verified.", originalLocation: "Quick Tips" },
  { claim: "Clickable discrepancy counters", reason: "Counter navigation behavior not explicitly confirmed.", originalLocation: "Quick Tips" },
  { claim: "Save and Next button", reason: "Button not confirmed in source. Save and Mark CRF Complete confirmed.", originalLocation: "CRF Data Entry section" },
  { claim: "Next/Previous buttons", reason: "Navigation buttons not confirmed in source.", originalLocation: "CRF Data Entry section" },
  { claim: "PHI masking warning", reason: "PHI obfuscation mentioned but specific warning message not confirmed.", originalLocation: "CRF Data Entry section" },
  { claim: "ICH E6 GCP requirement for SDV", reason: "Regulatory claim not source-confirmed.", originalLocation: "SDV section" },
  { claim: "Excel export for SDV", reason: "Export format not confirmed for SDV specifically.", originalLocation: "SDV section" },
  { claim: "Partially Verified status", reason: "Status not confirmed in source.", originalLocation: "SDV section" },
  { claim: "Verification Reset button", reason: "Resetting SDV status confirmed but specific button name not verified.", originalLocation: "SDV section" },
  { claim: "Risk-Based SDV", reason: "Not confirmed as named Captivate Live feature.", originalLocation: "SDV section" },
  { claim: "Casebook PDF output", reason: "PDF format not confirmed. Casebook generation and download confirmed.", originalLocation: "Advanced Features" },
  { claim: "Auto-Coded Pending Acceptance", reason: "Status not confirmed. Confirmed: Not coded, Coded, Code Not Found.", originalLocation: "Medical Coding" },
  { claim: "confidence threshold", reason: "Not confirmed in source.", originalLocation: "Medical Coding" },
  { claim: "batch acceptance workflow", reason: "Not confirmed in source.", originalLocation: "Medical Coding" },
  { claim: "Query Listing Report", reason: "No official section with this name. Use Monitoring Queries and Annotations.", originalLocation: "Reports" },
  { claim: "Answered status", reason: "Not confirmed. Confirmed: Open, Updated, Closed.", originalLocation: "Reports" },
  { claim: "Start Remote Visit button", reason: "Invented button. Not in source.", originalLocation: "Data Monitoring" },
  { claim: "Generate Visit Report button", reason: "Invented button. Not in source.", originalLocation: "Data Monitoring" },
  { claim: "Visit Planned status", reason: "Invented status. Not in source.", originalLocation: "Data Monitoring" },
  { claim: "Unmark Complete", reason: "Not confirmed. Use Data Entry Started and Initial Data Entry Completed.", originalLocation: "CRF Statuses" },
  { claim: "Sign All Pending", reason: "Not confirmed in source.", originalLocation: "Signatures" },
  { claim: "Awaiting Signature status", reason: "Not confirmed in source.", originalLocation: "Signatures" }
]

export const needsReviewItems = [
  "User Roles & Permissions — exact workflow/checklist/warnings not fully confirmed",
  "Dashboard Overview — Refresh button, drill-down behavior, enrollment/open query widgets",
  "Auto-Code — full workflow details beyond button existence",
  "Query Listing Report — closest source is Monitoring Queries and Annotations",
  "Study Validation / Build Check — not standalone named feature",
  "eTMF / Study Docs — exact button labels and workflow details",
  "Partial Date Entry — CDISC compliance claim removed",
  "Reason for Change — exact reason-code examples",
  "Double Data Entry — exact button labels beyond source-confirmed statuses",
  "Event Status Overview — status interpretation details",
  "Calendared Events — Today/Filter buttons and color-coded statuses",
  "VDC — exact form status transitions and action availability"
]

export const proposedNotFoundItems = [
  "Risk-Based SDV — not confirmed as named feature",
  "Monitoring Visit Management — correct name is Data Monitoring / Review",
  "eTMF Integration — correct presentation is built-in document management",
  "Dashboard drag/drop exact behavior — useful but not source-confirmed",
  "Clickable chart drill-down — useful but not source-confirmed",
  "Query Answered status — not confirmed, use Updated",
  "Auto-Coded Pending Acceptance — not confirmed status",
  "confidence threshold — not confirmed",
  "batch acceptance workflow — not confirmed",
  "ICH E6 GCP requirement — regulatory claim not source-confirmed",
  "Excel export for SDV — format not confirmed",
  "Partially Verified status — not confirmed",
  "Verification Reset button — exact label not confirmed",
  "Unmark Complete — not confirmed",
  "Sign All Pending — not confirmed",
  "Awaiting Signature status — not confirmed"
]
