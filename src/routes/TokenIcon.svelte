<script lang="ts">
  import { isNumericToken } from "$lib/tokens";
  // import { mod } from '@skeletonlabs/skeleton-svelte';
  import type { TokenName } from "./types";

  export let name: TokenName;
  export let isFilled: boolean = false;
  export let color: "primary" | "success" | "error" = "primary";
  export let dark: boolean = false;
  export let size: "8" | "16" = "8";

  $: widthClass = size === "8" ? "w-8" : "w-16";
  $: heightClass = size === "8" ? "h-8" : "h-16";
  $: fillColor =
    color === "primary"
      ? "bg-primary-500"
      : color === "success"
        ? "bg-success-500"
        : color === "error"
          ? "bg-error-500"
          : "";
  $: fillClass = isFilled ? fillColor : "";
  $: isLightMode = false;
  $: invertClass = shouldInvertImageColor(isLightMode, dark) ? "invert" : "";
  $: textColor = !shouldInvertImageColor(isLightMode, dark) ? "text-black" : "";

  const shouldInvertImageColor = (isLightMode: boolean, iconDark: boolean) => {
    if (isLightMode && iconDark) return false;
    if (isLightMode && !iconDark) return true;
    if (!isLightMode && iconDark) return true;
    if (!isLightMode && !iconDark) return false;
  };

  const getImageSrc = (name: TokenName) => {
    switch (name) {
      case "Auto-fail":
        return "auto-fail.svg";
      case "Cultist":
        return "cultist.svg";
      case "Elder sign":
        return "elder-sign.png";
      case "Elder thing":
        return "elder-thing.svg";
      case "Skull":
        return "skull.png";
      case "Tablet":
        return "tablet.svg";
      default:
        break;
    }
  };

  const hasExtraPadding = name === "Elder sign" || name === "Skull";
  const extraPadding = size === "16" ? "p-2" : "p-1";
</script>

<div
  class={`${widthClass} ${heightClass} shrink-0 rounded-full ${fillClass} flex items-center justify-center`}
>
  {#if isNumericToken(name)}
    <span class={`text-lg font-bold ${textColor}`}>{name}</span>
  {:else if name}
    <img
      src={getImageSrc(name)}
      alt={name}
      class={`h-full w-full object-contain ${invertClass} ${hasExtraPadding ? extraPadding : ""}`}
    />
  {/if}
</div>
