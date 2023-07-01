import * as Tabs from '@radix-ui/react-tabs'
import { DefaultLayout } from '@/components/DefaultLayout'
import { Row } from '@/components/Row'
import { BackgroundColumn } from '@/components/BackgroundColumn'
import { Paragraph, PrimaryHeadline } from '@/components/Typography'
import { Button } from '@/components/Button/Button'

export default function FindPlot() {
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
              powierzchnia działki. Wprowadź number działki lub jej adres, a my
              pobierzemy jej powierzchnię.
            </Paragraph>
            <Tabs.Root defaultValue="plot-id">
              <Tabs.List className="flex space-x-2 border-b-2 pb-2">
                <Tabs.Trigger
                  value="plot-id"
                  className="data-[state='active']:text-gray-600 data-[state='active']:bg-gray-100 py-2 px-4 rounded-md font-semibold text-gray-400 hover:text-gray-600"
                >
                  Numer działki
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="plot-address"
                  className="data-[state='active']:text-gray-600 data-[state='active']:bg-gray-100 p-2 rounded-md font-semibold text-gray-400 hover:text-gray-600"
                >
                  Adres działki
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="plot-id">Nr</Tabs.Content>
              <Tabs.Content value="plot-address">Ad</Tabs.Content>
            </Tabs.Root>
            <div className="flex justify-end">
              <Button className="mt-12">Dalej</Button>
            </div>
          </div>
        </div>
        <BackgroundColumn bgClassName="bg-plot" />
      </Row>
    </DefaultLayout>
  )
}
