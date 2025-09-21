export function truncateAtWord(str, maxLength, ending = '...') {
      const ele = document.createElement("div");
      ele.textContent = "More";

      
      if (str?.length <= maxLength) return str;
      const lastSpace = str?.slice(0, maxLength - ending.length + 1).lastIndexOf(' ');
      return str.slice(0, lastSpace > 0 ? lastSpace : maxLength - ending.length) + "  " + ending + ele.innerText;
    }

