import {useDisclosure, UseDisclosureReturn} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {createContext, ReactNode, useContext, useEffect} from "react";

interface SideBarProviderProps {
  children: ReactNode;
}

type SideBarContextData = UseDisclosureReturn;

const SideBarContext = createContext({} as SideBarContextData);

export function SidebarProvider({children}: SideBarProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SideBarContext.Provider value={disclosure}>
      {children}
    </SideBarContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SideBarContext);
