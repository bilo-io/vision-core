export interface IGraph {
    id?: string;
    name?: string;
    data: {
        edges: IEdge[];
        nodes: INode[];
    };
}
export interface IEdge {
    id: string;
    label: string;
    source: string;
    target: string;
}
export interface INode {
    id: string;
    width: number;
    height: number;
    type: string;
    data: {
        label: string;
    };
}
