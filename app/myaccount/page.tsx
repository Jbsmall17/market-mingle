import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newletter from "@/components/Newletter";

export default function MyAccountPage() {
  return (
    <div>
      <Header />
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Account</h1>
            <p>Welcome to your account page. Here you can manage your profile, view orders, and more.</p>
            {/* Additional account management components can be added here */}
        </main>
      <Newletter />
      <Footer />
    </div>
  );
}