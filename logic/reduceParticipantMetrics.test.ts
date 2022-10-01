import { assertObjectMatch } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { reduceParticipantMetrics } from "./reduceParticipantMetrics.ts";

const rawMetrics = [
    { code: "rank", value: "8" },
    { code: "points", value: "32" },
    { code: "winshome", value: "7" },
    { code: "winsaway", value: "2" },
    { code: "draws", value: "5" },
    { code: "wins", value: "9" },
    { code: "playedhome", value: "12" },
    { code: "playedaway", value: "10" },
    { code: "drawshome", value: "2" },
    { code: "drawsaway", value: "3" },
    { code: "defeitshome", value: "3" },
    { code: "defeitsaway", value: "5" },
    { code: "goalsforhome", value: "28" },
    { code: "goalsforaway", value: "9" },
    { code: "goalsagainsthome", value: "17" },
    { code: "goalsagainstaway", value: "15" },
    { code: "pointshome", value: "23" },
    { code: "pointsaway", value: "9" },
    { code: "goalsfor", value: "38" },
    { code: "goalsagainst", value: "34" },
    { code: "played", value: "23" },
    { code: "defeits", value: "8" },
    { code: "trend", value: "-1" }
]

const reducedMetricsDesiredResult = { 
    rank: 8,
    played: 23,
    wins: 9,
    draws: 5,
    defeats:8,
    points: 32,
    goalsfor: 38,
    goalsagainst:34
};

Deno.test("Reduce Participant Metrics", () => {
    const reducedMetrics = reduceParticipantMetrics(rawMetrics);
    assertObjectMatch(reducedMetrics, reducedMetricsDesiredResult);
});