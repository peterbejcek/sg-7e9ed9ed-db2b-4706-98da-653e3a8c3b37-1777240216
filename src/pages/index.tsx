import { SEO } from "@/components/SEO";
import { LanguageSwitch, useLocale } from "@/components/LanguageSwitch";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, CheckCircle2, Users, Baby, MapPin, ArrowRight, Star, CreditCard, FileText, Car, Facebook, Instagram, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const translations = {
  sk: {
    nav: {
      services: "Služby",
      routes: "Trasy",
      benefits: "Výhody",
      contact: "Kontakt",
    },
    hero: {
      title: "Spoľahlivá doprava na letisko bez stresu.",
      subtitle: "Profesionálny transfer z Košíc na letiská Košice a Budapešť. Jazdite s Najpax Taxi a E-taxi.",
      availability: "Dostupní 24/7 • Okamžité potvrdenie",
      cta: "Rezervovať transfer",
      phone: "Zavolať teraz",
    },
    partners: {
      title: "Služby poskytované osvedčenými partnermi",
      description: "Spolupracujeme s najrenomovanejšími taxislužbami v Košiciach pre váš komfort a bezpečnosť",
    },
    benefits: {
      title: "Prečo si vybrať nás",
      fixed: {
        title: "Fixné ceny",
        desc: "Žiadne skryté poplatky. Cena je daná vopred.",
      },
      drivers: {
        title: "Profesionálni vodiči",
        desc: "Skúsení, licencovaní vodiči s miestnou znalosťou.",
      },
      meet: {
        title: "Meet & Greet",
        desc: "Stretneme vás na letisku s menovkou.",
      },
      seats: {
        title: "Detské sedačky",
        desc: "Bezplatné detské sedačky na požiadanie.",
      },
      card: {
        title: "Platba kartou",
        desc: "Pohodlne zaplatíte kartou alebo hotovosťou v každom vozidle.",
      },
      invoice: {
        title: "Platba na faktúru",
        desc: "Pre firemných zákazníkov pri hromadných objednávkach individuálna cenová ponuka.",
      },
      carprice: {
        title: "Cena za auto",
        desc: "Bez ohľadu na počet osôb a batožiny do max kapacity vozidla.",
      },
    },
    routes: {
      title: "Naše hlavné trasy",
      ksc: {
        title: "Košice ↔ Letisko Košice (KSC)",
        desc: "Rýchla preprava medzi centrom mesta a letiskom",
        price: "od 18€",
        duration: "15-20 min",
      },
      bud: {
        title: "Košice ↔ Letisko Budapešť (BUD)",
        desc: "Transfer na letisko Budapešť. Komfortné vozidlá a skúsení vodiči.",
        price: "od 250€",
        duration: "3-3.5 hod",
      },
      krk: {
        title: "Košice ↔ Letisko Krakov (KRK)",
        desc: "Pohodlný transfer na letisko v Krakove",
        price: "od 290€",
        duration: "4-4.5 hod",
      },
      viewAll: "Zobraziť všetky trasy",
    },
    faq: {
      title: "Často kladené otázky",
      subtitle: "Odpovede na najčastejšie otázky o našich službách",
      items: [
        {
          q: "Ako si môžem rezervovať transfer?",
          a: "Transfer si môžete rezervovať telefonicky na +421 902 266 044, emailom na info@letiskokosice.taxi, alebo cez rezervačný formulár na tejto stránke. Po prijatí rezervácie vám pošleme potvrdenie.",
        },
        {
          q: "Aké sú platobné možnosti?",
          a: "Platbu môžete uskutočniť v hotovosti alebo kartou priamo vo vozidle. Pre firemných zákazníkov ponúkame platbu na faktúru pri hromadných objednávkach.",
        },
        {
          q: "Čo zahŕňa cena transferu?",
          a: "Cena zahŕňa prepravu, čakanie vodiča pri prílete (meet & greet), palivo, diaľničné poplatky a detské sedačky ak sú potrebné. Cena je fixná bez ohľadu na počet cestujúcich a batožiny do maximálnej kapacity vozidla.",
        },
        {
          q: "Ako prebieha meet & greet služba?",
          a: "Pri prílete na letisko vás náš vodič očakáva v príletovej hale s menovkou s vaším menom. Sledujeme čas príletu lietadla, takže aj pri meškaní vás vodič počká.",
        },
        {
          q: "Sú k dispozícii detské sedačky?",
          a: "Áno, detské sedačky poskytujeme bezplatne na požiadanie. Prosím uveďte vek a počet detí pri rezervácii, aby sme pripravili vhodné sedačky.",
        },
        {
          q: "Koľko batožiny môžem vziať so sebou?",
          a: "Štandardne môžete prepravovať batožinu pre 3-4 osoby (kufor + príručná batožina na osobu). Pre väčšie množstvo batožiny nás kontaktujte vopred a prispôsobíme vozidlo.",
        },
        {
          q: "Aké sú podmienky stornovania?",
          a: "Rezerváciu môžete zrušiť bezplatne až do 24 hodín pred plánovaným transferom. Pri storovaní v kratšom čase si vyhradzujeme právo účtovať storno poplatok.",
        },
        {
          q: "Ako dlho vopred mám rezervovať transfer?",
          a: "Odporúčame rezervovať aspoň 24 hodín vopred. V prípade naliehavej potreby nás kontaktujte telefonicky - pokúsime sa vyhovieť aj krátkodobým požiadavkám.",
        },
      ],
    },
    cta: {
      title: "Pripravení na váš ďalší transfer?",
      subtitle: "Rezervujte si svoj spolehlivý letiskový transfer už teraz",
      button: "Rezervovať teraz",
    },
    footer: {
      tagline: "Váš spoľahlivý partner pre letiskové transfery v Košiciach",
      rights: "Všetky práva vyhradené",
      contact: {
        title: "Kontakt",
        phone: "+421 902 266 044",
        email: "letiskokosicetaxi@gmail.com",
      },
      gdpr: "Ochrana osobných údajov (GDPR)",
      partners: "Partnerské služby",
    },
  },
  en: {
    nav: {
      services: "Services",
      routes: "Routes",
      benefits: "Benefits",
      contact: "Contact",
    },
    hero: {
      title: "Reliable Stress-Free Airport Transportation.",
      subtitle: "Professional transfers from Kosice to Kosice and Budapest airports. Travel with Najpax Taxi and E-taxi.",
      availability: "Available 24/7 • Instant Confirmation",
      cta: "Book Transfer",
      phone: "Call Now",
    },
    partners: {
      title: "Services Provided by Trusted Partners",
      description: "We partner with the most reputable taxi services in Kosice for your comfort and safety",
    },
    benefits: {
      title: "Why Choose Us",
      fixed: {
        title: "Fixed Prices",
        desc: "No hidden fees. Price set in advance.",
      },
      drivers: {
        title: "Professional Drivers",
        desc: "Experienced, licensed drivers with local knowledge.",
      },
      meet: {
        title: "Meet & Greet",
        desc: "We'll meet you at the airport with a name sign.",
      },
      seats: {
        title: "Child Seats",
        desc: "Free child seats available on request.",
      },
      card: {
        title: "Card Payment",
        desc: "Conveniently pay by card or cash in every vehicle.",
      },
      invoice: {
        title: "Invoice Payment",
        desc: "For corporate clients with bulk orders, individual price quotes available.",
      },
      carprice: {
        title: "Price Per Car",
        desc: "Regardless of number of passengers and luggage up to max vehicle capacity.",
      },
    },
    routes: {
      title: "Our Main Routes",
      ksc: {
        title: "Kosice ↔ Kosice Airport (KSC)",
        desc: "Quick transfer between city center and airport",
        price: "from €18",
        duration: "15-20 min",
      },
      bud: {
        title: "Kosice ↔ Budapest Airport (BUD)",
        desc: "Transfer to Budapest Airport. Comfortable vehicles and experienced drivers.",
        price: "from €250",
        duration: "3-3.5 hrs",
      },
      krk: {
        title: "Kosice ↔ Krakow Airport (KRK)",
        desc: "Comfortable transfer to Krakow Airport",
        price: "from €290",
        duration: "4-4.5 hrs",
      },
      viewAll: "View All Routes",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our services",
      items: [
        {
          q: "How can I book a transfer?",
          a: "You can book a transfer by phone at +421 902 266 044, by email at info@letiskokosice.taxi, or via the booking form on this page. We will send you a confirmation after receiving your reservation.",
        },
        {
          q: "What are the payment options?",
          a: "You can pay in cash or by card directly in the vehicle. For corporate clients, we offer invoice payment for bulk orders.",
        },
        {
          q: "What does the transfer price include?",
          a: "The price includes transportation, driver waiting at arrival (meet & greet), fuel, toll fees, and child seats if needed. The price is fixed regardless of the number of passengers and luggage up to the maximum vehicle capacity.",
        },
        {
          q: "How does the meet & greet service work?",
          a: "Upon arrival at the airport, our driver will be waiting for you in the arrivals hall with a name sign. We track flight arrival times, so even if delayed, the driver will wait.",
        },
        {
          q: "Are child seats available?",
          a: "Yes, we provide child seats free of charge upon request. Please specify the age and number of children when booking so we can prepare appropriate seats.",
        },
        {
          q: "How much luggage can I bring?",
          a: "Typically, you can transport luggage for 3-4 people (suitcase + hand luggage per person). For larger amounts of luggage, contact us in advance and we will arrange an appropriate vehicle.",
        },
        {
          q: "What are the cancellation conditions?",
          a: "You can cancel your reservation free of charge up to 24 hours before the planned transfer. For cancellations made within a shorter timeframe, we reserve the right to charge a cancellation fee.",
        },
        {
          q: "How far in advance should I book a transfer?",
          a: "We recommend booking at least 24 hours in advance. In case of urgent need, contact us by phone - we will try to accommodate last-minute requests.",
        },
      ],
    },
    cta: {
      title: "Ready for Your Next Transfer?",
      subtitle: "Book your reliable airport transfer now",
      button: "Book Now",
    },
    footer: {
      tagline: "Your reliable partner for airport transfers in Kosice",
      rights: "All rights reserved",
      contact: {
        title: "Contact",
        phone: "+421 902 266 044",
        email: "letiskokosicetaxi@gmail.com",
      },
      gdpr: "Privacy Policy (GDPR)",
      partners: "Partner Services",
    },
  },
};

export default function Home() {
  const locale = useLocale();
  const t = translations[locale];

  return (
    <>
      <SEO
        title="letiskokosice.taxi - Reliable Airport Transfers Kosice"
        description="Professional airport taxi service for Kosice Airport (KSC) and Budapest Airport (BUD). Fixed prices, 24/7 availability, meet & greet service."
        image="/og-image.png"
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-xl text-primary">letiskokosice.taxi</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.services}
              </a>
              <a href="#routes" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.routes}
              </a>
              <a href="tel:+421902266044" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                <Phone className="h-4 w-4" />
                +421 902 266 044
              </a>
              <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.benefits}
              </a>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#booking">
                  {t.nav.contact}
                </a>
              </Button>
              <LanguageSwitch />
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href="tel:+421902266044">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <LanguageSwitch />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90" variant="secondary">
                <Clock className="h-3.5 w-3.5 mr-1.5" />
                {t.hero.availability}
              </Badge>
              
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold" asChild>
                  <a href="#booking">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur text-base font-semibold" asChild>
                  <a href="tel:+421902266044">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.hero.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Vehicle Showcase */}
          <div className="container relative mt-16">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/0025BE44-15A2-4EA2-BC76-4C5387C2D68A.png" 
                  alt="VW Passat GTE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">VW Passat GTE</p>
                  <p className="text-white/80 text-sm">Komfortné, pohodlné a tiché</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/AAEC9922-6351-4B69-8648-F549B9D17900.png" 
                  alt="Tesla Model 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">Tesla Model 3</p>
                  <p className="text-white/80 text-sm">Ekologické tiché komfortne</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/19CE48D0-E401-4811-BACC-3B72386A0A23.png" 
                  alt="Toyota Corolla Hybrid"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">Toyota Corolla Hybrid</p>
                  <p className="text-white/80 text-sm">Priestranné tiché ekologické</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-white/90 text-lg font-medium">
                Celkovo 14 vozidiel, všetky čisté, klimatizované a udržiavané v dobrom technickom stave
              </p>
            </div>
          </div>
        </section>

        {/* Service Partners */}
        <section id="services" className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.partners.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t.partners.description}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <a 
                href="https://www.najpaxtaxikosice.sk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-8 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="font-heading font-bold text-2xl text-primary">Najpax Taxi</span>
              </a>
              
              <a 
                href="https://e-taxike.sk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-8 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="font-heading font-bold text-2xl text-primary">E-taxi Košice</span>
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section id="benefits" className="py-20">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              {t.benefits.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.fixed.title}</CardTitle>
                  <CardDescription>{t.benefits.fixed.desc}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.drivers.title}</CardTitle>
                  <CardDescription>{t.benefits.drivers.desc}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.meet.title}</CardTitle>
                  <CardDescription>{t.benefits.meet.desc}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Baby className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.seats.title}</CardTitle>
                  <CardDescription>{t.benefits.seats.desc}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.card.title}</CardTitle>
                  <CardDescription>{t.benefits.card.desc}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.invoice.title}</CardTitle>
                  <CardDescription>{t.benefits.invoice.desc}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">{t.benefits.carprice.title}</CardTitle>
                  <CardDescription>{t.benefits.carprice.desc}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Routes */}
        <section id="routes" className="py-20 bg-muted">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              {t.routes.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/IMG_1271.png" 
                    alt="Košice Airport terminal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/95 text-primary backdrop-blur">
                      {t.routes.ksc.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      {t.routes.ksc.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{t.routes.ksc.title}</CardTitle>
                  <CardDescription className="text-base">{t.routes.ksc.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <a href="#booking">
                      {t.hero.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=1600&auto=format&fit=crop" 
                    alt="Budapest Airport with airplane"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/95 text-secondary backdrop-blur">
                      {t.routes.bud.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      {t.routes.bud.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{t.routes.bud.title}</CardTitle>
                  <CardDescription className="text-base">{t.routes.bud.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <a href="#booking">
                      {t.hero.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1600&auto=format&fit=crop" 
                    alt="Krakow Airport terminal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/95 text-primary backdrop-blur">
                      {t.routes.krk.duration}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold">
                      {t.routes.krk.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{t.routes.krk.title}</CardTitle>
                  <CardDescription className="text-base">{t.routes.krk.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <a href="#booking">
                      {t.hero.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.faq.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {t.faq.items.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-2 border-border rounded-lg px-6 data-[state=open]:border-accent/50"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <BookingForm locale={locale} />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                {t.cta.title}
              </h2>
              <p className="text-lg text-white/90 mb-8">
                {t.cta.subtitle}
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold" asChild>
                <a href="#booking">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-heading font-bold text-xl text-primary">letiskokosice.taxi</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.footer.tagline}
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-heading font-semibold text-base mb-4">{t.footer.contact.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+421902266044" className="hover:text-foreground transition-colors">
                      {t.footer.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:letiskokosicetaxi@gmail.com" className="hover:text-foreground transition-colors">
                      {t.footer.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Partners */}
              <div>
                <h3 className="font-heading font-semibold text-base mb-4">{t.footer.partners}</h3>
                <div className="space-y-3">
                  <a 
                    href="https://www.najpaxtaxikosice.sk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Najpax Taxi</span>
                  </a>
                  <a 
                    href="https://e-taxike.sk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">E-taxi Košice</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & Legal Links */}
            <div className="py-6 border-t border-border">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.facebook.com/share/1ZCQUxaQJ8/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a 
                    href="https://www.instagram.com/letiskokosice.taxi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <a href="#gdpr" className="hover:text-foreground transition-colors">
                    {t.footer.gdpr}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2026 letiskokosice.taxi. {t.footer.rights}.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}