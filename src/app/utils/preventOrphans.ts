// Fonction pour éviter les orphelins typographiques (mots courts seuls en fin de ligne)
export function preventOrphans(text: string) {
  // Liste des mots courts à protéger (français et anglais)
  const motsCourts = [
    'je', 'I', 'à', 'de', 'le', 'la', 'du', 'un', 'une', 'et', 'en', 'ou', 'au', 'aux', 'des', 'sur', 'par', 'pour'
  ];
  // Regex : mot court suivi d'un espace
  const regex = new RegExp(`\\b(${motsCourts.join('|')}) `, 'gi');
  return text.replace(regex, (match, p1) => `${p1}\u00A0`);
} 