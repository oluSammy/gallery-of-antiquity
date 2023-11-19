export function formatNumber(
  val: number,
  decimalPlaces = 0,
  { withPlusSign } = { withPlusSign: false }
): string {
  if (isNaN(val) || val === null) {
    return "N/A";
  }

  if (val > 0) {
    if (decimalPlaces === 1 && val < 0.05) {
      return "< 0.1";
    } else if (decimalPlaces === 2 && val < 0.005) {
      return "< 0.01";
    }
  } else if (val < 0) {
    if (decimalPlaces === 1 && val > -0.05) {
      return "> -0.1";
    } else if (decimalPlaces === 2 && val > -0.005) {
      return "> -0.01";
    }
  }

  if (withPlusSign && val > 0) {
    return "+" + Number(val.toFixed(decimalPlaces)).toLocaleString();
  }
  return Number(val.toFixed(decimalPlaces)).toLocaleString();
}
