import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  onFontSizeChange: (size: string) => void;
}

const Layout = ({ children, onFontSizeChange }: LayoutProps)  => {
  return (
    <>
      <SearchBar />
      <Sidebar onFontSizeChange={onFontSizeChange} />
      {children}
    </>
  );
};
export default Layout;