const k = {
  //Card details
  cardNumberLength: 16,
  cardNameLength: 4,
  cardExpiryLength: 4,
  cardCvcLength: 3,
  difficultiesDropdown: [
    {
      value: "easy",
      label: "Facil",
    },
    {
      value: "medium",
      label: "Intermedio",
    },
    {
      value: "hard",
      label: "Dificil",
    },
  ],
  languagesDropdown: [
    {
      value: "text/x-java",
      label: "Java",
    },
    {
      value: "python",
      label: "Python",
    },
  ],
  codeLanguages: {
    "Java": "text/x-java",
    "Python": "python"
  },
  spanishDifficulty: {
    easy: "Fácil",
    medium: "Intermedio",
    hard: "Difícil",
  },
  msgRefresh: {
    title: "Cuidado 😨",
    description: "¿Seguro quieres refrescar? Perderás tu codigo actual 👎🏻",
    functionText: "Refrescar",
    closeText: "Cerrar",
  },
  msgChange: {
    title: "Cuidado 😨",
    description: "¿Seguro quieres cambiar de lenguaje? Perderás tu codigo actual 👎🏻",
    functionText: "Cambiar",
    closeText: "Cerrar",
  },
  msgGetCode: {
    title: "Codigo copiado 👾",
    description: "Puedes pegarlo en el editor de codigo para visualizarlo, y recuerda cambiar el lenguaje ✌🏻",
    functionText: "Visualizar",
    closeText: "Cerrar",
  },
  msgError: {
    title: "Error de conexión 👾",
    description:
        "Porfi, inténtelo de nuevo ✌🏻",
    functionText: "Recargar",
    closeText: "Cerrar",
  },
  msgAprobado: {
    title: "Yeiiii 🥳",
    description:
        "Felicidades, tu código es buenísimoo 🏆",
    functionText: "Recargar",
    closeText: "Cerrar",
  },
  msgDesaprobado: {
    title: "Awww 😭",
    description:
        "Tu código no pasó todas las pruebas. No te preocupes, lo harás mejor la proxima 💪🏻",
    functionText: "Recargar",
    closeText: "Cerrar",
  },
  msgEndModal: {
    title: "Genial! ✌🏻",
    description: "Tu problema ha sido guardado con éxito.",
    closeText: "Regresar"
  },
  msgConnectionError: {
    title: "Oh no 🤡",
    description: "Hubo un error de conexión, inténtelo de nuevo más tarde.",
    closeText: "Regresar"
  }
};

export default k;