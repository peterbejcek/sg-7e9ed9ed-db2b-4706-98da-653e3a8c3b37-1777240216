"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";

interface BookingFormProps {
  locale: "sk" | "en";
}

const translations = {
  sk: {
    title: "Rezervovať transfer",
    subtitle: "Vyplňte formulár a my vás budeme kontaktovať s potvrdením",
    pickupLocation: "Miesto vyzdvihnutia",
    pickupPlaceholder: "napr. Košice, Hlavná 1",
    destination: "Cieľ",
    destinationPlaceholder: "napr. Letisko Košice (KSC)",
    dateTime: "Dátum a čas",
    selectDate: "Vybrať dátum",
    passengers: "Počet pasažierov",
    selectPassengers: "Vybrať počet",
    package: "Balík",
    packagePlaceholder: "napr. Veľkosť batožiny",
    name: "Meno a priezvisko",
    namePlaceholder: "Vaše celé meno",
    phone: "Telefón",
    phonePlaceholder: "+421 XXX XXX XXX",
    email: "Email",
    emailPlaceholder: "vas@email.com",
    flightNumber: "Číslo letu",
    flightPlaceholder: "napr. LH1234",
    note: "Poznámka",
    notePlaceholder: "Akékoľvek špeciálne požiadavky...",
    quoteOnly: "Požadujem len cenovú ponuku (nie pevnú rezerváciu)",
    submit: "Objednať transfer",
    submitQuote: "Požiadať o cenovú ponuku",
    contactDetails: "Kontaktné údaje",
    sending: "Odosielam...",
    success: "Ďakujeme! Vaša objednávka bola odoslaná. Hneď vás budeme kontaktovať.",
    error: "Nastala chyba pri odosielaní. Skúste to prosím znova alebo nás kontaktujte telefonicky.",
  },
  en: {
    title: "Book Your Transfer",
    subtitle: "Fill out the form and we will contact you with confirmation",
    pickupLocation: "Pick-up Location",
    pickupPlaceholder: "e.g. Kosice, Main Street 1",
    destination: "Destination",
    destinationPlaceholder: "e.g. Kosice Airport (KSC)",
    dateTime: "Date and Time",
    selectDate: "Select date",
    passengers: "Number of Passengers",
    selectPassengers: "Select number",
    package: "Luggage",
    packagePlaceholder: "e.g. Luggage size/quantity",
    name: "Full Name",
    namePlaceholder: "Your full name",
    phone: "Phone",
    phonePlaceholder: "+421 XXX XXX XXX",
    email: "Email",
    emailPlaceholder: "your@email.com",
    flightNumber: "Flight Number",
    flightPlaceholder: "e.g. LH1234",
    note: "Additional Notes",
    notePlaceholder: "Any special requirements...",
    quoteOnly: "I am only requesting a price quote (not a firm booking)",
    submit: "Order Transfer",
    submitQuote: "Request Quote",
    contactDetails: "Contact Details",
    sending: "Sending...",
    success: "Thank you! Your booking has been sent. We will contact you shortly.",
    error: "An error occurred while sending. Please try again or contact us by phone.",
  },
};

export function BookingForm({ locale }: BookingFormProps) {
  const t = translations[locale];
  const [date, setDate] = useState<Date>();
  const [isQuoteOnly, setIsQuoteOnly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    pickupLocation: "",
    destination: "",
    time: "",
    passengers: "",
    package: "",
    name: "",
    phone: "",
    email: "",
    flightNumber: "",
    note: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: date ? format(date, "PPP") : "",
          isQuoteOnly,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          pickupLocation: "",
          destination: "",
          time: "",
          passengers: "",
          package: "",
          name: "",
          phone: "",
          email: "",
          flightNumber: "",
          note: "",
        });
        setDate(undefined);
        setIsQuoteOnly(false);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-muted via-background to-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.subtitle}
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800">
              {t.success}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800">
              {t.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border-2 border-border p-8 space-y-6">
            {/* Pick-up and Destination */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="pickup" className="text-base font-semibold">
                  {t.pickupLocation}
                </Label>
                <Input
                  id="pickup"
                  placeholder={t.pickupPlaceholder}
                  value={formData.pickupLocation}
                  onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="text-base font-semibold">
                  {t.destination}
                </Label>
                <Input
                  id="destination"
                  placeholder={t.destinationPlaceholder}
                  value={formData.destination}
                  onChange={(e) => handleInputChange("destination", e.target.value)}
                  className="h-11"
                  required
                />
              </div>
            </div>

            {/* Date/Time and Passengers */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-base font-semibold">{t.dateTime}</Label>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "flex-1 h-11 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{t.selectDate}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className="w-32 h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="passengers" className="text-base font-semibold">
                  {t.passengers}
                </Label>
                <Select
                  value={formData.passengers}
                  onValueChange={(value) => handleInputChange("passengers", value)}
                  required
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder={t.selectPassengers} />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? (locale === "sk" ? "pasažier" : "passenger") : (locale === "sk" ? "pasažieri" : "passengers")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Package/Luggage */}
            <div className="space-y-2">
              <Label htmlFor="package" className="text-base font-semibold">
                {t.package}
              </Label>
              <Input
                id="package"
                placeholder={t.packagePlaceholder}
                value={formData.package}
                onChange={(e) => handleInputChange("package", e.target.value)}
                className="h-11"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="font-heading font-semibold text-lg">{t.contactDetails}</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">
                  {t.name}
                </Label>
                <Input
                  id="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    {t.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    {t.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-11"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Flight Number */}
            <div className="space-y-2">
              <Label htmlFor="flightNumber" className="text-base font-semibold">
                {t.flightNumber}
              </Label>
              <Input
                id="flightNumber"
                placeholder={t.flightPlaceholder}
                value={formData.flightNumber}
                onChange={(e) => handleInputChange("flightNumber", e.target.value)}
                className="h-11"
              />
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="note" className="text-base font-semibold">
                {t.note}
              </Label>
              <Textarea
                id="note"
                placeholder={t.notePlaceholder}
                value={formData.note}
                onChange={(e) => handleInputChange("note", e.target.value)}
                className="min-h-24 resize-none"
              />
            </div>

            {/* Quote Only Toggle */}
            <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
              <Checkbox
                id="quoteOnly"
                checked={isQuoteOnly}
                onCheckedChange={(checked) => setIsQuoteOnly(checked as boolean)}
                className="mt-0.5"
              />
              <Label
                htmlFor="quoteOnly"
                className="text-sm font-medium leading-relaxed cursor-pointer"
              >
                {t.quoteOnly}
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? t.sending : (isQuoteOnly ? t.submitQuote : t.submit)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}