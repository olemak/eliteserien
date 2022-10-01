import { strings } from "../constants/strings.ts";

interface ITableHeadProps {
    locale: "no" | "en";
}

export function TableHead({ locale }: ITableHeadProps) {
    const { header } = strings[locale].table; // TODO #2 opportunity: use signal instead of props (low value)

  return (
    <thead class="table-head">
    <tr class="table-head-first-row">
        <th rowSpan={2} scope="col">{header.teamName}</th>
        <th rowSpan={2} scope="col">{header.rank}</th>
        <th colSpan={4}>{header.matches.name}</th>
        <th colSpan={2}>{header.goals.name}</th>
        <th rowSpan={2} scope="col">{header.points}</th>
    </tr>
    <tr class="table-head-second-row">
        <td scope="col">{header.matches.played}</td>
        <td scope="col">{header.matches.won}</td>
        <td scope="col">{header.matches.draws}</td>
        <td scope="col">{header.matches.lost}</td>
        <td scope="col">{header.goals.scored}</td>
        <td scope="col">{header.goals.conceded}</td>
    </tr>
</thead>
  );
}
