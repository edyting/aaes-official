function isStrongPassword(password) {
    const errors = [];
  
    // Define regular expressions for different criteria
    const lengthRegex = /.{6,}/; // At least 8 characters
    const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
    const lowercaseRegex = /[a-z]/; // At least one lowercase letter
    const digitRegex = /\d/; // At least one digit
    const specialRegex = /[!@#$%^&*()\-_=+{};:,<.>]/; // At least one special character
  
    // Check each criteria and add error messages for those that are not met
    if (!lengthRegex.test(password)) {
      errors.push("Password must be at least 6 characters long.");
    }
    if (!uppercaseRegex.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    // if (!lowercaseRegex.test(password)) {
    //   errors.push("Password must contain at least one lowercase letter.");
    // }
    // if (!digitRegex.test(password)) {
    //   errors.push("Password must contain at least one digit.");
    // }
    // if (!specialRegex.test(password)) {
    //   errors.push("Password must contain at least one special character.");
    // }
  
    return errors.length > 0 ? errors : null; // Return array of error messages or null if password is strong
  }

  export default isStrongPassword;