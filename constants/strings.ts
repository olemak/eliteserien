
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
                playedhome:"Hjemmekamper",                  // unused
                playedaway:"Bortekamper",                   // unused
                drawshome:"Uavgjort hjemme",                // unused
                drawsaway:"Uavgjort borte",                 // unused
                defeitshome:"Hjemmeseire",                  // unused
                defeitsaway:"Bortetap",                     // unused
                goalsforhome:"Mål på hjemmebane",           // unused
                goalsforaway:"Mål på bortebane",            // unused
                goalsagainsthome:"Innslipp på hjemmebane",  // unused
                goalsagainstaway:"Innslipp på bortebane",   // unused
                pointshome:"Poeng hjemmebane",              // unused
                pointsaway:"Peng bortebane",                // unused
                trend:"Trend",                              // unused
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
                playedhome:"Played home",                   // unused
                playedaway:"Played away",                   // unused
                drawshome:"Draws home",                     // unused
                drawsaway:"Draws away",                     // unused
                defeatshome:"Defeats home",                 // unused
                defeatsaway:"Defeats away",                 // unused
                goalsforhome:"Goals for home",              // unused
                goalsforaway:"Goals for away",              // unused
                goalsagainsthome:"Goals against home",      // unused
                goalsagainstaway:"Goals against away",      // unused
                pointshome:"Points home",                   // unused
                pointsaway:"Points away",                   // unused
                trend:"Trend",                              // unused
            }
        }
    }
}