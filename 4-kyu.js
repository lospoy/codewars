// ***********************************************************
// 4-kyu
// Human readable duration format
// 2022-05-28
function formatDuration (seconds) {
    if (seconds === 0) return 'now'

    const Y = Math.floor(seconds / 31536000);
    const D = Math.floor(seconds / 86400 - Y * 365);
    const H = Math.floor(seconds / 3600 - D * 24 - Y * 8760);
    const M = Math.floor(seconds / 60 - H * 60 - D * 1440 - Y * 525600);
    const S = seconds - M * 60 - H * 3600 - D * 86400 - Y * 31536000;
    
    const plural = num => num === 1 ? '' : 's';
    const YY = Y ? Y + ' year' + plural(Y) : null;
    const DD = D ? D + ' day' + plural(D) : null;
    const HH = H ? H + ' hour' + plural(H) : null;
    const MM = M ? M + ' minute' + plural(M) : null;
    const SS = S ? S + ' second' + plural(S) : null;
    
    const nonNullValues = [YY, DD, HH, MM, SS].filter(Boolean);
    const last = nonNullValues.pop();
    return nonNullValues.length === 0
      ? last
      : nonNullValues.join(', ') + ' and ' + last;
  }