// alll unitilies function must go in this file
export const  populateLanguageFullName = (language) =>{
    if(language === "en")
    {
      return "English"
    }
    else if (language === "ko")
    {
      return "Korean"
    }
    else if (language === "es")
    {
      return "Spanish"
    }
     return language
}
