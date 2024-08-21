import { createContext, useState, useContext } from 'react';

export type NavbarContextType = {
  title: string;
  setTitle: (title: string) => void;
};


const NavbarContext = createContext<NavbarContextType>({
  title: 'Profiles App',
  setTitle: () => {},
});
 


export const NavbarProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [title, setTitle] = useState('Profiles App');
  
  return (
    <NavbarContext.Provider value={{ title, setTitle }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Navbar Hook
export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }

  return context;
};