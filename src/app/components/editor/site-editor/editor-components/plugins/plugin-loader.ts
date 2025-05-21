import { Registry } from "@/lib/editor/registry";
import H1Component from "./h1/h1-plugin";
import InputTextComponent from "./input-text/input-text-plugin";
import { useEffect } from "react";

function loadPlugins() {
    Registry.registerComponent(H1Component.metadata.id, H1Component);
    Registry.registerComponent(InputTextComponent.metadata.id, InputTextComponent);
}

export function usePlugins() {
  useEffect(() => {
    loadPlugins();
  }, []);
}