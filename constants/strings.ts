
type supportedLanguages = "no" | "en";
interface IStringsCollection {
    error: { generic: string; nameMissing: string;}
    table: any;   // TODO #3 - improve typing for table and participant strings
    match: {plural: string, singular: string};
    participant: any;
}
type IStrings={
[key in supportedLanguages]: IStringsCollection;
};

export const strings : IStrings = {
    no: {
        error: {
            generic: "Beklager! Det oppstod en feil",
            nameMissing: "Navn mangler",
        },
        table: {
            header: {
                teamName: "Lag",
                rank: "Rang",
                matches: {
                    name: "Kamper",
                    played: "Spilt",
                    won: "Vunnet",
                    draws: "Uavgjort",
                    lost: "Tapt",
                },
                goals: {
                    name: "Mål",
                    scored: "Scoringer",
                    conceded: "Innslupne",
                },
                points: "Poeng",
            },
        },
        match: {
            singular: "Kamp",
            plural: "Kamper",
        },
        participant: {
            response: {
                winsaway:"Borteseire",
                draws:"Uavgjort",
                played:"Spilt",
                wins:"Seire",
                defeits:"Tap",
            },
            labels: {
                rank: "Rangering",
                played: "Spilte",
                wins: "Seire",
                draws: "Uavgjort",
                defeats: "Tap",
                goalsFor: "Scoringer",
                goalsAgainst: "Mål sluppet inn",
                points: "poeng"
            }
        }
    },
    en: {
        error: {
            generic: "So terribly sorry. A mishap seems to have occured!",
            nameMissing: "Name is missing",
        },
        table: {
            header: {
                teamName: "Team",
                rank: "Ranking",
                matches: {
                    name: "Matches",
                    played: "Played",
                    won: "Wins",
                    draws: "Draws",
                    lost: "Concessions",
                },
                goals: {
                    name: "Goals",
                    scored: "Scored",
                    conceded: "Against",
                },
                points: "Points",
            },
        },
        match: {
            singular: "Match",
            plural: "Matches",
        },
        participant: {
            response: {
                winsaway:"Victories away",
                draws:"Draws",
                played:"Played",
                wins:"Wins",
                defeats:"Defeats",
            },
            labels: {
                rank: "Rank",
                played: "Played",
                wins: "Wins",
                draws: "Draws",
                defeats: "Defeats",
                goalsFor: "Goals",
                goalsAgainst: "Goals against",
                points: "points"
            }
        }
    }
}