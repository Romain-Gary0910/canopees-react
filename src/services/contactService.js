export async function sendContactForm(data) {
  console.log("Données envoyées :", data); //  pour vérifier que la fonction est bien appelée
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("Réponse brute :", response); // vérifie que le serveur répond

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du message");
    }

    const result = await response.json();
    console.log("Résultat JSON :", result); // la réponse de l’API
    return result;
  } catch (error) {
    console.error("Erreur API :", error);
    throw error;
  }
}