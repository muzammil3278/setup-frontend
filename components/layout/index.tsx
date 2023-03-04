import dynamic from "next/dynamic";
const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const Navbar = dynamic(() => import("./navbar"));
const Instragram = dynamic(() => import("./instragram"));
const Newsletter = dynamic(() => import("./newsletter"));

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Newsletter />
      <Instragram />
      <Footer />
    </>
  );
}
