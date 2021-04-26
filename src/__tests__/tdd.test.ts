describe("Dog", () =>{
    it("should return palindrome", () =>{
        expect(palindromeChecker("racecar")).toBeTruthy()
        expect(palindromeChecker("mom")).toBeTruthy()
    })
    it("should not return a palindrome", () =>{
        expect (palindromeChecker("Cat")).toBeFalsy()
        expect (palindromeChecker("Bird")).toBeFalsy()
    })
} )



function palindromeChecker(word: string): boolean {
    if (!word) return false;
    const reversedWord: string = word.trim().split("").reverse().join("");
    return reversedWord.toLowerCase() == word.trim().toLowerCase();
  }