import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

describe("_saveQuestion", () => {
    it("will return saved question", async () => {
        const question = {
            optionOneText: "first option",
            optionTwoText: "second option",
            author: "tylermcginnis",
        };
        const result = await _saveQuestion(question);
        expect(result.author).toEqual("tylermcginnis")
        expect(result.optionOne).toEqual({ text: "first option", votes: [] })
        expect(result.optionTwo).toEqual({ text: "second option", votes: [] })
    });

    it("will return an error if the question is invalid", async () => {
        var invalidQuestion = { optionOneText: "first option", author: "tylermcginnis" };
        await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
            "Please provide optionOneText, optionTwoText, and author"
        );
    });
});


describe("_saveQuestionAnswer", () => {
    it("will return true", async () => {
        const answer = { authedUser: "tylermcginnis", qid: "6ni6ok3ym7mf1p33lnez", answer: "optionOne" };
        const result = await _saveQuestionAnswer(answer);
        expect(result).toEqual(true)
    });

    it("will return an error if the answer is invalid", async () => {
        var invalidAnswer = { authedUser: "tylermcginnis", answer: "optionOne" };
        await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual(
            "Please provide authedUser, qid, and answer"
        );
    });
});
