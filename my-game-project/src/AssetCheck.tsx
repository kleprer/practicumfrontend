import { useState } from "react";

type Coordinate = {
    x: number;
    y: number;
  };
  const assets = [
    {
        title: 'А',
        coordinates: {
            0: [0.2, 0.3, 0.6, 0.9],
            6: [0.2, 0.4, 0.4, 0.5],
            14: [0.1, 0.2, 0.4, 0.6]
        }
    },
    {
        title: 'Б'
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
    let landmark: any;
    console.log(handCoords);
    if (handCoords.length > 0) {
        for (landmark in assets[asset].coordinates) {
            console.log(handCoords[landmark]["x"])
            console.log(handCoords[landmark]["y"])
            
            if (handCoords[landmark]["x"] <= landmark[1] && landmark[0] <= handCoords[landmark]["x"]
                && handCoords[landmark]["y"] <= landmark[3] && landmark[2] <= handCoords[landmark]["y"])
                {
                    setAsset(asset+1);
                    console.log("SUCCESS")
                }
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