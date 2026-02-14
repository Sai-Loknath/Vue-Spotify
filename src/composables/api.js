import qs from "qs";
import secrets from "../secrets";
import { generatePKCE } from "../utils/pkce";

const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
]

export default {
  async loginWithSpotify() {
     const { codeVerifier, codeChallenge } = await generatePKCE()

      sessionStorage.setItem('pkce_verifier', codeVerifier)

    const querystring = qs.stringify(       {
      client_id: secrets.CLIENT_ID,
      response_type: "code", // implicit grant
      redirect_uri: secrets.REDIRECTURI,
      scope: SCOPES.join(" "),
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      show_dialog: true,
    });
    console.log("here 2")
    window.location.href =
      `https://accounts.spotify.com/authorize?${querystring}`
  },
};
