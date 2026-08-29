import Script from "next/script";

/** DJ Jeffrey Isaac GHL location WUKHpbDAraG4Q59Og5z2 — Check my date. */
const GHL_FORM_ID = "y1G7X7yjyZ1GxVTwZR00";
const GHL_FORM_SRC = `https://ai.besttalkyet.com/widget/form/${GHL_FORM_ID}`;
const GHL_EMBED_SCRIPT = "https://ai.besttalkyet.com/js/form_embed.js";
const GHL_FORM_HEIGHT = 1234;

export function InquireForm() {
  return (
    <div className="form ghl-form">
      {/* GHL_FORM_EMBED */}
      <iframe
        src={GHL_FORM_SRC}
        style={{
          width: "100%",
          height: `${GHL_FORM_HEIGHT}px`,
          border: "none",
          borderRadius: 8,
        }}
        id={`inline-${GHL_FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Check my date"
        data-height={String(GHL_FORM_HEIGHT)}
        data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
        data-form-id={GHL_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Check my date"
      />
      <Script src={GHL_EMBED_SCRIPT} strategy="afterInteractive" />
    </div>
  );
}
