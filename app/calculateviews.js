export function veiwsCalc(views) {
  if (views >= 1e7) {
    return (views / 1e7).toFixed(0) + "M";
  }
  if (views >= 1e6) {
    return (views / 1e6).toFixed(1) + "M";
  }else if (views >= 1e3) {
    return (views / 1e3).toFixed(0) + 'K';
  }else if (views > 1e2) {
    return views.toString()
  }else {
    return views.toString();
  }

}

