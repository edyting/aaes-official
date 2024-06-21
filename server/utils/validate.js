// make a function that validates an objects for illegal characters

const validate = (obj) => {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      // only check for illegal characters in strings
      if (typeof obj[keys[i]] !== "string") {
        continue;
      }
      if (
        obj[keys[i]].includes("\\") ||
        obj[keys[i]].includes("/") ||
        obj[keys[i]].includes("*") ||
        obj[keys[i]].includes("?") ||
        obj[keys[i]].includes('"') ||
        obj[keys[i]].includes("<") ||
        obj[keys[i]].includes(">") ||
        obj[keys[i]].includes("|") ||
        obj[keys[i]].includes(":") ||
        obj[keys[i]].includes("%") ||
        obj[keys[i]].includes("&")
      ) {
        return false;
      }
    }
    return true;
  };
  
  export default validate;
  