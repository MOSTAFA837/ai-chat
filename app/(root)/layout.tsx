import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />

      <div className="hidden md:flex mt-16 h-full w-[200px] border-r flex-col fixed inset-y-0 bg-global border-primary/10">
        <Sidebar isPro={false} />
      </div>

      <main className="md:pl-[220px] pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
