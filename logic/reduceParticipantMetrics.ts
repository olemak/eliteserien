import { IParticipantMetric } from "../components/Participant.tsx";

function pluckMetricValue(metrics:IParticipantMetric[], code:string):number {
    const metric = metrics.find(metric => metric.code === code) ?? { value: "0" };
    return parseInt(metric.value, 10)
}

export function reduceParticipantMetrics (metrics: IParticipantMetric[]) {

    const draftMetrics = {
            defeats: pluckMetricValue(metrics, "defeits"),
            draws: pluckMetricValue(metrics, "draws"),
            goalsagainst: pluckMetricValue(metrics, "goalsagainst"),
            goalsfor: pluckMetricValue(metrics, "goalsfor"),
            played: pluckMetricValue(metrics, "played"),
            points: pluckMetricValue(metrics, "points"),
            rank: pluckMetricValue(metrics, "rank"),
            wins: pluckMetricValue(metrics, "wins"),
          };

    return draftMetrics;
}