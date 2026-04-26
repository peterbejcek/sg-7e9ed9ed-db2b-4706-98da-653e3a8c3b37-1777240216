import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    pickupLocation,
    destination,
    date,
    time,
    passengers,
    package: pkg,
    name,
    phone,
    email,
    flightNumber,
    note,
    isQuoteOnly,
  } = req.body;

  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to business
    const businessEmailContent = `
Nová objednávka transferu z letiskokosice.taxi

Typ požiadavky: ${isQuoteOnly ? "Cenová ponuka" : "Rezervácia"}

=== Detaily transferu ===
Miesto vyzdvihnutia: ${pickupLocation}
Cieľ: ${destination}
Dátum: ${date}
Čas: ${time}
Počet pasažierov: ${passengers}
Batožina: ${pkg || "Neuvedené"}

=== Kontaktné údaje ===
Meno: ${name}
Telefón: ${phone}
Email: ${email}
Číslo letu: ${flightNumber || "Neuvedené"}

=== Poznámka ===
${note || "Žiadna poznámka"}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: "letiskokosicetaxi@gmail.com",
      subject: `${isQuoteOnly ? "Dopyt o cenovú ponuku" : "Nová objednávka transferu"} - ${name}`,
      text: businessEmailContent,
    });

    // Confirmation email to customer
    const customerEmailContent = `
Dobrý deň ${name},

Váš dopyt na prepravu sme zaznamenali, hneď ako ho spracujeme, budeme Vás kontaktovať.

=== Vaše údaje ===
Miesto vyzdvihnutia: ${pickupLocation}
Cieľ: ${destination}
Dátum: ${date}
Čas: ${time}
Počet pasažierov: ${passengers}
Batožina: ${pkg || "Neuvedené"}
Číslo letu: ${flightNumber || "Neuvedené"}
${note ? `Poznámka: ${note}` : ""}

Tím LetiskoKosice.taxi
Tel: +421 902 266 044
Email: letiskokosicetaxi@gmail.com
    `;

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: isQuoteOnly
        ? "Potvrdenie dopytu o cenovú ponuku - letiskokosice.taxi"
        : "Potvrdenie rezervácie - letiskokosice.taxi",
      text: customerEmailContent,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}