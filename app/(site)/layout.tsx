import { WebProvider } from "@/contexts/WebContext";
import "../globals.css";
import { Background, DummyDiv, Header, ThemeProvider } from "@/components";
import { ProductsProvider } from "@/contexts/ProductsContext";

export const metadata = {
  title: "Keezy Accessories",
  description: "Generated by Nextjs, Typescript, Sanity & Tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        <ThemeProvider>
          <WebProvider>
            {/* <ProductsProvider> */}
            <>
              <Background />
              <Header />
              {children}
              <DummyDiv />
            </>
            {/* </ProductsProvider> */}
          </WebProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
