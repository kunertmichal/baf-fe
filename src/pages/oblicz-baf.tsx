import { useState } from 'react'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { usePlotData } from '@/store/store'

const indicators = [
  {
    id: 'sealedFields',
    label: 'Powierzchnie szczelne',
    color: 'bg-gray-400',
    fields: [
      {
        id: 'asphalt',
        label: 'Asfalt',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      },
      {
        id: 'concrete',
        label: 'Beton',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      },
      {
        id: 'stone',
        label: 'Kamień',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      }
    ]
  },
  {
    id: 'semiSealedFields',
    label: 'Powierzchnie półprzepuszczalne',
    color: 'bg-amber-400',
    fields: [
      {
        id: 'gravel',
        label: 'Żwir',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'concreteOpenworkSlab',
        label: 'Płyta ażurowa betonowa',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'resinCombinedAggregate',
        label: 'Kruszywa łączone żywicą',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'otherBulkMaterials',
        label: 'Inne materiały sypkie',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      }
    ]
  },
  {
    id: 'perforatedFields',
    label: 'Powierzchnie perforowane',
    color: 'bg-yellow-400',
    fields: [
      {
        id: 'mineralResinPaving',
        label: 'Nawierzchnia mineralno-żywiczna',
        description: 'Lorem ipsum',
        indicator: 0.3
      },
      {
        id: 'thistlePavingWithExpansionSpaces',
        label: 'Kostka brukowa z przestrzeniami dylatacyjnymi',
        description: 'Lorem ipsum',
        indicator: 0.3
      }
    ]
  },
  {
    id: 'permeableFields',
    label: 'Powierzchnie przepuszczalne',
    color: 'bg-blue-400',
    fields: [
      {
        id: 'geogrid',
        label: 'Geokrata (geosiatka komórkowa)',
        description: 'Lorem ipsum dolor sit',
        indicator: 1
      }
    ]
  },
  {
    id: 'bioDiverseFields',
    label: 'Powierzchnie bio-różnorodne',
    color: 'bg-green-400',
    fields: [
      {
        id: 'development',
        label: 'Zabudowa',
        description: 'Lorem ipsum dolor sit',
        indicator: 0
      },
      {
        id: 'tree',
        label: 'Drzewo (pow. odkryta pod koroną, m2)',
        description: 'Lorem ipsum dolor sit',
        indicator: 1
      },
      {
        id: 'shrub',
        label: 'Krzew (pow. odkryta pod krzewem, m2)',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'flowerMeadow',
        label: 'Łąka kwietna',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'grass',
        label: 'Trawa (murawa)',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.3
      },
      {
        id: 'greenRoofs',
        label: 'Dachy zielone',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'greenWalls',
        label: 'Ściany zielone',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.5
      },
      {
        id: 'climbingPlants',
        label: 'Rośliny pnące (na 1m2 powierzchni)',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      },
      {
        id: 'rainGarden',
        label: 'Ogrody deszczowe',
        description: 'Lorem ipsum dolor sit',
        indicator: 0.7
      }
    ]
  }
]

const initialState = indicators.reduce((previousValue, currentValue) => {
  return {
    ...previousValue,
    ...currentValue.fields.reduce((innerPrev, innerCurr) => {
      return {
        ...innerPrev,
        [innerCurr.id]: 0
      }
    }, {})
  }
}, {})

export default function CalculateBAF() {
  const [surfaceValues, setSurfaceValues] = useState(initialState)
  const area = usePlotData(state => state.area)
  const plotType = usePlotData(state => state.type)
  const plotTypeName = plotType.name
  const minBafValue = plotType.minValue

  return (
    <DefaultLayout>
      <Row className="grid-cols-2 max-w-7xl mx-auto p-12 gap-12">
        <div>
          {indicators.map(indicator => (
            <div key={indicator.id}>
              {indicator.label}
              {indicator.fields.map(field => (
                <div key={field.id}>{field.label}</div>
              ))}
            </div>
          ))}
        </div>
        <div>dzialka i wskazniki</div>
      </Row>
    </DefaultLayout>
  )
}
