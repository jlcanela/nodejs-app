// src/server/HttpServer.ts
import { HttpMiddleware, HttpApiSwagger, HttpApiBuilder } from "@effect/platform"
import { NodeHttpServer } from "@effect/platform-node"
import { Layer } from "effect"
import { createServer } from "http"
import { MyApiLive } from "./api"

export const ServerLive = NodeHttpServer.layer(createServer, { port: 8000 })

export const HttpLive = HttpApiBuilder.serve(HttpMiddleware.logger).pipe(
    Layer.provide(HttpApiSwagger.layer()),
    Layer.provide(MyApiLive),
    Layer.provide(ServerLive)
)
