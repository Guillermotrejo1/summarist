import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SearchBar />
      <Sidebar />
      {children}
    </>
  );
};
export default Layout;