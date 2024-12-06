const linkRegexFull =
  /\|% LINK='[.,#?=&a-zA-Z_:_\/]*' %\|[.,a-zA-Zа-яА-Я-!_ ]*\|% ENDLINK %\|/gim;
const linkRegexFullNonGlobal =
  /\|% LINK='[.,#?=&a-zA-Z_:_\/]*' %\|[.,a-zA-Zа-яА-Я-!_ ]*\|% ENDLINK %\|/im;
function parseLink(string) {
  const links = [...string.match(linkRegexFull)];
  const linkRegexStart = /\|% LINK='[.,#?=&a-zA-Z_:_\/]*' %\|/;
  for (let i = 0; i < links.length; i++) {
    let tmp = links[i];
    const href = tmp
      .match(linkRegexStart)[0]
      .replace("|%", "")
      .replace("%|", "")
      .split("=")[1]
      .trim();
    let lnk = "";
    lnk = tmp.replace(
      linkRegexStart,
      `<a class="text-bg-pink hover:underline" href=${href} ${href.startsWith("http") ? "target='_blank' referrerpolicy='origin'" : ""}>`
    );
    lnk = lnk.replace("|% ENDLINK %|", `</a>`);
    string = string.replace(linkRegexFullNonGlobal, lnk);
  }
  return string;
}

const i18nTags = document.querySelectorAll("[data-i18n]");
const i18nStyles = document.querySelectorAll("[data-i18n-style]");
function changeLanguage(lang) {
  let strings = {};
  let styles = {};
  if (lang == "ru") {
    strings = i18n_ru;
    styles = i18n_ru_style;
  }

  for (let i = 0; i < i18nTags.length; i++) {
    const element = i18nTags[i];
    const id = element.getAttribute("data-i18n");
    if (!strings[id]) {
      continue;
    }

    if (linkRegexFull.test(strings[id])) {
      element.innerHTML = parseLink(strings[id]);
    } else {
      element.innerHTML = strings[id];
    }
  }
  for (let i = 0; i < i18nStyles.length; i++) {
    const element = i18nStyles[i];
    const id = element.getAttribute("data-i18n-style");
    if (!styles[id]) {
      continue;
    }

    element.style.cssText = styles[id];
  }
}

function detectAndChangeLanguage() {
  const userLang = window.navigator.language;
  if (userLang.startsWith("ru")) {
    changeLanguage("ru");
  }
}

detectAndChangeLanguage();
