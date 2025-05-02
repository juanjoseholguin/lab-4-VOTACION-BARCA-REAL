export const voteAction = (matchIndex: number, playerIndex: number) => ({
    type: 'VOTE',
    payload: { matchIndex, playerIndex }
  });
  