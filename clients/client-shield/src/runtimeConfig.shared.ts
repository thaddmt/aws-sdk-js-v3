// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ShieldClientConfig } from "./ShieldClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ShieldClientConfig) => ({
  apiVersion: "2016-06-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Shield",
  urlParser: config?.urlParser ?? parseUrl,
});
