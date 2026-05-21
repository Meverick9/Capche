export const metadata = {
  title: "Captivate Live 4.4 - Feature Catalog & Training Guide",
  description: "Source-accurate feature catalog and training guide for ClinCapture Captivate Live v4.4"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}