// JEST TESTING EXAMPLE --> use "npm test -- --coverage" to run!

// importing functions into this testing file
const filterByTerm = require("../../JestTutorial/filterByTerm")
const addTwoNumbers = require("../../JestTutorial/addTwoNumbers")


// "describe" = Jest method for containing one or more tests
describe("Running a sequence of tests", () => {
  // within "describe", multiple tests can be created and run
  test("Filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" },
      { id: 4, url: "https://www.link4.dev" }
    ];

    const output = [
      { id: 3, url: "https://www.link3.dev"}, 
      { id: 4, url: "https://www.link4.dev"}
    ];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("Adding two numbers together",  () => {
    const first = 2;
    const second = 3;
    const output = 5;

    expect(addTwoNumbers(first, second)).toEqual(output);
  })
});
