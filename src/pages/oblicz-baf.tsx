import { useState } from 'react'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { AccordionsHeader } from '@/components/AccordionsHeader'
import { usePlotData } from '@/store/store'
import { indicators } from '@/constants/indicators'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

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

  const resetSurfaceValues = () => {
    setSurfaceValues(initialState)
  }

  return (
    <DefaultLayout>
      <Row className="grid-cols-2 max-w-7xl mx-auto p-12 gap-12">
        <div>
          <AccordionsHeader
            plotTypeName={plotTypeName}
            area={area}
            onReset={resetSurfaceValues}
          />
          <Accordion.Root
            type="single"
            collapsible
            defaultValue={indicators[0].id}
            className="space-y-4"
          >
            {indicators.map(indicator => (
              <Accordion.Item key={indicator.id} value={indicator.id}>
                <Accordion.Header
                  className="border-b-2 py-2 text-xl font-semibold"
                  style={{ borderColor: indicator.color }}
                >
                  <Accordion.Trigger className="w-full flex justify-between">
                    {indicator.label}
                    <div className="flex">
                      <p>
                        0{' '}
                        <span className="font-normal inline-flex">
                          m<span className="text-xs">2</span>
                        </span>
                      </p>
                      <ChevronUpDownIcon className="ml-4 w-6 h-6" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                {indicator.fields.map(field => (
                  <Accordion.Content key={field.id} className="p-2">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-6 flex flex-col justify-center">
                        <p className="text-lg font-semibold leading-tight">
                          {field.label}
                        </p>
                        <p className="text-xs">{field.description}</p>
                      </div>
                      <div className="col-span-2 flex items-center justify-center">
                        <Image
                          src="/indicator.png"
                          alt={field.label}
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="col-span-4 flex items-center">Input</div>
                    </div>
                  </Accordion.Content>
                ))}
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
        <div>dzialka i wskazniki</div>
      </Row>
    </DefaultLayout>
  )
}
