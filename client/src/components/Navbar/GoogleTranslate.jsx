// GoogleTranslate.js
import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en', // Set your default language
        includedLanguages: 'mr,en', // Add languages you want to support (Marathi and English)
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      }, 'google_translate_element');
    };

    addGoogleTranslateScript();
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Clean up the script when the component unmounts
    return () => {
      const script = document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
