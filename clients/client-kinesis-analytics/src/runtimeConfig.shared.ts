// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisAnalyticsClientConfig } from "./KinesisAnalyticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsClientConfig) => ({
  apiVersion: "2015-08-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kinesis Analytics",
  urlParser: config?.urlParser ?? parseUrl,
});
