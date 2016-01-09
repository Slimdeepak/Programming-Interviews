package DisjointSetUnionRankPathCompression;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class KruskalAlgorithm {
	public static void main(String[] args) {
		EdgeWeightedGraph graph = new EdgeWeightedGraph(10);
		graph.addEdge(new WeightedEdge(0,1,1));
		graph.addEdge(new WeightedEdge(1,2,6));
		graph.addEdge(new WeightedEdge(1,4,1));
		graph.addEdge(new WeightedEdge(0,3,3));
		graph.addEdge(new WeightedEdge(3,4,1));
		graph.addEdge(new WeightedEdge(4,5,4));
		graph.addEdge(new WeightedEdge(2,5,2));
		graph.addEdge(new WeightedEdge(4,2,5));
		graph.addEdge(new WeightedEdge(3,1,3));
		
		ArrayList<WeightedEdge> result = getMST(graph);
		for(WeightedEdge e : result){
			System.out.println(e.getV1() +" ---->"+e.getV2()+"  :  " +e.weight );
		}
	}
	
	public static ArrayList<WeightedEdge> getMST(EdgeWeightedGraph graph){
		ArrayList<WeightedEdge> result = new ArrayList<WeightedEdge>();
		ArrayList<WeightedEdge> allEdge = graph.getAllEdges();
		EdgeComparator ec = new EdgeComparator();
		Collections.sort(allEdge,ec);
		/*for(WeightedEdge e : allEdge){
			System.out.println(e.weight);
		}*/
		
		DisjointSet disjointSet = new DisjointSet();
		for(int v : graph.getAllVertex()){
			disjointSet.makeSet(v);
		}
		
		for(WeightedEdge e : graph.getAllEdges()){
			int root1 = disjointSet.findSet(e.getV1());
			int root2 = disjointSet.findSet(e.getV2());
			if(root1==root2){
				continue;
			}
			else{
				result.add(e);
				disjointSet.union(e.getV1(), e.getV2());
			}
		}
		return result;
	}
}


class EdgeComparator implements Comparator<WeightedEdge>{
	@Override
	public int compare(WeightedEdge o1, WeightedEdge o2) {
		return o1.weight-o2.weight;
	}
}


class WeightedEdge{
	int v1;
	int v2;
	int weight;
	
	public WeightedEdge(int v1,int v2,int weight){
		this.v1 = v1;
		this.v2 = v2;
		this.weight = weight;
	}
	
	public int getV1() {
		return v1;
	}
	public int getV2() {
		return v2;
	}
}

class EdgeWeightedGraph{
	Bag<WeightedEdge> adj[];
	ArrayList<Integer> vertex;
	ArrayList<WeightedEdge> edges;
	EdgeWeightedGraph(int v){
		adj = (Bag<WeightedEdge> []) new Bag[v];
		for(int i=0;i<v;i++){
			adj[i] = new Bag<WeightedEdge>();
		}
		vertex = new ArrayList<Integer>();
		edges = new ArrayList<WeightedEdge>();
	}
	
	public void addEdge(WeightedEdge e){
		int v1 = e.getV1();
		int v2 = e.getV2();
		adj[v1].add(e);
		if(!vertex.contains(v1)){
			vertex.add(v1);
		}
		if(!vertex.contains(v2)){
			vertex.add(v2);
		}
		edges.add(e);
	}
	
	public ArrayList<WeightedEdge> getAllEdges(){
		return edges;
	}
	public ArrayList<Integer> getAllVertex(){
		return vertex;
	}
}