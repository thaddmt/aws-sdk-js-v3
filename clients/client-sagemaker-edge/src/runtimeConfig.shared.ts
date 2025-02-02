// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SagemakerEdgeClientConfig } from "./SagemakerEdgeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SagemakerEdgeClientConfig) => ({
  apiVersion: "2020-09-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Sagemaker Edge",
  urlParser: config?.urlParser ?? parseUrl,
});
