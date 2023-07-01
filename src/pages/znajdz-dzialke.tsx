import type { SyntheticEvent } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Form from '@radix-ui/react-form'
import type { PlotType } from '@/constants/plotTypes'
import { plotTypes } from '@/constants/plotTypes'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { BackgroundColumn } from '@/components/BackgroundColumn'
import { Paragraph, PrimaryHeadline } from '@/components/Typography'
import { Button } from '@/components/Button/Button'

export default function FindPlot() {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(e)

    /**
     * TODO
     * 1.) zapisz dane do store'a
     * 2.) pobierz dane dzialki
     * 3.) przekieruj do kalkulatora
     * */
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
              <Tabs.Root defaultValue="plotId">
                <Tabs.List className="flex space-x-2 border-b-2 pb-2">
                  <Tabs.Trigger
                    value="plotId"
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
                <Tabs.Content value="plotId" className="pt-8 focus:outline-0">
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
                    <Form.Message match="valueMissing" className="text-red-500">
                      To pole nie może być puste
                    </Form.Message>
                  </Form.Field>
                </Tabs.Content>
                <Tabs.Content
                  value="plotAddress"
                  className="pt-8 focus:outline-0"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <Form.Field name="plotAddressStreet">
                      <Form.Label className="text-sm font-semibold">
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
                        className="text-red-500"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                    <Form.Field name="plotAddressNumber">
                      <Form.Label className="text-sm font-semibold">
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
                        className="text-red-500"
                      >
                        To pole nie może być puste
                      </Form.Message>
                    </Form.Field>
                  </div>
                </Tabs.Content>
              </Tabs.Root>
              <Form.Field name="plotAddressNumber" className="mt-6">
                <Form.Label className="text-sm font-semibold">
                  Typ działki
                </Form.Label>
                <Form.Control asChild>
                  <div className="relative">
                    <span className="pointer-events-none absolute bg-white px-2 top-1/2 -translate-y-1/2 right-[2px]">
                      <ChevronUpDownIcon className="w-6 h-6" />
                    </span>
                    <select className="w-full border border-gray-400 rounded-md h-12 px-4 cursor-pointer">
                      {plotTypes.map((plotType: PlotType) => (
                        <option key={plotType.id} value={plotType.minValue}>
                          {plotType.name}
                        </option>
                      ))}
                    </select>
                  </div>
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
