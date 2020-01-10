import { Stitch, AnonymousCredential } from "mongodb-stitch-browser-sdk";
import stitchAppKey from "./config"; // create a config.js with your apiKey as exported const value

async function logIn() {
  const client = Stitch.initializeDefaultAppClient(stitchAppKey); // your api key here

  const user = await client.auth.loginWithCredential(new AnonymousCredential());
  return user;
}

export { logIn };
