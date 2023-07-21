import { createContext, useContext, useMemo, useState } from "react";

export const languageOptions = {
  en: "hello",
  es: "ola",
};
const languageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [english, setEnglish] = useState(true)

  const contextValue = useMemo(() => ({
    language: english ? "en" : "es",
    toggleLanguage: () => setEnglish((prev) => !prev),
  }));

  return (
    <languageContext.Provider value={contextValue}>
      {children}
    </languageContext.Provider>
  );
};
export const UseLanguageContext = () => {
  const contextValue = useContext(languageContext);

  if (!contextValue) throw new Error("err");
  return contextValue;
};
export default LanguageContextProvider;
