// src/main.ts
import { NodeRuntime } from "@effect/platform-node"
import { Layer } from "effect"
import { HttpLive } from "./server"

NodeRuntime.runMain(Layer.launch(HttpLive))
