import type { FormEvent } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Form from '@radix-ui/react-form'
import { usePlotData } from '@/store/store'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { BackgroundColumn } from '@/components/BackgroundColumn'
import { Paragraph, PrimaryHeadline } from '@/components/Typography'
import { Button } from '@/components/Button/Button'
import { Select } from '@/components/Select'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function FindPlot() {
  const router = useRouter()
  const setPlotType = usePlotData(state => state.setType)
  const setArea = usePlotData(state => state.setArea)
  const [activeTab, setActiveTab] = useState<'plotIds' | 'plotAddress'>(
    'plotIds'
  )

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'plotIds' | 'plotAddress')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formElements = event.currentTarget.elements

    const getValue = (name: string) =>
      (formElements.namedItem(name) as HTMLInputElement).value

    const plotType = getValue('plotType')

    const payload = {
      data:
        activeTab === 'plotIds'
          ? {
              districtId: getValue('plotDistrictId'),
              plotId: getValue('plotId')
            }
          : {
              street: getValue('plotAddressStreet'),
              number: getValue('plotAddressNumber')
            }
    }

    setPlotType(JSON.parse(plotType))
    setArea(766)
    router.push('/oblicz-baf')

    console.log(payload)
  }

  return (
    <DefaultLayout>
      <Row className="grid-cols-2">
        <div className="px-24 flex items-center">
          <div className="w-full max-w-xl mx-auto">
            <PrimaryHeadline className="mb-2">
              Dane Twojej działki
            </PrimaryHeadline>
            <Paragraph className="mb-16">
              Jednym z czynników potrzebnych do policzenia BAFu jest
              powierzchnia działki. Wprowadź jej number lub adres, a my
              pobierzemy jej powierzchnię.
            </Paragraph>
            <Form.Root onSubmit={handleSubmit}>
              <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
                <Tabs.List className="flex space-x-2 border-b-2 pb-2">
                  <Tabs.Trigger
                    value="plotIds"
                    className="data-[state='active']:text-gray-600 data-[state='active']:bg-gray-100 py-2 px-4 rounded-md font-semibold text-gray-400 hover:text-gray-600"
                  >
                    Numer działki
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="plotAddress"
                    className="data-[state='active']:text-gray-600 data-[state='active']:bg-gray-100 p-2 rounded-md font-semibold text-gray-400 hover:text-gray-600"
                  >
                    Adres działki
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="plotIds" className="pt-8 focus:outline-0">
                  <div className="grid grid-cols-2 gap-6">
                    <Form.Field name="plotDistrictId">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Numer obrębu
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4 focus:outline-gray-600"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                    <Form.Field name="plotId">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Numer działki
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4 focus:outline-gray-600"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                  </div>
                </Tabs.Content>
                <Tabs.Content
                  value="plotAddress"
                  className="pt-8 focus:outline-0"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <Form.Field name="plotAddressStreet">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Ulica
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                    <Form.Field name="plotAddressNumber">
                      <Form.Label className="text-sm font-semibold mb-1 block">
                        Numer budynku
                      </Form.Label>
                      <Form.Control asChild>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-400 rounded-md h-12 px-4"
                        />
                      </Form.Control>
                      <Form.Message
                        match="valueMissing"
                        className="text-red-500 text-sm"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
              <Form.Field name="plotType" className="mt-6">
                <Form.Label className="text-sm font-semibold mb-1 block">
                  Typ działki
                </Form.Label>
                <Form.Control asChild>
                  <Select />
                </Form.Control>
              </Form.Field>
              <div className="flex justify-end">
                <Button className="mt-12" type="submit">
                  Dalej
                </Button>
              </div>
            </Form.Root>
          </div>
        </div>
        <BackgroundColumn bgClassName="bg-plot" />
      </Row>
    </DefaultLayout>
  )
}
