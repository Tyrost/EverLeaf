

export const isoToMonthDayYear = (isoString: string): string => {
  try {
    const date = new Date(isoString);

    if (isNaN(date.getTime())) {
      return '';
    }

    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };

    return date.toLocaleString('en-US', options);
  } catch (error) {

    return '';
  }
}

export const numberToLegible = (price: number, useCommas: boolean = false): string => {
  if (price < 0) return "0";
  if (price === 0) return "0";

  if (useCommas) {
    return price.toLocaleString('en-US');
  }

  if (price >= 1_000_000) {
    const millions = price / 1_000_000;
    if (millions >= 100) {
      return Math.round(millions) + "M";
    } else if (millions >= 10) {
      return millions.toFixed(1) + "M";
    } else {
      return millions.toFixed(2) + "M";
    }
  }
  
  if (price >= 1_000) {
    const thousands = price / 1_000;
    if (thousands >= 100) {
      return Math.round(thousands) + "k";
    } else if (thousands >= 10) {
      return thousands.toFixed(1) + "k";
    } else {
      return thousands.toFixed(2) + "k";
    }
  }
  
  return price.toString();
};