const typeWrite = (): void => {
  const textParagraph =
    document.getElementById("typeWriter") ?? document.createElement("p");
  const textArray = textParagraph.innerHTML.split("");
  textParagraph.innerHTML = "";

  setTimeout(() => {
    textArray.forEach((letter, i) => {
      setTimeout(() => {
        textParagraph.innerHTML += letter;
      }, 80 * i);
    });
  }, 1400);
};

export default typeWrite;
