import { useState } from "react";

type Coordinate = {
    x: number;
    y: number;
  };
  const assets = [
    {
        title: 'А',
        coordinates: [
            [0.15, 0.3, 0.6, 1],
            [0.3, 0.35, 0.35, 0.4],
            [0.15, 0.4, 0.4, 0.8],
            [0.1, 0.2, 0.4, 0.8]
        ],
        landMarkIndexes: [
            0,
            4,
            6,
            14
        ]
    },
    {
        title: 'Б',
        coordinates: [
            [0.2, 0.35, 0.35, 65],
            [0.1, 0.35, 0.35, 65],
            [0.15, 0.3, 0.15, 0.3],
            [0.15, 0.35, 0.35, 0.6]
        ],
        landMarkIndexes: [
            4,
            6,
            12,
            14
        ]
    },
    {
        title: 'В'
    },
    {
        title: 'Г'
    },
    {
        title: 'Д'
    },
    {
        title: 'Е'
    },
  ]
  
const AssetCheck = ({coords}: {coords: Coordinate[]}) => {
    const handCoords = coords;
    const [asset, setAsset] = useState(0);
    let gesture = assets[asset].coordinates;
    let gestureIndexes = assets[asset].landMarkIndexes ;
    console.log(gesture);
    
    console.log(coords)
    if (gesture && gestureIndexes && handCoords.length > 0) {
        console.log(handCoords[gestureIndexes[0]]["x"])
        console.log(gesture[0][1] + " " + gesture[0][0])
            if (handCoords[gestureIndexes[0]]["x"] <= gesture[0][1] && gesture[0][0] <= handCoords[gestureIndexes[0]]["x"]
                && handCoords[gestureIndexes[0]]["y"] <= gesture[0][3] && gesture[0][2] <= handCoords[gestureIndexes[0]]["y"]
                && handCoords[gestureIndexes[1]]["x"] <= gesture[1][1] && gesture[1][0] <= handCoords[gestureIndexes[1]]["x"]
                && handCoords[gestureIndexes[1]]["y"] <= gesture[1][3] && gesture[1][2] <= handCoords[gestureIndexes[1]]["y"]
                && handCoords[gestureIndexes[2]]["x"] <= gesture[2][1] && gesture[2][0] <= handCoords[gestureIndexes[2]]["x"]
                && handCoords[gestureIndexes[2]]["y"] <= gesture[2][3] && gesture[2][2] <= handCoords[gestureIndexes[2]]["y"]
                && handCoords[gestureIndexes[3]]["x"] <= gesture[3][1] && gesture[3][0] <= handCoords[gestureIndexes[3]]["x"]
                && handCoords[gestureIndexes[3]]["y"] <= gesture[3][3] && gesture[3][2] <= handCoords[gestureIndexes[3]]["y"])
                         {
                             console.log("SUCCESS")
                             setAsset(asset+1);
        

                     
        }
    
    }


    return (
        <div>
            <img
                src={'../public/assets/' +
                    assets[asset].title +
                    '.png'}
                className="asset"
                alt={assets[asset].title}
                
            />
        </div>
    )
}

export default AssetCheck