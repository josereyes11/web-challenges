console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const title = "JS Basics & VAriables: Social Media Post";
const post = "This is the content for the post";
let likes = 199323;
const user = "username";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log("The title is", title);
console.log(post);
console.log(likes);
likes++;
console.log(likes);
console.log(user);
console.log(isReported);

// --^-- write your code here --^--
