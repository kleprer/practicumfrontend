import { useState } from "react";

type Coordinate = {
    x: number;
    y: number;
  };
  const assets = [
    {
        title: 'А',
        coordinates: [
            [0.3, 0.35, 0.35, 0.4],
            [0.15, 0.4, 0.4, 0.8],
            [0.1, 0.3, 0.3, 0.8],
            [0.1, 0.3, 0.3, 0.8],
            [0.1, 0.2, 0.4, 0.8]
        ],
        landMarkIndexes: [
            4,
            6,
            10,
            14,
            18
        ]
    },
    {
        title: 'Б',
        coordinates: [
            [0.15, 0.3, 0.6, 1],
            [0.2, 0.35, 0.35, 65],
            [0.1, 0.35, 0.35, 65],
            [0.15, 0.3, 0.15, 0.3],
            [0.15, 0.35, 0.35, 0.6]
        ],
        landMarkIndexes: [
            0,
            4,
            6,
            12,
            14
        ]
    },
    {
        title: 'В',
        coordinates: [
            [0.25, 0.45, 0.4, 0.65],
            [0.2, 0.45, 0.25, 0.5],
            [0.1, 0.35, 0.2, 0.65],
            [0.1, 0.35, 0.2, 0.5],
            [0.1, 0.3, 0.1, 0.4]
        ],
        landMarkIndexes: [
            4,
            8,
            12,
            16,
            20
        ]
    },
    {
        title: 'Г',
        coordinates: [
            [0.1, 0.3, 0.3, 0.6],
            [0.3, 0.5, 0.4, 0.6],
            [0.15, 0.35, 0.5, 0.7],
            [0.15, 0.35, 0.5, 0.8],
            [0.2, 0.35, 0.6, 0.8]
        ],
        landMarkIndexes: [
            4,
            8,
            12,
            10,
            14
        ]
    },
    {
        title: 'Д',
        coordinates: [
            [0.2, 0.35, 0.3, 0.6],
            [0.25, 0.4, 0.25, 0.45],
            [0.3, 0.5, 0.3, 0.45],
            [0.25, 0.45, 0.5, 0.7],
            [0.25, 0.35, 0.6, 0.8]
        ],
        landMarkIndexes: [
            4,
            8,
            12,
            14, 
            18
        ]
    },
    {
        title: 'Е Ё',
        coordinates: [
            [0.25, 0.4, 0.4, 0.6],
            [0.2, 0.4, 0.3, 0.5],
            [0.2, 0.4, 0.3, 0.5],
            [0.2, 0.45, 0.35, 0.6],
            [0.2, 0.35, 0.4, 0.6]
        ],
        landMarkIndexes: [
            4,
            6,
            10,
            14, 
            18
        ]
    },
    {
        title: 'Ж',
        coordinates: [
            [0.25, 0.4, 0.4, 0.6],
            [0.25, 0.5, 0.3, 0.5],
            [0.3, 0.5, 0.3, 0.5],
            [0.3, 0.5, 0.3, 0.5],
            [0.3, 0.5, 0.4, 0.6]
        ],
        landMarkIndexes: [
            4,
            8,
            12,
            16, 
            20
        ]
    },
    {
        title: 'З',
        coordinates: [
            [0.25, 0.45, 0.5, 0.7],
            [0.25, 0.4, 0.2, 0.4],
            [0.2, 0.5, 0.45, 0.6],
            [0.25, 0.4, 0.45, 0.65],
            [0.25, 0.4, 0.5, 0.7]
        ],
        landMarkIndexes: [
            4,
            8,
            10,
            14, 
            18 
        ]
    },
    {
        title: 'И Й',
        coordinates: [
            [0.3, 0.45, 0.5, 0.7],
            [0.2, 0.4, 0.4, 0.6],
            [0.1, 0.35, 0.4, 0.6],
            [0, 0.4, 0.25, 0.55],
            [0, 0.3, 0.35, 0.7]
        ],
        landMarkIndexes: [
            4,
            6,
            10,
            16, 
            20 
        ]
    },
    {
        title: 'К',
        coordinates: [
            [0.2, 0.35, 0.5, 0.7],
            [0.25, 0.4, 0.25, 0.4],
            [0.25, 0.45, 0.25, 0.4],
            [0.3, 0.45, 0.4, 0.6],
            [0.2, 0.4, 0.5, 0.7]
        ],
        landMarkIndexes: [
            4,
            8,
            12,
            14, 
            18 
        ]
    },
    {
        title: 'Л',
        coordinates: [
            [0.1, 0.3, 0.1, 0.3],
            [0.2, 0.4, 0.7, 0.9],
            [0.1, 0.2, 0.7, 0.8],
            [0.05, 0.2, 0.4, 0.55],
            [0.05, 0.2, 0.3, 0.5]
        ],
        landMarkIndexes: [
            0,
            8,
            12,
            13, 
            17 
        ]
    },
    {
        title: 'М',
        coordinates: [
            [0.1, 0.3, 0.1, 0.3],
            [0.2, 0.4, 0.7, 0.9],
            [0.1, 0.2, 0.7, 0.8],
            [0.05, 0.2, 0.45, 0.6],
            [0.05, 0.2, 0.3, 0.5]
        ],
        landMarkIndexes: [
            0,
            8,
            12,
            14, 
            17 
        ]
    },
    {
        title: 'Н',
        coordinates: [
            [0.1, 0.3, 0.5, 0.65],
            [0.2, 0.4, 0.2, 0.4],
            [0.1, 0.2, 0.2, 0.35],
            [0.15, 0.3, 0.5, 0.7],
            [0, 0.1, 0.3, 0.5]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'О',
        coordinates: [
            [0.25, 0.4, 0.5, 0.65],
            [0.2, 0.4, 0.4, 0.6],
            [0.2, 0.35, 0.2, 0.35],
            [0.2, 0.35, 0.2, 0.35],
            [0.15, 0.25, 0.2, 0.35]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'П',
        coordinates: [
            [0, 0.3, 0.15, 0.3],
            [0.1, 0.25, 0.4, 0.65],
            [0.2, 0.4, 0.6, 0.85],
            [0.1, 0.25, 0.6, 0.9],
            [0.1, 0.25, 0.3, 0.6]
        ],
        landMarkIndexes: [
            0,
            4,
            8,
            12, 
            16
        ]
    },
    {
        title: 'Р',
        coordinates: [
            [0.2, 0.45, 0.4, 0.65],
            [0.1, 0.3, 0.3, 0.55],
            [0.1, 0.3, 0.3, 0.6],
            [0, 0.25, 0.3, 0.6],
            [0, 0.2, 0.3, 0.7]
        ],
        landMarkIndexes: [
            4,
            8,
            10,
            16, 
            20
        ]
    },
    {
        title: 'С',
        coordinates: [
            [0.3, 0.5, 0.5, 0.7],
            [0.2, 0.4, 0.2, 0.4],
            [0.2, 0.4, 0.2, 0.4],
            [0.2, 0.4, 0.2, 0.4],
            [0.2, 0.4, 0.35, 0.6]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Т',
        coordinates: [
            [0.1, 0.3, 0.1, 0.3],
            [0.2, 0.3, 0.65, 0.85],
            [0.1, 0.4, 0.65, 0.85],
            [0.1, 0.3, 0.7, 0.9],
            [0.1, 0.2, 0.4, 0.6]
        ],
        landMarkIndexes: [
            0,
            8,
            12, 
            16,
            18
        ]
    },
    {
        title: 'У',
        coordinates: [
            [0.3, 0.4, 0.4, 0.55],
            [0.2, 0.3, 0.5, 0.7],
            [0.1, 0.3, 0.5, 0.75],
            [0.1, 0.3, 0.65, 0.8],
            [0, 0.2, 0.4, 0.6]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ф',
        coordinates: [
            [0.2, 0.35, 0.4, 0.5],
            [0.3, 0.5, 0.4, 0.55],
            [0.3, 0.5, 0.4, 0.5],
            [0.3, 0.5, 0.4, 0.6],
            [0.3, 0.45, 0.4, 0.6]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Х',
        coordinates: [
            [0.3, 0.4, 0.4, 0.6],
            [0.2, 0.35, 0.3, 0.45],
            [0.2, 0.4, 0.5, 0.65],
            [0.2, 0.35, 0.5, 0.7],
            [0.2, 0.35, 0.6, 0.75]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ц',
        coordinates: [
            [0.1, 0.35, 0.4, 0.7],
            [0.2, 0.35, 0.2, 0.35],
            [0.1, 0.3, 0.1, 0.3],
            [0.1, 0.3, 0.5, 0.7],
            [0.1, 0.25, 0.5, 0.7]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ч',
        coordinates: [
            [0.25, 0.4, 0.4, 0.6],
            [0.2, 0.35, 0.3, 0.45],
            [0.2, 0.4, 0.3, 0.5],
            [0.1, 0.35, 0.5, 0.7],
            [0.2, 0.35, 0.6, 0.75]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ш Щ',
        coordinates: [
            [0.2, 0.4, 0.4, 0.6],
            [0.2, 0.35, 0.2, 0.45],
            [0.2, 0.4, 0.2, 0.35],
            [0.1, 0.35, 0.2, 0.45],
            [0.1, 0.35, 0.55, 0.75]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ъ Ь',
        coordinates: [
            [0.3, 0.4, 0.4, 0.6],
            [0.0, 0.15, 0.3, 0.45],
            [0.1, 0.3, 0.55, 0.7],
            [0.1, 0.25, 0.6, 0.8],
            [0.05, 0.2, 0.65, 0.8]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ы',
        coordinates: [
            [0.2, 0.4, 0.4, 0.65],
            [0.2, 0.35, 0.2, 0.35],
            [0.2, 0.4, 0.55, 0.7],
            [0.1, 0.35, 0.5, 0.7],
            [0.1, 0.35, 0.3, 0.45]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Э',
        coordinates: [
            [0.35, 0.5, 0.6, 0.75],
            [0.25, 0.4, 0.25, 0.45],
            [0.2, 0.4, 0.6, 0.7],
            [0.2, 0.35, 0.6, 0.8],
            [0.2, 0.35, 0.6, 0.8]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Ю',
        coordinates: [
            [0.3, 0.45, 0.5, 0.7],
            [0.3, 0.5, 0.5, 0.7],
            [0.3, 0.5, 0.55, 0.7],
            [0.3, 0.45, 0.5, 0.7],
            [0.2, 0.35, 0.3, 0.45]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    },
    {
        title: 'Я',
        coordinates: [
            [0.3, 0.4, 0.4, 0.65],
            [0.3, 0.4, 0.4, 0.6],
            [0.2, 0.4, 0.5, 0.7],
            [0.2, 0.35, 0.6, 0.8],
            [0.2, 0.35, 0.6, 0.8]
        ],
        landMarkIndexes: [
            4,
            8,
            12, 
            16,
            20
        ]
    }
  ]
  
interface AssetCheckProps {
    coords: Coordinate[];
    setRegime: React.Dispatch<React.SetStateAction<string>>;
}

const AssetCheck: React.FC<AssetCheckProps> = ({ coords, setRegime }) => {
    
    const handCoords = coords;
    const [asset, setAsset] = useState(0);
    let gesture = assets[asset].coordinates;
    let gestureIndexes = assets[asset].landMarkIndexes ;
    console.log(gesture);
    
    console.log(coords)
    if (assets[asset].title == "Я") {
        setRegime("");
    }
    if (gesture && handCoords != undefined && gestureIndexes && handCoords.length > 0) {
            if (   handCoords[gestureIndexes[0]]["x"] <= gesture[0][1] && gesture[0][0] <= handCoords[gestureIndexes[0]]["x"]
                && handCoords[gestureIndexes[0]]["y"] <= gesture[0][3] && gesture[0][2] <= handCoords[gestureIndexes[0]]["y"]
                && handCoords[gestureIndexes[1]]["x"] <= gesture[1][1] && gesture[1][0] <= handCoords[gestureIndexes[1]]["x"]
                && handCoords[gestureIndexes[1]]["y"] <= gesture[1][3] && gesture[1][2] <= handCoords[gestureIndexes[1]]["y"]
                && handCoords[gestureIndexes[2]]["x"] <= gesture[2][1] && gesture[2][0] <= handCoords[gestureIndexes[2]]["x"]
                && handCoords[gestureIndexes[2]]["y"] <= gesture[2][3] && gesture[2][2] <= handCoords[gestureIndexes[2]]["y"]
                && handCoords[gestureIndexes[3]]["x"] <= gesture[3][1] && gesture[3][0] <= handCoords[gestureIndexes[3]]["x"]
                && handCoords[gestureIndexes[3]]["y"] <= gesture[3][3] && gesture[3][2] <= handCoords[gestureIndexes[3]]["y"]
                && handCoords[gestureIndexes[4]]["x"] <= gesture[4][1] && gesture[4][0] <= handCoords[gestureIndexes[4]]["x"]
                && handCoords[gestureIndexes[4]]["y"] <= gesture[4][3] && gesture[4][2] <= handCoords[gestureIndexes[4]]["y"] )
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
            <p>{assets[asset].title}</p>
        </div>
    )
}

export default AssetCheck