import { useState } from "react";

type Coordinate = {
    x: number;
    y: number;
  };
  const assets = [
    {
        title: 'А',
        coordinates: {
            0: [0.23, 0.25, 0.7, 0.8],
            4: [0.3, 0.35, 0.35, 0.4],
            6: [0.25, 0.3, 0.5, 0.45, 0.5],
            14: [0.15, 0.2, 0.5, 0.55]
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
    for (landmark in assets[asset].coordinates) {
        console.log(landmark)
        if (handCoords[landmark]["x"] <= landmark[1] && landmark[0] <= handCoords[landmark]["x"]
            && handCoords[landmark]["y"] <= landmark[3] && landmark[2] <= handCoords[landmark]["y"])
            {
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