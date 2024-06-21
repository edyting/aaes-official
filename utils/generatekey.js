import crypto from "crypto";

async function generatekey() {
    const key = crypto.randomBytes(64).toString("hex");
    return key;
  }

  export default generatekey;