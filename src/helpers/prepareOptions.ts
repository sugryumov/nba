export const playByPlayOptions = (period: number) => ({
  label: period > 4 ? `OT${period - 4}` : `Q${period}`,
  value: period,
});
