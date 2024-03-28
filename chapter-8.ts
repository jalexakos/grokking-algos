// 8.1
// at each step, pick the smallest possible box. That will help you get the most boxes in the truck.
// Wrong: pick the largest possible box. This won't give you the optimal solution.

// 8.2
// To maximize the point total, pick the highest point total item available at each turn.
// This may not give you the optimal solution, as two points could be worth less but are closer, giving 
// you more time to see more items.
// Right.

// 8.3
// Quicksort is a greedy algorithm, as it chooses the middle element, which may not be optimal on the full scale, 
// but is so locally.
// Wrong: No
// from ChatGPT:
// Quicksort is not considered a greedy algorithm because it does not make decisions based solely on the locally 
// optimal choice at each step with the hope of finding a globally optimal solution. Greedy algorithms typically 
// make decisions by selecting the best immediate option without considering the potential long-term consequences.

// In contrast, Quicksort employs a divide-and-conquer strategy, which involves recursively dividing the array into 
// smaller subarrays, sorting each subarray independently, and then combining the results. At each step of the 
// algorithm, Quicksort chooses a pivot element and partitions the array around that pivot. The choice of pivot is 
// crucial for the efficiency of the algorithm, but it is not made greedily based on a locally optimal choice.

// Furthermore, the behavior of Quicksort is determined by various factors, such as the choice of pivot, the size of 
// the input array, and the distribution of elements in the array. It does not always guarantee the globally optimal 
// solution, especially when dealing with worst-case scenarios such as sorted or nearly sorted arrays. Therefore, 
// Quicksort does not fit the criteria of a greedy algorithm.

// 8.4 
// BFS is not greedy, as it doesn't pick based on locally optimal option.
// Right: No
// from ChatGPT:
// Breadth-first search (BFS) is not considered a greedy algorithm because it does not always make decisions based 
// on a locally optimal choice at each step. Greedy algorithms typically make decisions by selecting the best  
// immediate option without considering the potential long-term consequences, aiming to find a globally optimal 
// solution.

//In contrast, BFS explores all nodes at the current depth level before moving on to nodes at the next depth level.  
// It systematically searches the entire graph level by level, ensuring that it discovers the shortest path to each 
// reachable node from the starting node. At each step, BFS considers all neighboring nodes at the current level and 
// adds them to the queue for further exploration.

// BFS is guaranteed to find the shortest path in unweighted graphs because it explores nodes in increasing order of 
// their distance from the starting node. However, it does not always produce the shortest path in weighted graphs 
// where edge weights are not uniform.

// Overall, BFS prioritizes exploring the graph systematically rather than making greedy decisions, which is why it 
// is not classified as a greedy algorithm.

// 8.5
// Dijkstra's algo is not a greedy algo, because it does work to find the full scale optimal solution.
// Wrong: Yes
// from ChatGPT:
// Yes, Dijkstra's algorithm is considered a greedy algorithm. It is a single-source shortest path algorithm that 
// operates by iteratively selecting the vertex with the smallest known distance from the source vertex and updating 
// the distances to its neighboring vertices accordingly. This selection process is based on the current shortest 
// distance known for each vertex, making it a locally optimal choice at each step.

// Dijkstra's algorithm maintains a priority queue (often implemented using a min-heap) to efficiently select the  
// next vertex with the smallest known distance. It greedily explores the graph, continuously updating the shortest 
// distance to each vertex until the shortest paths to all vertices from the source vertex have been found.

// While Dijkstra's algorithm always finds the shortest paths in non-negative weighted graphs, it may not produce 
//correct results in graphs with negative edge weights or cycles. In such cases, it can fail to find the optimal 
// solution, making it a greedy algorithm with specific constraints and limitations.

// 8.6
// Yes, it's an NP complete problem because there are variations of starting points and possible shortest paths.
// Right.

// 8.7
// Yes, because it's a set problem.
// Right.

// 8.8
// Yes, as it's also a set problem.
// Right.