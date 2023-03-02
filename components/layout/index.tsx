import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";


type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
