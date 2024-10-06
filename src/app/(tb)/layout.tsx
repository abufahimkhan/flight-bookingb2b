import Logo from "@/components/common/Logo";
import SidebarCollapse from "@/components/tb-b2b/sidebar/SidebarCollapse";
import SidebarExpand from "@/components/tb-b2b/sidebar/SidebarExpand";
import Header from "@/components/tb-b2b/top-header/Header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-full grid grid-rows-[80px_1fr] grid-cols-[100px_1fr] bg-slate-100 h-screen duration-500">
      <div className="flex items-center h-full col-span-2 bg-secondary-main">
        <Logo className="min-w-[280px] z-10 h-full flex items-center justify-center " />
        <Header />
      </div>

      <div className="relative group col-span-1 z-10 min-w-[100px] hover:min-w-[280px] duration-300 overflow-x-hidden overflow-y-auto min-h-full shadow-xl">
        <SidebarCollapse className="group-hover:hidden duration-75" />
        <SidebarExpand className="hidden group-hover:block duration-75" />
      </div>

      <main className="col-span-1 h-full overflow-y-auto">{children}</main>
    </section>
  );
}
