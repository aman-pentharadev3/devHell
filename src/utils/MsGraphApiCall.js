import { loginRequest, graphConfig } from "../authConfig";
import { msalInstance } from "../index";

export async function graphReq(
  accessToken,
  endpoint,
  apiMethod,
  payload,
  Additionalheaders = "",
  version = "v1.0"
) {
  if (!accessToken) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    accessToken = response.accessToken;
  }

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  if (
    Additionalheaders != null &&
    Additionalheaders != undefined &&
    Additionalheaders != ""
  ) {
    headers.append(Additionalheaders);
  }

  const options = {
    method: apiMethod,
    headers: headers,
  };

  if (payload != null && payload != undefined && payload != "") {
    options["body"] = JSON.stringify(payload);
  }

  return fetch(`https://graph.microsoft.com/${version}/${endpoint}`, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
