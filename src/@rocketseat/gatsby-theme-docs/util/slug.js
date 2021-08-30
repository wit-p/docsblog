export default function slugify(string) {
  return string
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s/g, '-') // Replace each space with -
    .replace(
      /[^\w\-\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf\u00b4\u00C0-\u00C3\u00c7\u00C9-\u00CA\u00CD\u00D3-\u00D5\u00DA\u00E0-\u00E3\u00E7\u00E9-\u00EA\u00ED\u00F3-\u00F5\u00FA]+/g,
      '',
    ); // Removes all chars that aren't words, -, ´ or some latin characters (À Á Â Ã Ç É Ê Í Ó Ô Õ Ú à á â ã ç é ê í ó ô õ ú)
       // \u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf
       // カタカナ \u30a0-\u30ff
       // ひらがな \u3040-\u309f
       // 々, 〆（記号）\u3005-\u3006
       // CJK統合漢字 \u30e0-\u9fcf
}
