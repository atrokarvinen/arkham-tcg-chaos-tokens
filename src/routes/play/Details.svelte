<script lang="ts">
  import { Accordion } from "@skeletonlabs/skeleton-svelte";
  import {
    calculateResolutionTokens,
    filterSuccessTokens,
  } from "../../lib/odds-calculation";
  import TokenIcon from "../TokenIcon.svelte";
  import type { ChartDataPoint, Token } from "../types";
  import BarChart from "./BarChart.svelte";

  export let allTokens: Token[];
  export let skillValue: number;
  export let skillCheck: number;

  $: data = oddsBySkillValue(allTokens, skillCheck);

  const oddsBySkillValue = (allTokens: Token[], skillCheck: number) => {
    const skillRange = Array.from(Array(11).keys());
    const oddsAsSkillFunc: ChartDataPoint[] = skillRange.map((skill) => {
      const successCount = filterSuccessTokens(
        allTokens,
        skill,
        skillCheck
      ).length;
      const odds = (successCount / allTokens.length) * 100;
      return { skill: skill, successChance: odds };
    });
    return oddsAsSkillFunc;
  };

  $: resolution = calculateResolutionTokens(allTokens, skillValue, skillCheck);
</script>

<Accordion collapsible>
  <Accordion.Item value="details">
    {#snippet lead()}<i class="fa-solid fa-chart-bar fa-rotate-270"
      ></i>{/snippet}
    {#snippet control()}Details{/snippet}
    {#snippet panel()}
      <div class="m-auto grid w-fit grid-cols-5 gap-1">
        {#each resolution as resolutionToken, i (`${resolutionToken.name}-${i}}`)}
          <TokenIcon
            name={resolutionToken.name}
            color={resolutionToken.success ? "success" : "error"}
            isFilled
          />
        {/each}
      </div>
      <BarChart points={data} />
    {/snippet}
  </Accordion.Item>
</Accordion>
