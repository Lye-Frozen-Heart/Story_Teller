
import { useState, useEffect } from "react";

export function useLanguage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [language, setLanguage] = useState("es");

  const languageToVideoUrl = {
    es: "https://www.dailymotion.com/video/k5NIvZ0I8EpGBvA6WhI",
    cat: "https://www.dailymotion.com/video/k4V3SA9C53cmoxA6WhE",
    arab: "https://www.dailymotion.com/video/kCAmnkBNr5wbHjA6WqC",
  };

  const changeLanguage = (newLanguage) => {
    console.log(newLanguage);
    setLanguage(newLanguage);
  };
  useEffect(() => {
    setVideoUrl(languageToVideoUrl[language]);
  }, [language, languageToVideoUrl]);
  return {
    language,
    videoUrl,
    changeLanguage,
  };
}

export default useLanguage;
