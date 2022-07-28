export interface ISquare {
    tag: 'square';
    side: number;
}

export interface IRectangle {
    tag: 'rectangle';
    width: number;
    height: number;
}

export interface ICicle {
    tag: 'circle';
    radius: number;
}

export type IShape = ISquare | IRectangle | ICicle;