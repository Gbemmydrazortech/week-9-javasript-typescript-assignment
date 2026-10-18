export function add(a, b) {
  return a + b;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const APP_VERSION = "1.0.0";

export default function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2
  });

  return formatter.format(amount);
}