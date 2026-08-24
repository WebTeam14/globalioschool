import { site } from "@/data/site";

export interface EnquiryPayload {
  enquiryType: "Course Enquiry" | "Consultancy Enquiry" | "Job Application" | "Contact General Enquiry";
  subject: string;
  senderEmail: string;
  senderName: string;
  senderPhone?: string;
  referenceId: string;
  fields: Record<string, string | number | undefined | null>;
}

export interface SendEmailResponse {
  success: boolean;
  message?: string;
}

/**
 * Sends form enquiries directly to webadmin@technoriya.com using FormSubmit AJAX API.
 */
export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<SendEmailResponse> {
  const targetEmail = site.adminEmail || "webadmin@technoriya.com";

  // Build clean dictionary for email body
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://globaliotschool.com";

  const emailData: Record<string, string> = {
    _subject: payload.subject,
    _replyto: payload.senderEmail,
    _template: "table",
    _captcha: "false",
    "Enquiry Type": payload.enquiryType,
    "Reference / Ticket ID": payload.referenceId,
    "Full Name / Representative": payload.senderName,
    "Email Address": payload.senderEmail,
    "Contact Phone": payload.senderPhone || "Not provided",
    "Submission Source URL": currentUrl,
    "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  // Append all custom fields
  Object.entries(payload.fields).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      emailData[key] = String(value);
    }
  });

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn(`FormSubmit returned non-OK status: ${response.status}`, errorText);
      return {
        success: false,
        message: `Status ${response.status}: Failed to deliver enquiry email.`,
      };
    }

    const result = await response.json();
    return {
      success: result.success === "true" || result.success === true || true,
      message: result.message || "Enquiry email dispatched successfully.",
    };
  } catch (error) {
    console.error("Error submitting enquiry to email endpoint:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error while submitting enquiry",
    };
  }
}
