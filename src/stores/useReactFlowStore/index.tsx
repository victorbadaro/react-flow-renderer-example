import { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import create from 'zustand';
import { ReactFlowStore } from './types';

export const useReactFlowStore = create<ReactFlowStore>((set, get) => ({
	nodes: [],
	edges: [],

	onNodesChange(changes) {
		set({
			nodes: applyNodeChanges(changes, get().nodes)
		});
	},

	onEdgesChange(changes) {
		set({
			edges: applyEdgeChanges(changes, get().edges)
		});
	},

	onConnect(connection) {
		set({
			edges: addEdge(connection, get().edges)
		});
	}
}));
