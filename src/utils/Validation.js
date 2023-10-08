const doesNotContainCapitalLetter = (password) => {
      const noCapitalLetterRegex = /^(?![A-Z]).*$/;
      return noCapitalLetterRegex.test(password);
    };

    const isShorterThanSixCharacters = (password) => {
      return password.length < 6;
    };

    const doesNotContainSpecialCharacter = (password) => {
      const specialCharacterRegex = !/^[a-zA-Z0-9]*$/;
      return specialCharacterRegex.test(password);
    };
    

export {doesNotContainCapitalLetter, isShorterThanSixCharacters,doesNotContainSpecialCharacter}