import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  onFontSizeChange: (size: string) => void;
  handleGuestLoginUpdate: (isGuestLoggedIn: boolean) => void;
}

const Layout = ({ children, onFontSizeChange, handleGuestLoginUpdate }: LayoutProps)  => {

    const handleGuestLogin = () => {
  setTimeout(() => {
    if (handleGuestLoginUpdate) {
      handleGuestLoginUpdate(true);
    }
  }, 3000);
};
  return (
    <>
      <SearchBar />
      <Sidebar onFontSizeChange={onFontSizeChange} handleGuestLoginUpdate={handleGuestLogin} />
      {children}
    </>
  );
};
export default Layout;