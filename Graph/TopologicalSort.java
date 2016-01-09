package Graph;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashSet;
import java.util.Set;

public class TopologicalSort {
	public Deque<Integer> topSort(Graph graph){
		Deque<Integer> stack = new ArrayDeque<>();
		Set<Integer> visited = new HashSet<>();
		for(int vertex : graph.getAllVertex()){
			if(visited.contains(vertex)){
				continue;
			}
			topSortUtil(graph,vertex,stack,visited);
		}
		return stack;
	}

	private void topSortUtil(Graph graph,int vertex, Deque<Integer> stack,
			Set<Integer> visited) {
		visited.add(vertex);
		for(int childrenVertex :graph.adj(vertex)){
			if(visited.contains(childrenVertex)){
				continue;
			}
			topSortUtil(graph, childrenVertex, stack, visited);
		}
		stack.offerFirst(vertex);
	}
	
	public static void main(String[] args) {
		Graph graph = new Graph(10);
		graph.addEdge(1, 2);
		graph.addEdge(1, 3);
		graph.addEdge(3, 4);
		graph.addEdge(5, 6);
		graph.addEdge(6, 3);
		graph.addEdge(3, 8);
		graph.addEdge(7, 8);
		
		TopologicalSort tsort = new TopologicalSort();
		Deque<Integer> result = tsort.topSort(graph);
		System.out.println("Printing Topological Sort ...");
		for(int vertex : result){
			System.out.println(vertex);
		}
	}
}
