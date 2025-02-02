// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { TimestreamWriteClientConfig } from "./TimestreamWriteClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamWriteClientConfig) => ({
  apiVersion: "2018-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Timestream Write",
  urlParser: config?.urlParser ?? parseUrl,
});
