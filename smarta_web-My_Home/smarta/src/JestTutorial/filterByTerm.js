function filterByTerm(inputArr, searchTerm) {
    /*
    Method: 
      Filters an array of URLs by a search term and returns the URLs which 
      have the search term within them
    Inputs: 
      inputArr = description: array of URLs in form of strings, type: string
      searchTerm = description: key term to find within URL, type: string
    Output: 
      array of filtered URLs 
    */
  
    // using case insensitive regular expression 
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }

  module.exports = filterByTerm;