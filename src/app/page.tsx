"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Star, TrendingUp, Users, MessageCircle, MapPin, Instagram, Linkedin, Twitter, Globe, Award } from "lucide-react";

const assetMap = [
  {"id":"hero-coffee-shop","url":"https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A bustling café in Miami with people enjoying a lively atmosphere and stylish interior design."},
  {"id":"about-coffee-beans","url":"https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of freshly roasted coffee beans in a large industrial coffee roaster, showcasing rich textures and warm tones."},
  {"id":"feature-latte-art","url":"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista pouring milk to create latte art in a coffee cup."},
  {"id":"feature-espresso-machine","url":"https://images.pexels.com/photos/1835900/pexels-photo-1835900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Espresso shot being brewed in modern machine with focus on fresh coffee in café setting."},
  {"id":"feature-coffee-roasting","url":"https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Crop unrecognizable horticulturists separating raw coffee beans from chaff over bamboo tray while working in countryside"},
  {"id":"product-espresso","url":"https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a white cup of latte with artistic foam on a rustic wooden table."},
  {"id":"product-cappuccino","url":"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista pouring milk to create latte art in a coffee cup."},
  {"id":"product-cold-brew","url":"https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Refreshing iced coffee with visible ice cubes from above, showcasing chilled beverage."},
  {"id":"metric-customers","url":"https://images.pexels.com/photos/5710147/pexels-photo-5710147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women sharing laughter and joy over coffee cups in a cozy cafe setting."},
  {"id":"metric-awards","url":"https://images.pexels.com/photos/2190139/pexels-photo-2190139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Football team celebrating their national championship victory with trophy and media."},
  {"id":"team-head-barista","url":"https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A focused barista prepares a drink behind a counter in a stylish café setting."},
  {"id":"team-coffee-roaster","url":"https://images.pexels.com/photos/4820819/pexels-photo-4820819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A worker in a coffee roastery operating equipment, processing fresh beans in an industrial setting."},
  {"id":"testimonial-customer-1","url":"https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young adults enjoy a relaxed conversation and coffee in a stylish urban café."},
  {"id":"testimonial-customer-2","url":"https://images.pexels.com/photos/3789206/pexels-photo-3789206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elderly man in a suit drinks coffee outdoors while holding a tablet."},
  {"id":"testimonial-customer-3","url":"https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint."},
  {"id":"testimonial-customer-4","url":"https://images.pexels.com/photos/9566360/pexels-photo-9566360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Stylish indoor scene with a man reading a newspaper and a woman in a black dress at a bar."},
  {"id":"contact-coffee-shop-exterior","url":"https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cozy Starbucks café in Norwich with inviting exterior lights and seating at night."}
];

function getAssetUrl(assetId: string): string {
  const asset = assetMap.find(a => a.id === assetId);
  return asset?.url || "/public/images/placeholder.webp";
}

function getAssetAlt(assetId: string): string {
  const asset = assetMap.find(a => a.id === assetId);
  return asset?.alt || "Image";
}

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Location", id: "location" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BrewCo"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Crafted Coffee, Perfect Moments"
          description="Experience the finest artisanal coffee in our cozy neighborhood cafe. From expertly roasted beans to handcrafted beverages, every cup tells a story."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us", href: "location" }
          ]}
          imageSrc={getAssetUrl("hero-coffee-shop")}
          imageAlt={getAssetAlt("hero-coffee-shop")}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 2018, BrewCo began as a passion project to bring exceptional coffee to our community. We source the finest beans from sustainable farms around the world.",
            "Our expert roasters craft each batch with precision and care, ensuring every cup delivers the perfect balance of flavor, aroma, and satisfaction."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="What Makes Us Special"
          description="Discover the craftsmanship and passion behind every cup we serve"
          tag="Quality"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Expert Baristas",
              description: "Our skilled baristas create perfect latte art and brew each cup with precision and care",
              imageSrc: getAssetUrl("feature-latte-art"),
              imageAlt: getAssetAlt("feature-latte-art")
            },
            {
              id: "02",
              title: "Premium Equipment",
              description: "State-of-the-art espresso machines and brewing equipment for consistent quality",
              imageSrc: getAssetUrl("feature-espresso-machine"),
              imageAlt: getAssetAlt("feature-espresso-machine")
            },
            {
              id: "03",
              title: "Fresh Roasted Daily",
              description: "We roast our beans in-house daily to ensure maximum freshness and flavor",
              imageSrc: getAssetUrl("feature-coffee-roasting"),
              imageAlt: getAssetAlt("feature-coffee-roasting")
            }
          ]}
          layout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Our Signature Beverages"
          description="Handcrafted drinks made with love and premium ingredients"
          tag="Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              name: "House Espresso",
              price: "$3.50",
              imageSrc: getAssetUrl("product-espresso"),
              imageAlt: getAssetAlt("product-espresso")
            },
            {
              id: "2",
              name: "Artisan Cappuccino",
              price: "$4.75",
              imageSrc: getAssetUrl("product-cappuccino"),
              imageAlt: getAssetAlt("product-cappuccino")
            },
            {
              id: "3",
              name: "Cold Brew Special",
              price: "$4.25",
              imageSrc: getAssetUrl("product-cold-brew"),
              imageAlt: getAssetAlt("product-cold-brew")
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Coffee Excellence"
          description="Numbers that reflect our commitment to quality and community"
          tag="Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Happy Customers",
              description: "Coffee lovers served with passion",
              icon: Users
            },
            {
              id: "2",
              value: "15",
              title: "Awards Won",
              description: "Recognition for coffee excellence",
              icon: Award
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Coffee Experts"
          description="The passionate people behind your perfect cup"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Rodriguez",
              role: "Head Barista",
              description: "With 8 years of experience in specialty coffee, Marcus leads our team with expertise in brewing techniques and latte art mastery.",
              imageSrc: getAssetUrl("team-head-barista"),
              imageAlt: getAssetAlt("team-head-barista"),
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/marcusbrews" },
                { icon: Linkedin, url: "https://linkedin.com/in/marcus-rodriguez" }
              ]
            },
            {
              id: "2",
              name: "Elena Kowalski",
              role: "Coffee Roaster",
              description: "Elena sources and roasts our beans with precision, bringing out unique flavors from farms around the world.",
              imageSrc: getAssetUrl("team-coffee-roaster"),
              imageAlt: getAssetAlt("team-coffee-roaster"),
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/elenaroasts" },
                { icon: Globe, url: "https://elenakowalski.com" }
              ]
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from our coffee community"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Freelance Writer",
              company: "Creative Studios",
              rating: 5,
              imageSrc: getAssetUrl("testimonial-customer-1"),
              imageAlt: getAssetAlt("testimonial-customer-1")
            },
            {
              id: "2",
              name: "David Chen",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: getAssetUrl("testimonial-customer-2"),
              imageAlt: getAssetAlt("testimonial-customer-2")
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Graduate Student",
              company: "State University",
              rating: 5,
              imageSrc: getAssetUrl("testimonial-customer-3"),
              imageAlt: getAssetAlt("testimonial-customer-3")
            },
            {
              id: "4",
              name: "Robert Wilson",
              role: "Retired Teacher",
              company: "Community Volunteer",
              rating: 5,
              imageSrc: getAssetUrl("testimonial-customer-4"),
              imageAlt: getAssetAlt("testimonial-customer-4")
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Find Your Perfect Coffee Spot"
          description="Join our community of coffee lovers and stay updated with new blends, events, and special offers."
          tagIcon={MapPin}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you'll receive our weekly newsletter with coffee tips and exclusive offers."
          imageSrc={getAssetUrl("contact-coffee-shop-exterior")}
          imageAlt={getAssetAlt("contact-coffee-shop-exterior")}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "menu" },
                { label: "Pastries", href: "menu" },
                { label: "Specialty Drinks", href: "menu" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Team", href: "team" },
                { label: "Sourcing", href: "about" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location", href: "location" },
                { label: "Hours", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2024 | BrewCo Coffee"
        />
      </div>
    </ThemeProvider>
  );
}