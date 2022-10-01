export const getTables = `query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      standings(type: LEAGUE_TABLE) {
        participants {
          name: participant {
            name
          }
          data {
            code
            value
          }
        }
      }
    }
  }`;