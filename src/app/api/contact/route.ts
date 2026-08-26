import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * NOTE: This is a placeholder backend. Field validation runs here, but
 * no email delivery is configured — the form does NOT actually send mail.
 * When wiring a provider (Resend, Nodemailer, etc.), deliver messages to:
 *   shahbaz1139141@gmail.com
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const email = String(data.email ?? "").trim();
  const details = String(data.details ?? "").trim();

  if (!firstName || !lastName || !details) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // TODO: integrate an email/notification provider here.
  return NextResponse.json({ ok: true });
}
