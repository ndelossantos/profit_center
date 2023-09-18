import { useState } from "react";

type goodShape =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number, height: number }
    | { kind: 'square'; size: number }

const goodArea = (shape: goodShape): number => {
    
    switch (shape.kind){
        case 'circle':
            return Math.PI * shape.radius * 2;
        case 'rectangle':
            return shape.width * shape.height;
        case 'square':
            return shape.size
        default:
            return shape
    }
}    

const DiscriUnion = () => {

    return (
        <div className="profitcenter">
            <h4>Discriminated Unions (Shape)</h4>
        </div>
    )
}

  
export default DiscriUnion
  