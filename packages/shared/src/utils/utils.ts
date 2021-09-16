export function isNumber(value: any) {
  if (value === 0) return true;

  if (!value) return false;

  return !isNaN(value as any);
}

export function getOnlyNumber(value: string | number) {
  return String(value)
    .split('')
    .filter((char) => isNumber(char))
    .join('');
}

export function getIsValidEmail(email: string) {
  //Check minimum valid length of an Email.
  if (email.length <= 2) {
    return false;
  }
  //If whether email has @ character.
  if (email.indexOf('@') === -1) {
    return false;
  }

  var parts = email.split('@');
  var dot = parts[1].indexOf('.');
  var dotSplits = parts[1].split('.');
  var dotCount = dotSplits.length - 1;

  if (parts[0].length === 0) {
    return false;
  }

  //Check whether Dot is present, and that too minimum 1 character after @.
  if (dot === -1 || dot < 2 || dotCount > 2) {
    return false;
  }

  //Check whether Dot is not the last character and dots are not repeated.
  for (var i = 0; i < dotSplits.length; i++) {
    if (dotSplits[i].length === 0) {
      return false;
    }
  }

  return true;
}
