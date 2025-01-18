// src/api/StatusApi.ts
import { HttpApi, HttpApiBuilder, HttpApiEndpoint, HttpApiGroup } from "@effect/platform"
import { Effect, Layer, Schema } from "effect"

const monitoring = HttpApiGroup.make("monitoring")
    .add(HttpApiEndpoint.get("ping")`/ping`.addSuccess(Schema.String))

export const api = HttpApi.make("MainApi").add(monitoring).prefix("/api")

const MonitoringApiLive = HttpApiBuilder.group(api, "monitoring", (handlers) =>
    handlers
        .handle("ping", (_req) => Effect.succeed("pong"))
)

export const MyApiLive = HttpApiBuilder.api(api).pipe(
    Layer.provide(MonitoringApiLive)
)
