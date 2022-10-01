import { strings } from "../constants/strings.ts";

interface ITableHeadProps {
    locale: "no" | "en";
}

export function TableHead({ locale }: ITableHeadProps) {
    const { header } = strings[locale].table; // TODO #2 opportunity: use signal instead of props (low value)

  return (
    <thead class="table-head">
    <tr class="table-head-first-row">
        <th rowSpan={2} scope="col" class="team-name">{header.teamName}</th>
        <th rowSpan={2} scope="col">{header.rank}</th>
        <th colSpan={4}>{header.matches.name}</th>
        <th colSpan={2}>{header.goals.name}</th>
        <th rowSpan={2} scope="col">{header.points}</th>
    </tr>
    <tr class="table-head-second-row">
        <td scope="col" title={header.matches.played}><span class="small-only">{header.matches.played[0]}</span><span class="large-only">{header.matches.played}</span></td>
        <td scope="col"title={header.matches.won}><span class="small-only">{header.matches.won[0]}</span><span class="large-only">{header.matches.won}</span></td>
        <td scope="col"title={header.matches.draws}><span class="small-only">{header.matches.draws[0]}</span><span class="large-only">{header.matches.draws}</span></td>
        <td scope="col"title={header.matches.lost}><span class="small-only">{header.matches.lost[0]}</span><span class="large-only">{header.matches.lost}</span></td>
        <td scope="col"title={header.goals.scored}><span class="small-only">{header.goals.scored[0]}</span><span class="large-only">{header.goals.scored}</span></td>
        <td scope="col"title={header.goals.conceded}><span class="small-only">{header.goals.conceded[0]}</span><span class="large-only">{header.goals.conceded}</span></td>
    </tr>
</thead>
  );
}
