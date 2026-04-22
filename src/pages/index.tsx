import { SEO } from "@/components/SEO";
import { LanguageSwitch, useLocale } from "@/components/LanguageSwitch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, CheckCircle2, Users, Baby, MapPin, ArrowRight, Star } from "lucide-react";

const translations = {
  sk: {
    nav: {
      services: "Služby",
      routes: "Trasy",
      benefits: "Výhody",
      contact: "Kontakt",
    },
    hero: {
      title: "Spoľahlivé letiskové transfery",
      subtitle: "Bezpečná a pohodlná preprava na letisko Košice a Budapešť",
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
    },
    routes: {
      title: "Naše hlavné trasy",
      ksc: {
        title: "Košice ↔ Letisko Košice (KSC)",
        desc: "Rýchla preprava medzi centrom mesta a letiskom",
        duration: "15-20 min",
      },
      bud: {
        title: "Košice ↔ Letisko Budapešť (BUD)",
        desc: "Pohodlný medzinárodný transfer",
        duration: "3-3.5 hod",
      },
      viewAll: "Zobraziť všetky trasy",
    },
    cta: {
      title: "Pripravení na váš ďalší transfer?",
      subtitle: "Rezervujte si svoj spolehlivý letiskový transfer už teraz",
      button: "Rezervovať teraz",
    },
    footer: {
      tagline: "Váš spoľahlivý partner pre letiskové transfery v Košiciach",
      rights: "Všetky práva vyhradené",
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
      title: "Reliable Airport Transfers",
      subtitle: "Safe and comfortable transportation to Kosice and Budapest airports",
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
    },
    routes: {
      title: "Our Main Routes",
      ksc: {
        title: "Kosice ↔ Kosice Airport (KSC)",
        desc: "Quick transfer between city center and airport",
        duration: "15-20 min",
      },
      bud: {
        title: "Kosice ↔ Budapest Airport (BUD)",
        desc: "Comfortable international transfer",
        duration: "3-3.5 hrs",
      },
      viewAll: "View All Routes",
    },
    cta: {
      title: "Ready for Your Next Transfer?",
      subtitle: "Book your reliable airport transfer now",
      button: "Book Now",
    },
    footer: {
      tagline: "Your reliable partner for airport transfers in Kosice",
      rights: "All rights reserved",
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
              <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {t.nav.benefits}
              </a>
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Phone className="h-4 w-4 mr-1.5" />
                {t.nav.contact}
              </Button>
              <LanguageSwitch />
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Phone className="h-4 w-4" />
              </Button>
              <LanguageSwitch />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070')] bg-cover bg-center opacity-10" />
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
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur text-base font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  {t.hero.phone}
                </Button>
              </div>
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
              <div className="flex items-center gap-3 bg-white px-8 py-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="font-heading font-bold text-2xl text-primary">Najpax Taxi</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white px-8 py-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <span className="font-heading font-bold text-2xl text-primary">E-taxi Košice</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section id="benefits" className="py-20">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              {t.benefits.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            </div>
          </div>
        </section>

        {/* Routes */}
        <section id="routes" className="py-20 bg-muted">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              {t.routes.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                      {t.routes.ksc.duration}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">{t.routes.ksc.title}</CardTitle>
                  <CardDescription className="text-base">{t.routes.ksc.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="h-8 w-8 text-secondary" />
                    <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                      {t.routes.bud.duration}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">{t.routes.bud.title}</CardTitle>
                  <CardDescription className="text-base">{t.routes.bud.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold">
                {t.cta.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 bg-muted">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-xl text-primary">letiskokosice.taxi</span>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground mb-1">{t.footer.tagline}</p>
                <p className="text-sm text-muted-foreground">© 2026 letiskokosice.taxi. {t.footer.rights}.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}