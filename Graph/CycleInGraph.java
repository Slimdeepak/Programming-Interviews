package Graph;

import java.util.ArrayList;
import java.util.Iterator;

public class CycleInGraph {
	public static void main(String[] args) {
		Graph graph = new Graph(10);
		graph.addEdge(1,2);
		graph.addEdge(2,3);
		graph.addEdge(3,6);
		graph.addEdge(5,6);
		graph.addEdge(2,5);
		graph.addEdge(1,4);
		System.out.println(hasCycle(graph));
	}
	
	public static boolean hasCycle(Graph graph){
		DisjointSet ds = new DisjointSet();
		for(int vertex : graph.getAllVertex()){
			ds.makeSet(vertex);
		}
		for(Edge edge : graph.getAllEdges()){
			int rep1 = ds.findSet(edge.getV1());
			int rep2 = ds.findSet(edge.getV2());
			if(rep1==rep2){
				return true;
			}
			ds.union(edge.getV1(), edge.getV2());
		}
		return false;
	}
}


class Edge{
	int v1;
	int v2;
	
	public Edge(int v1,int v2){
		this.v1 = v1;
		this.v2 = v2;
	}
	public int getV1() {
		return v1;
	}
	public int getV2() {
		return v2;
	}
}

class Graph{
	Bag<Integer> adj[];
	ArrayList<Integer> vertex;
	ArrayList<Edge> edges;
	Graph(int v){
		adj = (Bag<Integer> []) new Bag[v];
		for(int i=0;i<v;i++){
			adj[i] = new Bag<Integer>();
		}
		vertex = new ArrayList<Integer>();
		edges = new ArrayList<Edge>();
	}
	
	public Iterable<Integer> adj(int i){
		return adj[i];
	}
	
	public void addEdge(int u,int v){
		adj[u].add(v);
		adj[v].add(u);
		if(!vertex.contains(u)){
			vertex.add(u);
		}
		if(!vertex.contains(v)){
			vertex.add(v);
		}
		edges.add(new Edge(u,v));
		//edges.add(new Edge(v,u));
	}
	
	public ArrayList<Edge> getAllEdges(){
		return edges;
	}
	public ArrayList<Integer> getAllVertex(){
		return vertex;
	}
}

class Bag<Item> implements Iterable<Item>{
	
	class Node{
		Item item;
		Node next;
	}

	private Node first;
	
	public void add(Item item){
		Node oldFirst = first;
		Node node = new Node();
		node.item = item;
		node.next = oldFirst;
		first = node;
	}

	@Override
	public Iterator<Item> iterator() {
		return new BagIterator();
	}
	
	private class BagIterator implements Iterator<Item>{
		Node current = first;
		
		@Override
		public boolean hasNext() {
			return current!=null;
		}

		@Override
		public Item next() {
			Item item = current.item;
			current = current.next;
			return item;
		}	
	}
}