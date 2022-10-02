export const getTables = `query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      startDate
      endDate
      standings(type: LEAGUE_TABLE) {
        participants {
          name: participant {
            name
            id
          }
          data {
            code
            value
          }
        }
      }
    }
  }`;