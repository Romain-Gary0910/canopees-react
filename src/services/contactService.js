export async function sendContactForm(data) {
  console.log("Données envoyées :", data); //  pour vérifier que la fonction est bien appelée
  try {
    const response = await fetch("http://127.0.0.1:8000/api/messages", {
      method: "POST",
      headers: {
        "Accept": "application/ld+json",
        "Content-Type": "application/ld+json"
      },
      body: JSON.stringify(data),
    });

    console.log("Réponse brute :", response); // vérifie que le serveur répond

    if (!response.ok) {
      const text = await response.text();
      console.error("Réponse API :", response.status, text);
      throw new Error(text || "Erreur lors de l'envoi du message");
    }

    const result = await response.json();
    console.log("Résultat JSON :", result); // la réponse de l’API
    return result;
  } catch (error) {
    console.error("Erreur API :", error);
    throw error;
  }
}