import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevatesportsgarage.com"),
  title: {
    default: "Elevate Sports Garage | Canyon Lake's Premier Batting Facility",
    template: "%s | Elevate Sports Garage",
  },
  description:
    "Professional-grade batting cages equipped with state-of-the-art pitching machines for baseball and softball players of all skill levels in Canyon Lake, Texas.",
  keywords: [
    "batting cages",
    "baseball training",
    "softball training",
    "Canyon Lake",
    "Texas",
    "sports facility",
    "batting practice",
    "pitching machines",
  ],
  authors: [{ name: "Elevate Sports Garage" }],
  creator: "Elevate Sports Garage",
  publisher: "Elevate Sports Garage",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Elevate Sports Garage | Canyon Lake's Premier Batting Facility",
    description:
      "Professional-grade batting cages equipped with state-of-the-art pitching machines for baseball and softball players of all skill levels in Canyon Lake, Texas.",
    url: "https://elevatesportsgarage.com",
    siteName: "Elevate Sports Garage",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Elevate Sports Garage Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Sports Garage | Canyon Lake's Premier Batting Facility",
    description:
      "Professional-grade batting cages equipped with state-of-the-art pitching machines for baseball and softball players of all skill levels in Canyon Lake, Texas.",
    images: ["/logo.png"],
    creator: "@elevatesports",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://elevatesportsgarage.com",
  },
};

// Add JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Elevate Sports Garage",
  description:
    "Professional-grade batting cages equipped with state-of-the-art pitching machines for baseball and softball players of all skill levels.",
  url: "https://elevatesportsgarage.com",
  telephone: "+1-xxx-xxx-xxxx", // Add actual phone number
  address: {
    "@type": "PostalAddress",
    streetAddress: "1270 Old Sattler Rd",
    addressLocality: "Canyon Lake",
    addressRegion: "TX",
    postalCode: "78133",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.839593828142593,
    longitude: -98.25848458842549,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    // Add social media links
    "https://facebook.com/elevatesportsgarage",
    "https://instagram.com/elevatesportsgarage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
