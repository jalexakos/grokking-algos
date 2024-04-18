// 10.1
// I would attempt to weight their ratings. E.g., if Yogi rates movie X a 5,
// but Pinky rates it a 3, I would weight their rankings on future films a similar 
// ratio. The easier move is to weigh down Yogi's ratings, so that they're similar 
// based on similar or even identical films.
// Answer: Normalization. You look at the average rating for each person and use it to scale
// their ratings.

// 10.2
// I would have films higher ranked by influencers be shared with a wider network of 
// K-closest neighbors. So their range of influence would be wider than the normal Netflix user.
// Answer: You could give more weight to the ratings of influencers when using KNN. E.g., their rating
// has 3x the influence.

// 10.3
// IMO, it's too low. There are so many films, and aspects to films, that you need to account for.
// 5 is not enough data points.
// Answer: too low. Fewer neighbors = greater likelihood of skewed results. Good rule of thumb: for N users, 
// look at sqrt(N) neighbors. E.g. N = 100, 10 nearest neighbors.
 